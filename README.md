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
- **Contact Section**: Contact information and appointment booking form
- **Footer**: Additional links and social media

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
   - Footer (línea 250)
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
3. Los nombres de archivo actuales son:
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

The website is optimized for speed and SEO:

- **Minimal JavaScript**: Only essential functionality
- **Optimized CSS**: Efficient selectors and minimal unused styles
- **Font Loading**: Preconnect to Google Fonts for faster loading
- **Image Optimization**: Placeholder system that can be easily replaced
- **Semantic HTML**: Proper heading structure and ARIA labels
- **Mobile Performance**: Touch optimization and viewport meta tag

## 🔍 SEO Features

- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3, etc.)
- Alt text for images (when you add real images)
- Fast loading times
- Mobile-friendly design

## 📞 Form Handling

The contact form currently includes:
- Client-side validation
- Visual feedback for user interactions
- Simulated submission (shows success message)

To make the form functional, you'll need to:
1. Set up a form handling service (like Formspree, Netlify Forms, or EmailJS)
2. Update the form action and method in `index.html`
3. Modify the JavaScript in `script.js` to handle real submissions

### Popular Form Services:

- **Formspree**: https://formspree.io (free tier available)
- **EmailJS**: https://emailjs.com (free tier available)
- **Netlify Forms**: https://netlify.com (if deployed on Netlify)

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