<div align="center">

# 📦 Stockify Landing Page

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="600px" /> <br>

<p align="center">
  <a href="#-descripción">Descripción</a> •
  <a href="#-características">Características</a> •
  <a href="#-inicio-rápido">Inicio Rápido</a> •
  <a href="#-tecnologías">Tecnologías</a> •
  <a href="#-despliegue">Despliegue</a>
</p>

<br>

<img src="https://img.shields.io/badge/Astro-5.14.5-BC52EE?style=for-the-badge&logo=astro&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind-4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" />

</div>

---

## 📱 Descripción

**Stockify Landing Page** es una landing page moderna y profesional para la aplicación móvil **Stockify** - Sistema de Gestión de Inventario Multi-Almacén. Diseñada con el tema **Catppuccin Mocha** para proporcionar una experiencia visual elegante tanto en modo claro como oscuro.

### 🎯 Sobre Stockify

Stockify es una aplicación móvil profesional de gestión de inventario diseñada para empresas que manejan múltiples almacenes. Optimiza el control de stock, automatiza procesos logísticos y proporciona visibilidad en tiempo real.

**Descarga**: [Stockify v1.0.0](https://github.com/CarlosMartinezDev20/StockifyApp/releases/download/v1.0.0/app-release.apk)

### ✨ Experiencia Visual

- 🎨 **Tema Catppuccin Completo** - Paleta de colores Latte (claro) y Mocha (oscuro)
- 💜 **Colores Púrpura** - Primary color en `oklch(0.765 0.155 293)`
- 🌗 **Modo Oscuro/Claro** - Cambio fluido entre temas
- ✨ **Efectos de Brillo** - Drop-shadows y glows personalizados con primary
- 🎭 **Animaciones Suaves** - Microinteracciones en cada elemento

---

## 🎯 Características

<table>
<tr>
<td width="50%">

### 🎨 Diseño

- ✅ Responsive design completo
- ✅ Animaciones y transiciones fluidas
- ✅ Iconos con efectos hover
- ✅ Cards con bordes y sombras primary
- ✅ Carrusel autoplay de testimonios
- ✅ Efectos de brillo personalizados

</td>
<td width="50%">

### ⚡ Tecnología

- ✅ Astro 5.14.5 - Framework estático
- ✅ React 19 - Componentes interactivos
- ✅ TypeScript - Type safety
- ✅ Tailwind CSS 4 - Estilos utility
- ✅ shadcn/ui - Componentes UI
- ✅ Lucide Icons - Biblioteca de iconos

</td>
</tr>
</table>

### 📄 Secciones Incluidas

```bash
├── 🏠 Hero                    # Sección principal con CTA
├── ⭐ Features                # 6 características destacadas
├── 🔢 How It Works            # 4 pasos del proceso
├── 💬 Testimonials            # Carrusel de reseñas
├── ❓ FAQ                      # Preguntas frecuentes
└── 📥 Footer                  # Call-to-action final
```

---

## 🚀 Inicio Rápido

### Prerrequisitos

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/CarlosMartinezDev20/stockify-landing-page.git

# Navegar al directorio
cd stockify-landing-page

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador

### Build

```bash
# Generar build de producción
npm run build

# Previsualizar build
npm run preview
```

---

## 🛠️ Tecnologías

<div align="center">

| Categoría      | Tecnología                |
| -------------- | ------------------------- |
| **Framework**  | Astro 5.14.5              |
| **UI Library** | React 19                  |
| **Styling**    | Tailwind CSS 4 + OKLCH    |
| **Components** | shadcn/ui                 |
| **Icons**      | Lucide React              |
| **Carousel**   | Embla Carousel + Autoplay |
| **Language**   | TypeScript 5              |
| **Font**       | DM Sans                   |

</div>

### 🎨 Paleta de Colores Catppuccin

#### Modo Claro (Latte)

```css
--background: oklch(0.965 0.008 275) --primary: oklch(0.625 0.175 293)
  /* Mauve */ --foreground: oklch(0.32 0.025 275);
```

#### Modo Oscuro (Mocha)

```css
--background: oklch(0.155 0.015 265) --primary: oklch(0.765 0.155 293)
  /* Mauve */ --foreground: oklch(0.875 0.015 267);
```

---

## 🎨 Componentes Principales

### Hero Section

- Título con efecto de subrayado animado
- Botón CTA con shadow primary
- Tarjeta lateral con 4 características
- Checkmarks animados

### Features Grid

- 6 tarjetas con hover effects
- Iconos con gradientes primary
- Sombras y rings personalizados
- Animaciones scale y rotate

### Testimonials Carousel

- Autoplay con 3000ms delay
- Tarjetas con bordes primary
- Estrellas con glow effect
- Controles con efectos hover

---

## 📦 Despliegue

### Vercel (Recomendado)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Cloudflare Pages

```bash
npm run build
wrangler pages publish dist
```

---

## 📂 Estructura del Proyecto

```
stockify-landing-page/
├── public/
│   ├── downloads/         # APK file
│   ├── favicon/          # Icons
│   └── fonts/            # DM Sans
├── src/
│   ├── components/
│   │   ├── blocks/       # Main sections (Hero, Features, FAQ, etc.)
│   │   └── ui/          # shadcn components
│   ├── layouts/         # Page layouts
│   ├── pages/          # Routes (index, faq, privacy)
│   └── styles/         # Global CSS
├── astro.config.mjs    # Astro config
└── tailwind.config.js  # Tailwind config
```

---

## 🎯 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run astro        # CLI de Astro
```

---


## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---



<div align="center">

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />

**[⬆ Volver arriba](#-stockify-landing-page)**

</div>
