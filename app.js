require('dotenv').config();
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs');
const { marked } = require('marked');

// Configuración moderna de marked
marked.use({
    gfm: true,
    breaks: true,
    mangle: false,
    headerIds: false
});

const initWatcher = require('./watcher');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const MD_PATH = process.env.MD_PATH || path.join(__dirname, 'notes');
const PORT = process.env.PORT || 8050;

// Función para obtener contenido de un directorio bajo demanda
const getDirectoryContent = (relativeDir = '') => {
    const fullPath = path.join(MD_PATH, relativeDir);
    if (!fs.existsSync(fullPath)) return [];

    return fs.readdirSync(fullPath, { withFileTypes: true })
        .filter(item => !item.name.startsWith('.') && item.name !== 'node_modules')
        .map(item => ({
            title: item.name.replace('.md', ''),
            relative_path: path.join(relativeDir, item.name),
            is_directory: item.isDirectory()
        }))
        .sort((a, b) => b.is_directory - a.is_directory || a.title.localeCompare(b.title));
};

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// WebSockets
const broadcast = (data) => {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) client.send(JSON.stringify(data));
    });
};

initWatcher(MD_PATH, broadcast);

// Rutas
app.get('/', (req, res) => {
    const items = getDirectoryContent('');
    // Intentar buscar un README.md en la raíz para mostrarlo en la home
    const readmeFile = items.find(i => i.title.toLowerCase() === 'readme' && !i.is_directory);
    let readmeContent = null;

    if (readmeFile) {
        const fullPath = path.join(MD_PATH, readmeFile.relative_path);
        readmeContent = marked.parse(fs.readFileSync(fullPath, 'utf-8'));
    }

    res.render('index', { tree: items, isExplore: false, readmeContent }, (err, html) => {
        if (err) return res.status(500).send(err.message);
        res.render('layout', { title: 'Inicio', tree: items, currentPath: '', body: html });
    });
});

// Ruta para archivos Markdown (PRIORIDAD)
app.get(/.+\.md$/, (req, res) => {
    const relativePath = decodeURIComponent(req.path.substring(1));
    const fullPath = path.join(MD_PATH, relativePath);
    const relativeDir = path.dirname(relativePath) === '.' ? '' : path.dirname(relativePath);

    if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isFile()) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const htmlContent = marked.parse(content);
        const items = getDirectoryContent(relativeDir);

        res.render('content', { 
            content: htmlContent, 
            currentPath: relativePath 
        }, (err, html) => {
            if (err) return res.status(500).send(err.message);
            res.render('layout', { 
                title: path.basename(relativePath, '.md'), 
                tree: items, 
                currentPath: relativePath, 
                body: html 
            });
        });
    } else {
        res.status(404).send('Archivo no encontrado');
    }
});

// Ruta para explorar carpetas (Uso de RegEx pura para máxima compatibilidad)
app.get(/^\/explore\/(.*)/, (req, res) => {
    const relativeDir = decodeURIComponent(req.params[0] || '');
    const items = getDirectoryContent(relativeDir);
    const parentDir = path.dirname(relativeDir) === '.' ? '' : path.dirname(relativeDir);

    res.render('index', { tree: items, isExplore: true, relativeDir, parentDir, readmeContent: null }, (err, html) => {
        if (err) return res.status(500).send(err.message);
        res.render('layout', { 
            title: path.basename(relativeDir) || 'Explorar', 
            tree: items, 
            currentPath: relativeDir, 
            body: html 
        });
    });
});

// Servir archivos estáticos (imágenes) después de las rutas MD
app.use('/', express.static(MD_PATH));

// Búsqueda simplificada (solo en el directorio actual para evitar lentitud)
app.get('/api/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const dir = req.query.dir || '';
    const items = getDirectoryContent(dir);
    const results = items.filter(i => !i.is_directory && i.title.toLowerCase().includes(query));
    res.json(results);
});

// Manejo de errores 404 para otros archivos
app.use((req, res) => {
    res.status(404).send('No encontrado');
});

server.listen(PORT, () => {
    console.log(`\n---------------------------------------------------`);
    console.log(`🚀 Md2Web corriendo en http://localhost:${PORT}`);
    console.log(`📂 Ruta de notas: ${MD_PATH}`);
    console.log(`⌛ Procesando archivos... Esperá al mensaje de 'Sistema listo'.`);
    console.log(`---------------------------------------------------\n`);
});
