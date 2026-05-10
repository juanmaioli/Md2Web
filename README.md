# 📚 Md2Web

¡Bienvenido a **Md2Web**! Una solución de alto rendimiento para transformar tus notas locales en una experiencia web profesional.

---

## ✨ Características Destacadas

- **🎨 Personalización Total:** Soporte para **20+ temas de Obsidian** (Dracula, Catppuccin, Nord, etc.).
- **⚡ Velocidad Instantánea:** Carga bajo demanda (*Lazy Loading*) para catálogos de miles de notas.
- **🔄 Flujo en Vivo:** Sincronización automática vía **WebSockets** al guardar cambios.
- **💻 Código Impecable:** Resaltado de sintaxis pro con **Highlight.js** pre-renderizado.
- **📥 Backup Rápido:** Descarga directa de archivos `.md` desde la interfaz.
- **🏠 Inteligencia:** Muestra automáticamente tu `README.md` como portal de inicio.

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

Md2Web está optimizado para entornos de contenedores con una arquitectura robusta basada en **Node 20-Slim** (Debian) para asegurar compatibilidad total con módulos nativos.

### 1. Requisitos Previos
- Tener instalados **Docker** y **Docker Compose**.
- Colocar tus certificados (`apache.crt` y `apache.key`) en la carpeta `./ssl`.

### 2. Puesta en Marcha
```bash
# Construir la imagen e iniciar el contenedor
docker compose up -d --build
```

### 3. Acceso Seguro
La aplicación detectará automáticamente los certificados y habilitará **HTTPS** y **WSS** (WebSockets Seguros).
Accede en: [https://drawers.docker:8050](https://drawers.docker:8050)

> **Tip:** Agregá `127.0.0.1 drawers.docker` a tu archivo `/etc/hosts` para usar el dominio personalizado.

---

## 📂 Estructura del Proyecto


Proyecto desarrollado por **Juan Gabriel Maioli**.  
Diseñado para la accesibilidad, la velocidad y la elegancia técnica.

---

## 📄 Licencia
Este proyecto es de uso personal y privado.
