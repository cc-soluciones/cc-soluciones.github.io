# CC Soluciones – Landing Page

## Stack
- **Framework:** Astro 7 (SSG)
- **Estilos:** Tailwind CSS 4 + tokens CSS personalizados
- **Iconos:** astro-icon + @iconify-json/mdi
- **Tipografía:** Sora (headings) + DM Sans (body)
- **Despliegue:** GitHub Pages vía CI/CD

---

## Estilo Visual: LIQUID GLASS

Inspirado en `example/hero.html`. Consiste en:

| Elemento | Implementación |
|----------|---------------|
| Fondos traslúcidos | `bg-white/5` con `backdrop-blur-xl` |
| Bordes suaves | `border border-white/10` |
| Efecto vidrio | `backdrop-blur-xl shadow-2xl` |
| Esferas decorativas | `rounded-full bg-white/5 blur-3xl` posicionadas absolutamente |
| Gradientes en highlights | `bg-gradient-to-br from-white via-white to-[color] bg-clip-text text-transparent` |
| Máscaras de gradiente | `mask-image: linear-gradient(...)` en fondos y marquees |
| Animaciones | `fadeSlideIn` (fade + translateY 20px), `marquee` (loop infinito), `float` |
| Delays escalonados | `.delay-100` a `.delay-500` |
| Estados hover | `hover:scale-[1.02]`, `hover:bg-white/10`, `hover:-translate-y-1` |
| Badges | `inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5` con icono |

---

## Arquitectura de Componentes (Árbol)

```
src/pages/index.astro
└── src/layouts/Layout.astro (ya existe)
    ├── src/components/ui/Navbar.astro
    ├── src/components/sections/Hero.astro
    │   ├── src/components/ui/Badge.astro
    │   ├── src/components/ui/Button.astro
    │   ├── src/components/ui/StatsCard.astro
    │   └── src/components/ui/Marquee.astro
    ├── src/components/sections/Services.astro
    │   ├── src/components/ui/SectionHeader.astro
    │   └── src/components/ui/ServiceCard.astro
    ├── src/components/sections/Workflow.astro
    │   ├── src/components/ui/SectionHeader.astro
    │   └── src/components/ui/WorkflowStep.astro
    ├── src/components/sections/Projects.astro
    │   ├── src/components/ui/SectionHeader.astro
    │   └── src/components/ui/ProjectCard.astro
    ├── src/components/sections/FAQ.astro
    │   ├── src/components/ui/SectionHeader.astro
    │   └── src/components/ui/FAQItem.astro
    ├── src/components/sections/Contact.astro
    │   └── src/components/ui/SectionHeader.astro
    └── src/components/sections/Footer.astro
        └── src/components/ui/SocialIcon.astro
```

---

## Flujo de Datos

Cada sección importa sus datos desde `@/data/*`:
- `site.ts` → config, nav, footer, socials
- `services.ts` → array de servicios
- `projects.ts` → array de proyectos con imágenes
- `faq.ts` → array de preguntas frecuentes
- `contact.ts` → info de contacto
- `i18n.ts` + `@/lib/i18n.ts` → traducciones dinámicas vía función `t(lang, key)`
- `@/lib/store.ts` → estado reactivo (theme + lang) con subscribe

---

## Orden de Implementación (Paso a Paso)

Cada paso requiere confirmación antes de continuar.

### Fase 1: UI Components Base (10 componentes)

| # | Componente | Props | Descripción |
|---|-----------|-------|-------------|
| 1 | `Button.astro` | `variant`, `size`, `href?`, `icon?`, `children` | Botón reutilizable primario/outline/ghost |
| 2 | `Badge.astro` | `icon?`, `children` | Badge tipo pill con icono opcional |
| 3 | `SectionHeader.astro` | `badge`, `title`, `highlight?`, `description` | Encabezado de sección |
| 4 | `SocialIcon.astro` | `socialId` (key de socialsConfig) | Icono de red social con tooltip |
| 5 | `StatsCard.astro` | `value`, `label`, `progress?` | Card con estadística y barra opcional |
| 6 | `Marquee.astro` | `items[]` (icon + label) | Carrusel infinito de logos/clientes |
| 7 | `ServiceCard.astro` | `service` (Service) | Card de servicio con descripciones |
| 8 | `WorkflowStep.astro` | `step`, `title`, `description` | Paso numerado del workflow |
| 9 | `ProjectCard.astro` | `project` (Project) | Card de proyecto con imagen |
| 10 | `FAQItem.astro` | `faq` (FAQItem), `index` | Acordeón FAQ con toggle |

### Fase 2: Section Components (8 componentes)

| # | Componente | UI Components que usa |
|---|-----------|----------------------|
| 11 | `Navbar.astro` | Button, Badge, SocialIcon |
| 12 | `Hero.astro` | Badge, Button, StatsCard, Marquee |
| 13 | `Services.astro` | SectionHeader, ServiceCard |
| 14 | `Workflow.astro` | SectionHeader, WorkflowStep |
| 15 | `Projects.astro` | SectionHeader, ProjectCard |
| 16 | `FAQ.astro` | SectionHeader, FAQItem |
| 17 | `Contact.astro` | SectionHeader, SocialIcon |
| 18 | `Footer.astro` | SocialIcon |

### Fase 3: Integración

| # | Archivo | Acción |
|---|---------|--------|
| 19 | `index.astro` | Ensamblar Layout + Navbar + Hero + Services + Workflow + Projects + FAQ + Contact + Footer |
| 20 | Build | `npm run build` para verificar |

---

## Convenciones de Código

- **Sin comentarios** en el código
- **TypeScript estricto** con interfaces para props
- **Nombres en inglés** para componentes, props y archivos
- **Datos en español** (archivos `src/data/`) con traducciones en `i18n.ts`
- **i18n**: usar `t(lang, 'key')` para strings visibles al usuario
- **Animaciones**: usar clases `animate-fade-in delay-XXX`
- **Sin JavaScript de cliente**: Astro trabaja en build-time
- **Sin backend**: contacto solo WhatsApp + Email

---

## Diseño Responsive

- Mobile-first con Tailwind
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Hero: grid 1 columna en mobile, 12 columnas en desktop
- Servicios: 1 columna mobile, 3 columnas desktop
- Proyectos: 1 columna mobile, 2-3 columnas desktop
- Workflow: vertical en mobile, horizontal en desktop

---

## Assets en /public/

```
public/
  favicon.svg          -- Favicon SVG
  hero-bg.svg          -- Textura noise SVG para fondo
  logo.png             -- Logo de la empresa
  projects/            -- 8 imágenes de proyectos (jpeg/png)
```

---

## CI/CD

GitHub Actions en `.github/workflows/main.yml`:
- Trigger: push a `master`
- Build: `npm ci` + `npm run build`
- Deploy: GitHub Pages vía `actions/deploy-pages@v4`
