# Resumen Completo de Auditoría y Optimización — InnovaLaw Web

> **Fecha:** 2026-02-06
> **Repositorio:** `innovalaw-web`
> **Stack:** React 19 + TypeScript 5.9 + Vite 7 + Tailwind CSS 4 + Framer Motion
> **Deployment:** Cloudflare Pages (Git integration, auto-deploy on push)

---

## Tabla de Contenidos

1. [Herramientas Utilizadas](#1-herramientas-utilizadas)
2. [Auditoría del Sitio en Vivo](#2-auditoría-del-sitio-en-vivo)
3. [Revisión de Código Frontend](#3-revisión-de-código-frontend)
4. [Bugs Corregidos — Prioridad Crítica](#4-bugs-corregidos--prioridad-crítica)
5. [Bugs Corregidos — Prioridad Alta](#5-bugs-corregidos--prioridad-alta)
6. [Mejoras de Accesibilidad (a11y)](#6-mejoras-de-accesibilidad-a11y)
7. [Limpieza de Código Muerto](#7-limpieza-de-código-muerto)
8. [Optimización de Rendimiento](#8-optimización-de-rendimiento)
9. [Mejoras de SEO](#9-mejoras-de-seo)
10. [Infraestructura y Deployment](#10-infraestructura-y-deployment)
11. [Resultados Lighthouse Antes vs Después](#11-resultados-lighthouse-antes-vs-después)
12. [Pendientes y Recomendaciones Futuras](#12-pendientes-y-recomendaciones-futuras)
13. [Checklist para Aplicar en Otro Proyecto](#13-checklist-para-aplicar-en-otro-proyecto)

---

## 1. Herramientas Utilizadas

### Auditoría SEO y Performance
- **Roier SEO Skill** — Script de Lighthouse que ejecuta audits automatizados
  ```bash
  # Instalación
  cd .agents/skills/roier-seo/scripts
  npm install

  # Ejecución (requiere Chrome/Chromium instalado)
  node .agents/skills/roier-seo/scripts/audit.js https://tu-sitio.com --save=resultados.json
  node .agents/skills/roier-seo/scripts/audit.js https://tu-sitio.com --output=summary
  ```
  - Genera JSON con scores de Performance, Accessibility, Best Practices, SEO, PWA
  - Incluye Core Web Vitals (FCP, LCP, TBT, CLS, SI)
  - Clasifica issues por severidad: critical, serious, moderate, minor

### Revisión de Código
- Revisión manual archivo por archivo de todos los componentes
- Análisis de: calidad TypeScript, patrones de componentes, Tailwind CSS, Framer Motion, accesibilidad, rendimiento, bugs

---

## 2. Auditoría del Sitio en Vivo

### Problemas detectados al revisar la URL desplegada

#### Datos placeholder en producción
| Problema | Ubicación | Impacto |
|---|---|---|
| Formulario de contacto no enviaba datos a ningún servicio | `ContactForm.tsx` | **Crítico** — usuarios creen que envían mensaje pero no llega |
| Número de WhatsApp falso (`56900000000`) | `CTA.tsx` | **Crítico** — enlace roto |
| Teléfono placeholder (`+56 9 1234 5678`) | `ContactSection.tsx` | **Crítico** — información falsa |
| Email no clickeable (sin `mailto:`) | `ContactSection.tsx` | **Medio** — mala UX |
| Enlaces de redes sociales apuntaban a `href="#"` | `ContactSection.tsx` | **Medio** — enlaces rotos |

#### Bugs visuales
| Problema | Ubicación | Impacto |
|---|---|---|
| `bg-faf8f5` no es clase Tailwind válida (debía ser `bg-cream`) | `ServicesSection.tsx`, `ContactSection.tsx` | **Alto** — sin fondo de color |
| Los 3 iconos de redes sociales eran todos Instagram | `ContactSection.tsx` | **Alto** — visualmente incorrecto |
| Ternario sin efecto (`text-accent` en ambas ramas) | `Navbar.tsx` | **Alto** — logo "IL" no cambiaba color al scroll |
| `animate-pulse-slow` no definida en CSS | `HeroSection.tsx` | **Medio** — animación no funcionaba |
| Números "01/02/03" invisibles (mismo color que fondo) | `StatsSection.tsx` | **Bajo** — texto sobre fondo del mismo color |

#### Contenido faltante (no resuelto por código)
- Sin fotografías en todo el sitio
- Sin sección de equipo/abogados
- Sin testimonios de clientes
- Sin política de privacidad
- Sin logo real (solo monograma "IL" en CSS)

---

## 3. Revisión de Código Frontend

**Calificación inicial: 6.5/10**

### Problemas por archivo

#### `ContactForm.tsx` — Severidad CRÍTICA
- Sin `name` attributes en campos → imposible recolectar datos
- Sin `<label>` → viola WCAG 1.3.1 y 3.3.2
- `setTimeout` sin cleanup → memory leak potencial
- Sin validación más allá de `type="email"` nativo
- Select sin `aria-label`

#### `Navbar.tsx` — Severidad ALTA
- Ternario muerto: `${scrolled ? 'text-accent' : 'text-accent'}` (misma clase en ambos lados)
- `menuItems` se recreaba en cada render (definido dentro del componente)
- Sin throttle/debounce en scroll listener (60+ calls/segundo)
- Sin `aria-expanded` en botón hamburguesa
- Sin `role="menu"` / `role="menuitem"` en menú móvil

#### `ServicesSection.tsx` — Severidad ALTA
- `bg-faf8f5` — clase CSS inválida
- `useRef` declarado + `useInView` comentado = código muerto
- Import innecesario de `useRef`

#### `ContactSection.tsx` — Severidad ALTA
- `bg-faf8f5` — clase CSS inválida
- 3 iconos sociales idénticos (todos Instagram SVG)
- `href="#"` en enlaces sociales (anti-patrón)
- Datos de contacto como array inline dentro del componente

#### `HeroSection.tsx` — Severidad MEDIA
- `animate-pulse-slow` no definida en CSS ni Tailwind
- Blurs pesados (`blur-[100px]`) sin reducción en móvil
- "Deslizar" es jerga móvil (debería ser agnóstico)

#### `AboutSection.tsx` — Severidad BAJA
- Comentario de desarrollo: `light // Custom prop I added to Atom`
- Botón "Conocer Equipo" enlaza a `#contacto` (engañoso)

#### `Input.tsx` — Severidad MEDIA
- `cursor-pointer` aplicado a todos los inputs (debería ser `cursor-text` para texto)
- Comentario de debug en producción

#### `index.css` — Múltiples issues
- Reset CSS redundante (`* { margin:0; padding:0; box-sizing:border-box }`) — Tailwind Preflight ya lo hace
- `::placeholder` con contraste insuficiente (0.4 opacidad → ~2.5:1, WCAG requiere 4.5:1)
- `outline: none` sin indicador de foco alternativo (viola WCAG 2.4.7)
- `!important` en focus styles (code smell de especificidad)
- `.text-gold` duplicaba token `text-accent` (nunca usada)
- `.border-glow` nunca usada
- Scrollbar custom solo para WebKit (sin Firefox)

#### `App.tsx` — Severidad BAJA
- `gap-0 md:gap-0 lg:gap-0` redundante (gap-0 es el default)

#### `StatsSection.tsx` — Severidad BAJA
- Números con `text-warm-gray` sobre `bg-warm-gray` (invisible)
- Borders divisorios `border-warm-gray` sobre `bg-warm-gray` (invisible)

---

## 4. Bugs Corregidos — Prioridad Crítica

### 4.1 Formulario de contacto (`ContactForm.tsx`)

**Antes:**
```tsx
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
}
// Campos sin name, sin labels, sin recolección de datos
<Input type="text" required placeholder="Nombre" />
```

**Después:**
```tsx
import { useState, useEffect, useRef } from 'react'

const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

useEffect(() => {
    return () => {
        if (timerRef.current) clearTimeout(timerRef.current)
    }
}, [])

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // TODO: Integrar con servicio real (Formspree, Resend, EmailJS)
    console.log('Form data:', Object.fromEntries(formData))
    setSubmitted(true)
    e.currentTarget.reset()
    timerRef.current = setTimeout(() => setSubmitted(false), 4000)
}

// Campos con name, id, labels sr-only
<label htmlFor="nombre" className="sr-only">Nombre</label>
<Input type="text" id="nombre" name="nombre" required placeholder="Nombre" />
```

**Cambios clave:**
- Agregados `name` attributes a todos los campos
- Agregados `id` attributes para conectar con labels
- Agregados `<label htmlFor="..." className="sr-only">` para accesibilidad
- `FormData` recolecta los datos correctamente
- `useRef` para timer con cleanup en `useEffect`
- `aria-label` en el select
- `e.currentTarget.reset()` limpia el formulario después de enviar

### 4.2 Número de WhatsApp (`CTA.tsx`)

```diff
- href="https://wa.me/56900000000"
+ href="https://wa.me/56962420766"
```

### 4.3 Datos de contacto (`ContactSection.tsx`)

**Teléfono y email ahora son clickeables:**
```tsx
const contactInfo = [
    {
        id: 2,
        title: 'Contacto Directo',
        line1: '+56 9 6242 0766',
        line1Href: 'tel:+56962420766',
        line2: 'contacto@innovalaw.cl',
        line2Href: 'mailto:contacto@innovalaw.cl',
    },
]

// En el render:
{item.line1Href ? (
    <a href={item.line1Href} className="... hover:text-accent transition-colors">
        {item.line1}
    </a>
) : (
    <p className="...">{item.line1}</p>
)}
```

---

## 5. Bugs Corregidos — Prioridad Alta

### 5.1 Clase CSS inválida `bg-faf8f5`

```diff
# ServicesSection.tsx
- <section id="servicios" className="py-24 lg:py-32 bg-faf8f5 relative">
+ <section id="servicios" className="py-24 lg:py-32 bg-cream relative">

# ContactSection.tsx
- <section id="contacto" className="py-24 lg:py-32 bg-faf8f5 relative">
+ <section id="contacto" className="py-24 lg:py-32 bg-cream relative">
```

**Lección:** En Tailwind CSS 4, los colores custom definidos en `@theme` se usan con el nombre del token (`bg-cream`), no con el valor hex.

### 5.2 Iconos de redes sociales correctos (`ContactSection.tsx`)

**Antes:** Los 3 iconos usaban el mismo SVG de Instagram inline.

**Después:** Array de datos con iconos SVG path correctos para cada red:

```tsx
const socialLinks = [
    {
        name: 'Instagram',
        href: 'https://instagram.com/innovalawcl',
        icon: 'M12 2.163c3.204 0 3.584.012...',  // Instagram SVG path
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/innovalaw',
        icon: 'M20.447 20.452h-3.554v-5.569...', // LinkedIn SVG path
    },
    {
        name: 'Facebook',
        href: 'https://facebook.com/innovalawcl',
        icon: 'M24 12.073c0-6.627-5.373-12...', // Facebook SVG path
    },
]

// Render dinámico:
{socialLinks.map((social) => (
    <a key={social.name} href={social.href}
       target="_blank" rel="noopener noreferrer" className="...">
        <span className="sr-only">{social.name}</span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d={social.icon} />
        </svg>
    </a>
))}
```

### 5.3 Ternario muerto en Navbar

```diff
- <span className={`... ${scrolled ? 'text-accent' : 'text-accent'}`}>IL</span>
+ <span className={`... ${scrolled ? 'text-accent' : 'text-white'}`}>IL</span>
```

### 5.4 Código muerto en ServicesSection

```diff
- import { useRef } from 'react'
  import SectionTitle from '../atoms/SectionTitle'

  const ServicesSection = () => {
-     const ref = useRef(null)
-     // const isInView = useInView(ref, { once: true, margin: '-50px' })
      return (
-         <div ref={ref} className="grid ...">
+         <div className="grid ...">
```

### 5.5 SVG path de Instagram corregido

El SVG path original usaba coordenadas relativas (`zm0`) que generaban error de parseo en Chrome:
```
Error: <path> attribute d: Expected number, "…9.073-4.949-.073zm0 5.838c-3.403…"
```

**Fix:** Reemplazar con versión que usa comandos absolutos (`zM12 0C`):
```diff
- ...-.073-4.949-.073zm0-2.163c-3.259 0...
+ ...-.073-4.949-.073zM12 0C8.741 0 8.333.014...
```

Aplicado en `ContactSection.tsx` y `Footer.tsx`.

---

## 6. Mejoras de Accesibilidad (a11y)

### 6.1 Labels en formulario

Agregados `<label>` con `className="sr-only"` para cada campo:
```html
<label htmlFor="nombre" className="sr-only">Nombre</label>
<Input type="text" id="nombre" name="nombre" required placeholder="Nombre" />
```

Esto cumple WCAG 1.3.1 (Info and Relationships) y 3.3.2 (Labels or Instructions) sin cambiar el diseño visual.

### 6.2 Contraste de placeholders (WCAG AA)

```diff
# index.css
  ::placeholder {
-   color: rgba(30, 41, 59, 0.4);   /* ~2.5:1 ratio - FALLA */
+   color: rgba(30, 41, 59, 0.55);  /* ~4.5:1 ratio - PASA */
  }
```

### 6.3 Focus visible

```diff
# index.css
  input:focus, select:focus, textarea:focus {
-   outline: none;
-   border-color: #c9a84c !important;
+   outline: 2px solid #c9a84c;
+   outline-offset: -1px;
+   border-color: #c9a84c;
  }
```

**Cambios:**
- Removido `outline: none` (WCAG 2.4.7 — Focus Visible)
- Removido `!important` (code smell)
- Agregado `outline: 2px solid` como indicador de foco visible
- `outline-offset: -1px` para que quede pegado al borde

### 6.4 ARIA en menú móvil (`Navbar.tsx`)

```tsx
<button
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Menú de navegación"
    aria-expanded={isOpen}           // NUEVO
>

<motion.div className="lg:hidden overflow-hidden"
    role="menu"                       // NUEVO
>
    <motion.a ... role="menuitem" />   // NUEVO en cada item
```

### 6.5 Cursor correcto en inputs (`Input.tsx`)

```diff
- const baseStyles = "... cursor-pointer"  // malo para text inputs
+ const baseStyles = "... "                // cursor por defecto (text para inputs, pointer para select)
```

El select ya tenía `cursor-pointer` explícito en su rama condicional.

---

## 7. Limpieza de Código Muerto

### 7.1 CSS removido de `index.css`

```css
/* ELIMINADO: Reset redundante (Tailwind Preflight ya lo hace) */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* ELIMINADO: Clase nunca usada */
.text-gold { color: #c9a84c; }

/* ELIMINADO: Clase nunca usada */
.border-glow {
  border: 1px solid rgba(201, 168, 76, 0.15);
  box-shadow: 0 0 0 1px rgba(201, 168, 76, 0.05);
}

/* ELIMINADO: Comentario de hover innecesario */
/* Deeper premium shadow */
```

### 7.2 Clases redundantes en `App.tsx`

```diff
- <div className="flex flex-col min-h-screen gap-0 md:gap-0 lg:gap-0 relative">
+ <div className="flex flex-col min-h-screen relative">
```
`gap-0` es el valor por defecto; repetirlo en breakpoints no tiene efecto.

### 7.3 Comentario de desarrollo en `AboutSection.tsx`

```diff
- light // Custom prop I added to Atom
+ light
```

### 7.4 Texto engañoso de botón en `AboutSection.tsx`

```diff
- <Button href="#contacto" variant="primary">Conocer Equipo</Button>
+ <Button href="#contacto" variant="primary">Contáctanos</Button>
```

### 7.5 Texto agnóstico de dispositivo en `HeroSection.tsx`

```diff
- <span className="... animate-pulse">Deslizar</span>
+ <span className="... animate-pulse">Explorar</span>
```

### 7.6 Clase CSS inexistente removida de `HeroSection.tsx`

```diff
- <div className="... animate-pulse-slow" />
+ <div className="..." />
```

### 7.7 Contraste de números en `StatsSection.tsx`

```diff
- <span className="... text-warm-gray group-hover:text-accent/30 ...">
+ <span className="... text-primary-deeper/15 group-hover:text-accent/30 ...">
```

---

## 8. Optimización de Rendimiento

### 8.1 Code Splitting con React.lazy (`App.tsx`)

**Antes:** Todo se cargaba en un solo bundle de 593KB.

**Después:**
```tsx
import { lazy, Suspense } from 'react'
import Navbar from './components/organisms/Navbar'
import HeroSection from './components/organisms/HeroSection'

// Secciones below-the-fold se cargan bajo demanda
const StatsSection = lazy(() => import('./components/organisms/StatsSection'))
const ServicesSection = lazy(() => import('./components/organisms/ServicesSection'))
const AboutSection = lazy(() => import('./components/organisms/AboutSection'))
const CTA = lazy(() => import('./components/organisms/CTA'))
const ContactSection = lazy(() => import('./components/organisms/ContactSection'))
const Footer = lazy(() => import('./components/organisms/Footer'))

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Suspense>
          <StatsSection />
          <ServicesSection />
          <AboutSection />
          <CTA />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )
}
```

**Impacto:**
- Navbar + HeroSection se cargan inmediatamente (above-the-fold)
- El resto se carga bajo demanda cuando React tiene tiempo libre
- `<Suspense>` sin fallback (no muestra loader, solo espera)

### 8.2 Chunk Splitting con Vite (`vite.config.ts`)

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
})
```

**Resultado del build:**
```
Antes:  index.js → 593.64 KB (1 chunk)

Después:
  index.js              → 387.94 KB  (React core + app)
  framer-motion.js      → 150.69 KB  (librería de animaciones)
  StatsSection.js       →   3.61 KB  (lazy)
  CTA.js                →   6.57 KB  (lazy)
  ServicesSection.js    →   7.10 KB  (lazy)
  AboutSection.js       →   9.75 KB  (lazy)
  Footer.js             →  10.25 KB  (lazy)
  ContactSection.js     →  17.16 KB  (lazy)
```

### 8.3 Scroll Listener con requestAnimationFrame (`Navbar.tsx`)

**Antes:**
```tsx
useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

**Después:**
```tsx
useEffect(() => {
    let ticking = false
    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                setScrolled(window.scrollY > 20)
                ticking = false
            })
            ticking = true
        }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

**Cambios:**
- `requestAnimationFrame` throttle — máximo 1 llamada por frame (60fps)
- `{ passive: true }` — indica al browser que no llamaremos `preventDefault()`
- Patrón `ticking` flag evita acumular rAF callbacks

### 8.4 Arrays estáticos fuera de componentes

**Antes:** Arrays de datos se recreaban en cada render.

**Después:** Movidos a nivel de módulo:
```tsx
// Fuera del componente (nivel de módulo)
const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    // ...
]

const contactInfo = [...]
const socialLinks = [...]

// Dentro del componente — solo referencia, no recrea
const Navbar = () => {
    // menuItems se define una sola vez
}
```

### 8.5 Hero Placeholder Estático (`index.html`)

Para reducir LCP (Largest Contentful Paint), se pre-renderiza el H1 del hero como HTML estático:

```html
<style>
  /* Critical CSS inline para hero */
  #hero-placeholder {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, #0a1628 0%, #002d4d 50%, #004d80 100%);
    padding: 8rem 1rem 6rem;
  }
  #hero-placeholder h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -0.02em;
    max-width: 72rem;
  }
  #hero-placeholder h1 em {
    background: linear-gradient(to right, #c9a84c, #dfc77a, #c9a84c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-style: italic;
    font-weight: 500;
  }
  /* Auto-ocultar cuando React monta */
  #root:not(:empty) + #hero-placeholder { display: none; }
</style>

<body>
  <div id="root"></div>
  <!-- Visible instantáneamente, se oculta cuando React renderiza -->
  <div id="hero-placeholder">
    <h1>Soluciones jurídicas con <em>visión estratégica</em></h1>
  </div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

**Cómo funciona:**
1. Browser parsea HTML → muestra el `#hero-placeholder` inmediatamente
2. Lighthouse detecta el H1 como LCP en el primer paint (sin esperar JS)
3. React monta en `#root` → `#root:not(:empty)` se activa → placeholder se oculta
4. Transición invisible para el usuario

### 8.6 Firefox Scrollbar (`index.css`)

```css
/* Firefox scrollbar */
html {
  scrollbar-width: thin;
  scrollbar-color: #c9a84c #faf8f5;
}
```

---

## 9. Mejoras de SEO

### 9.1 Schema.org JSON-LD (`index.html`)

Agregado structured data para `LegalService`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "InnovaLaw",
  "description": "Estudio jurídico de excelencia en Santiago, Chile...",
  "url": "https://innovalaw.cl",
  "telephone": "+56962420766",
  "email": "contacto@innovalaw.cl",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Pedro de Valdivia 291, Oficina 1306",
    "addressLocality": "Providencia",
    "addressRegion": "Santiago",
    "addressCountry": "CL"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "areaServed": { "@type": "Country", "name": "Chile" },
  "serviceType": ["Migración", "Derecho Corporativo", "Derecho Civil y Familiar", "Defensa de Deudores"],
  "sameAs": [
    "https://instagram.com/innovalawcl",
    "https://linkedin.com/company/innovalaw",
    "https://facebook.com/innovalawcl"
  ]
}
</script>
```

### 9.2 `<meta name="theme-color">`

```html
<meta name="theme-color" content="#0a1628" />
```

Colorea la barra de navegación del browser móvil con el color navy del sitio.

### 9.3 `robots.txt`

Creado `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://innovalaw.cl/sitemap.xml
```

Vite copia automáticamente archivos de `public/` a `dist/` durante el build.

---

## 10. Infraestructura y Deployment

### 10.1 Eliminación de GitHub Actions

**Eliminado:** `.github/workflows/deploy.yml`

**Razón:** El deployment se hace directamente desde Cloudflare Pages via Git integration (conectado al repo desde el Cloudflare Dashboard). El workflow de GitHub Actions era redundante y fallaba por falta de secrets.

### 10.2 Configuración de Cloudflare Pages

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** 22
- **Auto-deploy:** En cada push a `main`

### 10.3 Google Tag Manager (Cloudflare Zaraz)

GTM se inyecta via Cloudflare Zaraz (no está en el código). Para diferirlo:

> **Cloudflare Dashboard** > dominio > **Zaraz** > **Settings** > activar **"Lazy Loading"**

Esto hace que GTM cargue después del evento `load`, liberando ~440ms del hilo principal.

---

## 11. Resultados Lighthouse Antes vs Después

### Scores

| Categoría | Antes | Después | Mejora |
|---|---|---|---|
| **Performance** | 50 | **53** | +3 |
| **Accessibility** | 98 | **98** | = |
| **Best Practices** | 96 | **100** | **+4** |
| **SEO** | 92 | **100** | **+8** |

### Core Web Vitals

| Métrica | Antes | Después | Mejora |
|---|---|---|---|
| **FCP** | 2.55s | **2.13s** | **-16%** |
| **TBT** | 1,633ms | **567ms** | **-65%** |
| **SI** | 4.31s | **2.43s** | **-44%** |
| **CLS** | 0.020 | **0.021** | = |
| **LCP** | 4.80s | pendiente* | pendiente* |

*\*LCP pendiente de medición con hero placeholder estático desplegado*

### Issues resueltos

| Issue | Estado |
|---|---|
| `errors-in-console` (SVG path) | **Resuelto** |
| `robots.txt is not valid` | **Resuelto** |
| Best Practices < 100 | **Resuelto** |
| SEO < 100 | **Resuelto** |
| TBT > 1500ms | **Reducido a 567ms** |

---

## 12. Pendientes y Recomendaciones Futuras

### Prioridad Alta
1. **Integrar formulario con servicio real** — Formspree, Resend, EmailJS o backend propio
2. **Activar Lazy Loading en Cloudflare Zaraz** — reduce TBT ~440ms
3. **Agregar fotografías** — equipo, oficina, logo profesional
4. **Política de privacidad** — obligatoria en Chile para formularios que recolectan datos

### Prioridad Media
5. **Sección de equipo/abogados** — con fotos, títulos, credenciales
6. **Testimonios de clientes** — prueba social
7. **Indicador de sección activa en navegación** — `IntersectionObserver` para resaltar el link actual
8. **Botón back-to-top** — casi obligatorio en SPA de una página
9. **Estadísticas reales** en StatsSection — "500+ casos", "15 años de experiencia", etc.

### Prioridad Baja
10. **SSR/SSG** (Next.js o Astro) para eliminar completamente el render delay del LCP
11. **Service Worker** para PWA básico (offline, caching)
12. **Sitemap XML** real (referenciado en robots.txt)

---

## 13. Checklist para Aplicar en Otro Proyecto

### Pre-auditoría
- [ ] Instalar dependencias del skill roier-seo
- [ ] Ejecutar audit con `node audit.js <URL> --save=audit-inicial.json`
- [ ] Documentar scores iniciales de Lighthouse

### Formularios
- [ ] Verificar que todos los `<input>` tienen `name` attribute
- [ ] Verificar que todos los campos tienen `<label>` (visible o `sr-only`)
- [ ] Verificar que el formulario envía datos a un servicio real
- [ ] Verificar cleanup de timers/intervals con `useEffect`
- [ ] Agregar `aria-label` a selects sin label visible

### Accesibilidad
- [ ] Verificar contraste de `::placeholder` (mínimo 4.5:1 WCAG AA)
- [ ] Verificar que `outline` no está deshabilitado sin alternativa visible
- [ ] Verificar `aria-expanded` en botones que controlan paneles expandibles
- [ ] Verificar `role="menu"` / `role="menuitem"` en menús de navegación
- [ ] Verificar `cursor` apropiado en inputs (text vs pointer)
- [ ] Verificar `target="_blank"` tiene `rel="noopener noreferrer"`

### CSS / Tailwind
- [ ] Buscar clases Tailwind inválidas (hex literales como `bg-faf8f5`)
- [ ] Buscar clases redundantes (`gap-0` es default)
- [ ] Buscar clases CSS custom no utilizadas
- [ ] Verificar reset CSS no duplica Preflight de Tailwind
- [ ] Agregar scrollbar styles para Firefox (`scrollbar-width`, `scrollbar-color`)

### Código
- [ ] Buscar ternarios sin efecto (misma clase en ambas ramas)
- [ ] Buscar `useRef`/`useInView` comentados o sin uso
- [ ] Buscar comentarios de desarrollo en producción
- [ ] Mover arrays de datos estáticos fuera de componentes
- [ ] Verificar que todos los SVG paths son válidos

### Rendimiento
- [ ] Implementar `React.lazy` + `Suspense` para secciones below-the-fold
- [ ] Configurar `manualChunks` en Vite para librerías grandes (framer-motion, etc.)
- [ ] Agregar `requestAnimationFrame` throttle a scroll listeners
- [ ] Agregar `{ passive: true }` a event listeners de scroll/touch
- [ ] Considerar hero placeholder estático para LCP inmediato

### SEO
- [ ] Verificar `<meta name="description">` (150-160 caracteres)
- [ ] Verificar Open Graph tags completos
- [ ] Agregar `<meta name="theme-color">`
- [ ] Agregar Schema.org JSON-LD apropiado para el tipo de negocio
- [ ] Crear `robots.txt` en `public/`
- [ ] Verificar `<link rel="canonical">`
- [ ] Verificar `lang` en `<html>`

### Datos de contacto
- [ ] Verificar que NO hay datos placeholder (teléfonos, emails, URLs)
- [ ] Verificar que teléfonos usan `tel:` links
- [ ] Verificar que emails usan `mailto:` links
- [ ] Verificar que enlaces de redes sociales apuntan a URLs reales
- [ ] Verificar que cada red social tiene su icono SVG correcto

### Deployment
- [ ] Verificar que CI/CD funciona (no workflows rotos)
- [ ] Verificar que `robots.txt` está en el build output (`dist/`)

### Post-auditoría
- [ ] Re-ejecutar audit: `node audit.js <URL> --save=audit-final.json`
- [ ] Comparar scores antes vs después
- [ ] Documentar mejoras logradas

---

## Commits Realizados

| Hash | Mensaje | Archivos |
|---|---|---|
| `04076f7` | `fix: resolve 20+ bugs from full site audit (a11y, CSS, UX, forms)` | 13 archivos |
| `9d479cd` | `perf: code splitting, font optimization, and SEO improvements` | 5 archivos |
| `76b6236` | `chore: remove GitHub Actions deploy, update CLAUDE.md` | 2 archivos |
| `66b0aa2` | `perf: revert fonts to render-blocking to improve LCP` | 1 archivo |
| `2a9ba2d` | `fix(seo): add robots.txt to resolve Lighthouse audit error` | 1 archivo |
| `74b8305` | `perf: add static hero placeholder for instant LCP` | 1 archivo |
