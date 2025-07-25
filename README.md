# Miguel Granado - Estudio de Imagen y Personalidad

[![Deploy to GitHub Pages](https://github.com/username/pagina-ale/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/username/pagina-ale/actions)

Un sitio web moderno y elegante para el estudio de imagen y personalidad de Miguel Granado, desarrollado con React y Vite.

## 🌟 Características

- **Diseño Moderno**: Interfaz elegante y profesional con animaciones suaves
- **Responsive**: Totalmente adaptable a dispositivos móviles y tablets
- **Rendimiento Optimizado**: Construido con Vite para carga rápida
- **SEO Friendly**: Optimizado para motores de búsqueda
- **Despliegue Automático**: Configurado para GitHub Pages con GitHub Actions

## 🚀 Secciones

- **Hero**: Presentación principal con filosofía del estudio
- **Estudio**: Información sobre la filosofía y servicios
- **Pelarium**: Concepto único que fusiona teatro e imagen
- **CV**: Formación académica y experiencia profesional completa
- **Contacto**: Información de turnos y ubicación

## 🛠️ Tecnologías

- **React 18**: Framework principal
- **Vite**: Build tool para desarrollo rápido
- **Tailwind CSS**: Framework de utilidades CSS para diseño moderno
- **Google Fonts**: Tipografías Playfair Display e Inter
- **GitHub Pages**: Hosting gratuito
- **GitHub Actions**: CI/CD automático

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18 o superior
- npm o yarn

### Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview

# Desplegar a GitHub Pages
npm run deploy
```

## 🚀 Despliegue

### GitHub Pages

1. **Fork del repositorio** o clona en tu cuenta de GitHub
2. **Actualiza la configuración**:
   - En `package.json`: cambia `YOUR_USERNAME` en `homepage` por tu usuario de GitHub
   - En `vite.config.js`: actualiza el `base` con el nombre de tu repositorio
3. **Habilita GitHub Pages** en la configuración del repositorio
4. **Push al branch main** - el despliegue es automático

### Configuración Manual

Si prefieres desplegar manualmente:

```bash
npm run build
npm run deploy
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navigation.jsx      # Navegación principal
│   ├── Hero.jsx           # Sección hero
│   ├── Studio.jsx         # Estudio y Pelarium
│   ├── CV.jsx             # Currículum vitae
│   ├── Contact.jsx        # Contacto y turnos
│   └── Footer.jsx         # Pie de página
├── App.jsx                # Componente principal
├── App.css               # Estilos específicos
├── index.css             # Estilos globales
└── main.jsx              # Punto de entrada
```

## 🎨 Personalización

### Colores
Los colores principales se definen en `tailwind.config.js`:

```javascript
colors: {
  primary: '#1a1a1a',
  accent: '#d4af37',
  'bg-light': '#fafafa',
  // ... más colores personalizados
}
```

### Contenido
- **Textos**: Edita los componentes en `src/components/`
- **Información personal**: Actualiza los datos en `CV.jsx` y `Contact.jsx`
- **SEO**: Modifica `index.html` para el título y descripción

### Estilos
- **Tailwind CSS**: Clases de utilidad para styling moderno
- **Componentes**: Clases Tailwind directas en JSX
- **Responsive**: Breakpoints de Tailwind (sm, md, lg, xl)

## 📞 Contacto

**Miguel Granado**
- Email: turnos@granado.com.ar
- Dirección: Av. Corrientes 1719, Piso 6°, Buenos Aires

## 📄 Licencia

Este proyecto está desarrollado como sitio web personal. Todos los derechos reservados.

---

Desarrollado con ❤️ usando React y Vite 