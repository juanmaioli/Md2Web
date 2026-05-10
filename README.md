# 📚 Md2Web

¡Bienvenido a **Md2Web**! Una aplicación potente y ligera diseñada para convertir tus carpetas locales de archivos Markdown en un sitio web estructurado y elegante en tiempo real.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>

## 🚀 Características Principales

- **🎨 Renderizado HTML Pro (Estilo GitHub):** Visualización idéntica a GitHub con soporte para etiquetas HTML nativas y resaltado de sintaxis profesional.
- **🏠 Home Inteligente:** Renderizado automático de `README.md` como página de inicio del sitio.
- **⚡ Carga Bajo Demanda (Lazy Loading):** Navegación instantánea incluso en directorios con miles de archivos.
- **🔄 Live Reload:** Los cambios que realices en tus archivos `.md` se reflejan automáticamente en el navegador sin recargar manualmente.
- **📁 Estructura Intuitiva:** Sigue la jerarquía de tus carpetas locales para generar el menú de navegación.
- **🔍 Buscador Focalizado:** Encuentra tus notas rápidamente por título dentro del directorio actual.
- **🌗 Interfaz Moderna (UpdateUI):** Diseño limpio con **Bootstrap 5.3**, modo oscuro automático y resaltado de sintaxis con **Highlight.js**.
- **🖼️ Soporte de Medios:** Visualización de imágenes y archivos estáticos locales referenciados en tus notas.

## 🛠️ Requisitos e Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd Md2Web
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar el entorno:**
   Crea un archivo `.env` en la raíz con el siguiente contenido:
   ```env
   MD_PATH=/tu/ruta/de/notas
   PORT=8050
   ```

4. **Iniciar la aplicación:**
   ```bash
   npm start
   ```

## 📂 Estructura del Proyecto

- `app.js`: Servidor principal, rutas y lógica de WebSockets.
- `database.js`: Conectividad con SQLite para persistencia y búsquedas.
- `watcher.js`: Sistema de vigilancia de archivos en tiempo real.
- `views/`: Plantillas dinámicas (EJS) para la interfaz de usuario.

## 👤 Autor

Desarrollado con ❤️ por **Juan Gabriel Maioli**.
