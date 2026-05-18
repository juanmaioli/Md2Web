# 📚 Md2Web

¡Bienvenido a **Md2Web**! La plataforma definitiva para transformar tus notas de Obsidian en una experiencia web inmersiva, elegante y accesible.

---

## ✨ Características Destacadas

- **🎨 Estética de Vanguardia:** Soporte nativo para **20+ temas de Obsidian** (Dracula, Catppuccin, Tokyo Night, etc.).
- **🎙️ Escucha Activa (TTS):** Transforma tus notas en audiolibros con **resaltado tipo karaoke** y voces de alta calidad.
- **⚡ Rendimiento Extremo:** Navegación fluida y carga instantánea incluso con miles de archivos.
- **🔄 Live Sync:** Visualización en tiempo real de tus cambios mediante **WebSockets**.
- **💻 Syntax Pro:** Resaltado de código profesional con **Highlight.js**.
- **📥 Exportación Directa:** Descarga tus archivos `.md` originales con un solo clic.
- **🏠 Portal Inteligente:** Tu `README.md` se convierte automáticamente en la página de inicio.

---

## 🎙️ Nueva Función: Lectura en Voz Alta

Md2Web ahora incluye un motor de **Text-to-Speech (TTS)** avanzado diseñado para la accesibilidad:

- **Selección de Voces:** Compatible con múltiples voces en español (incluyendo *Google español de EE.UU.* y *es-AR*).
- **Efecto Karaoke:** Resaltado visual sincronizado de la frase que se está leyendo.
- **Modo Inmersivo:** Interfaz a pantalla completa para una lectura sin distracciones.
- **Auto-Scroll:** La pantalla acompaña la lectura para que nunca pierdas el hilo.

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
```

### 3. Lanzamiento
```bash
npm start
```

### 🐳 Despliegue con Docker y HTTPS

Md2Web está optimizado para despliegues seguros y modernos.

### 1. Requisitos Previos
- **Docker** y **Docker Compose**.
- Certificados SSL (`apache.crt` y `apache.key`) en la carpeta `./ssl`.

### 2. Puesta en Marcha
```bash
# Inicia la infraestructura segura
docker compose up -d --build
```

### 3. Acceso Seguro
Accede mediante **HTTPS** y **WSS** (WebSockets Seguros) en: [https://drawers.docker:8050](https://drawers.docker:8050)

---

## 👤 Autor

Desarrollado con ❤️ por **Juan Gabriel Maioli**.  
*Enfocado en la elegancia, la velocidad y la accesibilidad.*

---

## 📄 Licencia
Este proyecto es de uso personal y privado.
