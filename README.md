# 📚 Md2Web

¡Bienvenido a **Md2Web**! La plataforma definitiva para transformar tus notas de Obsidian en una experiencia web inmersiva, elegante y accesible.

---

## ✨ Características Destacadas

- **🎨 Estética de Vanguardia:** Soporte nativo para **20+ temas de Obsidian** (Dracula, Catppuccin, Tokyo Night, etc.).
- **🔤 Tipografía Accesible:** Integración de la tipografía **Lato** de Google Fonts en toda la interfaz para maximizar la legibilidad y accesibilidad visual.
- **📝 Edición Web Directa:** Modificación de notas al vuelo desde el navegador con un editor adaptado al tema y guardado directo en disco.
- **🎙️ Escucha Activa con Kokoro (TTS):** Transforma tus notas en audiolibros utilizando el motor hiperrealista **Kokoro 82M** ejecutado de manera local mediante Docker.
- **🎵 Descarga de Notas en MP3:** Descargá tus notas completas en formato MP3 con un **modal de progreso en tiempo real**.
- **⚡ Rendimiento Extremo:** Navegación fluida y carga instantánea incluso con miles de archivos.
- **🔄 Live Sync:** Visualización en tiempo real de tus cambios mediante **WebSockets**.
- **💻 Syntax Pro:** Resaltado de código profesional con **Highlight.js**.
- **📥 Exportación Directa:** Descarga tus archivos `.md` originales con un solo clic.
- **🏠 Portal Inteligente:** Tu `README.md` se convierte automáticamente en la página de inicio.

---

## 🎙️ Nueva Función: Lectura con Kokoro 82M

Md2Web ahora integra el motor de **Text-to-Speech (TTS)** hiperrealista Kokoro 82M:

- **Voces Hiperrealistas:** Soporte para voces de alta calidad con crossover multilingüe (`em_santa`, `em_alex`, `ef_dora`) que logran lecturas hiperrealistas en español.
- **Efecto Karaoke:** Resaltado visual en tiempo real de la oración que se está reproduciendo.
- **Modo Inmersivo:** Pantalla completa limpia para leer y escuchar tus notas sin distracciones.
- **Auto-Scroll Inteligente:** La vista acompaña la lectura de manera fluida en cada oración.

---

## 📥 Nueva Función: Descarga MP3 con Progreso

Ahora podés guardar tus notas para escucharlas sin conexión en cualquier dispositivo:

- **Consolidación en el Cliente:** La aplicación segmenta el texto y genera el audio fragmento por fragmento en tiempo real.
- **Modal de Progreso:** Un modal animado te mantiene al tanto de la generación del MP3 indicando el porcentaje actual.
- **Concatenación Automática:** Se genera un único archivo de descarga consolidado con la nota completa en formato MP3.

---

## 📝 Nueva Función: Edición Web Directa

Podés editar tus notas de Obsidian al vuelo directamente en el navegador:

- **Botonera en Cabecera:** Botones de **Guardar cambios** y **Cancelar** al lado del breadcrumb para fácil acceso.
- **Esquema de Colores Dinámico:** La interfaz del editor se adapta de forma automática al tema activo de Obsidian.
- **Tipografía Monospace:** El área de edición conserva una fuente monospace premium para una escritura y estructuración del Markdown cómoda y limpia.
- **Sincronización Inmediata:** Al guardar los cambios, el archivo se escribe directamente en el disco duro y se refleja inmediatamente mediante WebSockets.

---

## 🛠️ Instalación y Despliegue

### 1. Preparación
```bash
git clone <tu-repositorio>
cd Md2Web
npm install
```

### 2. Configuración (.env)
```env
MD_PATH=/home/juan/Documentos/Notas/
PORT=8050
KOKORO_API_URL=https://localhost:8880/v1/audio/speech
```

### 3. Lanzamiento local
```bash
npm start
```

### 🐳 Despliegue con Docker y HTTPS

Md2Web está preparado para correr en Docker conectado de forma segura a la red de Kokoro.

### 1. Requisitos Previos
- **Docker** y **Docker Compose**.
- Certificados SSL (`apache.crt` y `apache.key`) en la carpeta `./ssl`.
- El contenedor de la API de Kokoro (`kokoro-tts`) activo en la red externa `kokoro-network`.

### 2. Puesta en Marcha
```bash
# Asegurarse de que la red externa esté creada
docker network create kokoro-network

# Iniciar la infraestructura segura
docker compose up -d --build
```

### 3. Acceso Seguro
Accedé mediante **HTTPS** y **WSS** (WebSockets Seguros) en: [https://drawers.docker:8050](https://drawers.docker:8050)

---

## 👤 Autor

Desarrollado con ❤️ por **Juan Gabriel Maioli**.  
*Enfocado en la elegancia, la velocidad y la accesibilidad.*

---

## 📄 Licencia

Este proyecto es de uso personal y privado.
