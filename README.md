# InnovaLaw - Sitio Web Oficial

Sitio web corporativo para InnovaLaw, estudio jurídico especializado en consultoría y asesoría legal en Santiago, Chile.

## 🚀 Características

- ⚡️ React 19 + Vite para desarrollo rápido
- 🎨 Tailwind CSS 4 para estilos modernos
- ✨ Framer Motion para animaciones fluidas
- 📱 Diseño 100% responsive
- 🔍 Optimizado para SEO
- ⚙️ TypeScript para type safety
- 🚢 Deploy automático con Cloudflare Pages

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero con animaciones
│   ├── Stats.tsx       # Estadísticas animadas
│   ├── Services.tsx    # Servicios ofrecidos
│   ├── About.tsx       # Información de la empresa
│   ├── CTA.tsx         # Call-to-action
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx      # Pie de página
├── App.tsx             # Componente raíz
├── main.tsx            # Entry point
└── index.css           # Estilos globales
```

## 🎨 Paleta de Colores

- **Primary**: `#0170B9` (Azul InnovaLaw)
- **Primary Dark**: `#005a8d`
- **Primary Light**: `#3498db`
- **Gray Dark**: `#3a3a3a`
- **Gray Medium**: `#4B4F58`

## 🚀 Deployment

### Cloudflare Pages

El proyecto está configurado para despliegue automático en Cloudflare Pages mediante GitHub Actions.

#### Configuración de Secrets

Añade estos secrets en tu repositorio de GitHub:

1. `CLOUDFLARE_API_TOKEN` - Token de API de Cloudflare
2. `CLOUDFLARE_ACCOUNT_ID` - ID de cuenta de Cloudflare

#### Pasos para el Deploy

1. Push a la rama `main`
2. GitHub Actions ejecutará el workflow automáticamente
3. El sitio se desplegará en Cloudflare Pages

### Deploy Manual

```bash
# Build del proyecto
npm run build

# Deploy con Wrangler (requiere configuración previa)
npx wrangler pages deploy dist --project-name=innovalaw-web
```

## 📝 Servicios

- **Innova Migración**: Asesoría legal para migrantes
- **Innova Personas**: Servicios legales personalizados
- **Innova Corporativo**: Derecho corporativo y empresarial
- **Innova Financiero**: Asesoría financiera legal

## 📧 Contacto

- **Dirección**: Pedro da Valdivia 291, Of 1306, Santiago, Chile
- **Email**: info@innovalaw.cl
- **Instagram**: [@innovalawcl](https://instagram.com/innovalawcl)

## 📄 Licencia

© 2024 InnovaLaw. Todos los derechos reservados.

## 🛠️ Tecnologías

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
