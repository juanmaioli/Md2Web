const chokidar = require('chokidar');
const path = require('path');

/**
 * Watcher simplificado: Solo vigila cambios en el archivo actual para Live Reload
 */
const initWatcher = (mdPath, broadcast) => {
    const watcher = chokidar.watch(mdPath, {
        ignored: [/(^|[\/\\])\../, '**/node_modules/**', '**/.git/**'],
        persistent: true,
        ignoreInitial: true // No escaneamos al inicio
    });

    watcher.on('change', (fullPath) => {
        const rel = path.relative(mdPath, fullPath);
        if (rel.endsWith('.md')) {
            console.log(`📝 Cambio detectado: ${rel}`);
            broadcast({ type: 'reload', path: rel });
        }
    });

    return watcher;
};

module.exports = initWatcher;
