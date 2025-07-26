# Sitio Web Profesional de Peluquería

Un sitio web moderno y responsivo de una sola página para un negocio profesional de peluquería. Construido con HTML5, CSS3 y JavaScript vanilla para un rendimiento y SEO óptimos. 

**🇦🇷 Sitio en Español - Optimizado para Argentina**

## ✨ Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Fast Loading**: Minimal dependencies, optimized assets
- **Professional Design**: Modern UI with elegant animations
- **Interactive Elements**: Smooth scrolling, mobile navigation, form validation
- **GitHub Pages Ready**: Zero configuration deployment

## 🚀 Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Professional background and services offered
- **Portfolio Section**: Showcase of different hairstyles and transformations
- **Contact Section**: Contact information and direct communication details

## 🛠️ Technologies Used

- **HTML5**: Semantic structure with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Interactive features and form handling
- **Font Awesome**: Professional icons
- **Google Fonts**: Typography (Inter + Playfair Display)

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation with hamburger menu
- Flexible grid layouts that adapt to screen size
- Optimized typography scaling
- Touch-friendly interactive elements
- Fast loading on all devices

## 🔧 Customization

### Actualizando el Contenido

1. **Información del Negocio**: Edita los detalles de contacto en `index.html`:
   - Número de teléfono (línea 201) - Actualmente: (011) 5555-4321
   - Dirección de email (línea 207) - Actualmente: info@salonelegancia.com
   - Dirección física (líneas 213-214) - Actualmente: Av. Corrientes 1234, Buenos Aires
   - Horarios de atención (línea 220)
   - Enlaces de redes sociales (líneas 261-263)

2. **Nombre del Negocio**: Actualiza "Salón Elegancia" en todo el sitio:
   - Logo de navegación (línea 39)
   - Meta tags (líneas 11, 17, 19)

3. **Servicios**: Modifica la lista de servicios en la sección Sobre Mí (líneas 88-95)

4. **Portafolio**: Actualiza los elementos del portafolio en la sección Portafolio (líneas 109-172)

### Styling

The website uses CSS custom properties (variables) for easy color customization:

```css
:root {
    --primary-color: #d4af37;      /* Gold accent color */
    --primary-dark: #b8941f;       /* Darker gold for hover states */
    --secondary-color: #2c2c2c;    /* Dark background color */
    --accent-color: #f8f5f0;       /* Light cream background */
}
```

### Agregando Imágenes Reales

Reemplaza las imágenes placeholder con fotos reales:

1. El directorio `images/` ya está creado con placeholders
2. Reemplaza los archivos existentes con tus fotos (recomendado: 800x600px para portafolio, 400x400px para about)
3. Los nombres de archivo actuales son (en `assets/images/`):
   - `hero-salon.jpg` - Imagen principal del salón
   - `hairdresser-portrait.jpg` - Retrato del peluquero
   - `bob-cut.jpg` - Corte bob clásico
   - `blonde-highlights.svg` - Mechas rubias (SVG placeholder)
   - `wedding-updo.jpg` - Recogido de novia
   - `pixie-cut.jpg` - Corte pixie moderno
   - `natural-curls.jpg` - Rizos naturales
   - `color-transformation.svg` - Transformación de color (SVG placeholder)

**Nota**: Algunas imágenes son SVG placeholders que puedes reemplazar con JPG/PNG reales.

## 🚀 Deployment to GitHub Pages

### Method 1: Direct Upload (Recommended)

1. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com)
   - Click "New" repository
   - Name it something like `hairdresser-website` or `salon-website`
   - Make it public
   - Don't initialize with README (we already have files)

2. **Upload files**:
   - Click "uploading an existing file"
   - Drag and drop all files (`index.html`, `styles.css`, `script.js`, `README.md`)
   - Commit the files

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your website**:
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes to become available

### Method 2: Git Command Line

If you have Git installed:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial website setup"

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/yourusername/repository-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 3-4 from Method 1.

## 📊 Performance Optimizations

El sitio web está optimizado para velocidad y SEO:

- **JavaScript Mínimo**: Solo funcionalidad esencial (navegación y animaciones)
- **CSS Optimizado**: Selectores eficientes sin estilos no utilizados
- **Carga de Fuentes**: Preconexión a Google Fonts para carga más rápida
- **Imágenes Optimizadas**: Sistema de imágenes reales bien comprimidas
- **HTML Semántico**: Estructura de encabezados y etiquetas ARIA apropiadas
- **Rendimiento Móvil**: Optimización táctil y meta viewport
- **Código Limpio**: Eliminación de funcionalidades no utilizadas (formularios, notificaciones)

## 🔍 SEO Features

- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3, etc.)
- Alt text for images (when you add real images)
- Fast loading times
- Mobile-friendly design

## 📞 Información de Contacto

La sección de contacto incluye:
- Información de teléfono, email y dirección
- Horarios de atención
- Diseño centrado y responsivo
- **Nota**: El formulario de contacto fue removido para simplicidad - los clientes pueden contactar directamente por teléfono o email

## 🎨 Favicon

El sitio incluye un favicon profesional con temática de peluquería (en `assets/`):
- `favicon.svg` - Versión vectorial con tijeras doradas
- `favicon-32x32.png` - Versión PNG de 32x32px  
- `favicon.ico` - Versión ICO para compatibilidad antigua

## 📁 Estructura de Archivos

El proyecto está organizado de manera profesional:

```
pagina-ale/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── script.js       # JavaScript principal
├── assets/
│   ├── favicon.svg     # Iconos del sitio
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── images/         # Todas las imágenes
│       ├── hero-salon.jpg
│       ├── hairdresser-portrait.jpg
│       └── [portfolio images...]
├── README.md           # Documentación
└── .gitignore         # Archivos ignorados por Git
```

## 🆘 Support

If you need help customizing the website:

1. Check this README for common customizations
2. View the code comments for guidance
3. Test changes locally by opening `index.html` in your browser
4. Use browser developer tools (F12) to debug any issues

## 📄 License

This website template is free to use for personal and commercial projects. No attribution required, but appreciated!

## 🔄 Updates

To update the website after initial deployment:
1. Make changes to the files locally
2. Test by opening `index.html` in your browser
3. Upload the changed files to GitHub (or use git commands)
4. Changes will automatically appear on your GitHub Pages site

---

**Built with ❤️ for professional hairdressers** 