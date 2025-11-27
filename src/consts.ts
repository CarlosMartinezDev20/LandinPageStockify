// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Stockify - Sistema de Inventario Multi-Almacén";
export const SITE_DESCRIPTION =
  "Descarga Stockify y optimiza el control de inventario de tu empresa. Gestión multi-almacén, órdenes de compra/venta y seguimiento en tiempo real.";

export const DOWNLOAD_APK_URL = "https://github.com/CarlosMartinezDev20/StockifyApp/releases/download/v1.0.0/app-release.apk";

export const SITE_METADATA = {
  title: {
    default: "Stockify - Sistema de Inventario Multi-Almacén",
    template: "%s | Stockify",
  },
  description:
    "Descarga Stockify y optimiza el control de inventario de tu empresa. Gestión multi-almacén, órdenes de compra/venta y seguimiento en tiempo real.",
  keywords: [
    "sistema de inventario",
    "gestión de stock",
    "control de almacén",
    "multi-almacén",
    "órdenes de compra",
    "órdenes de venta",
    "app inventario",
    "logística empresarial",
    "control de productos",
    "gestión de inventario",
  ],
  authors: [{ name: "Stockify" }],
  creator: "Stockify",
  publisher: "Stockify",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Stockify - Sistema de Inventario Multi-Almacén",
    description:
      "Descarga Stockify y optimiza el control de inventario de tu empresa. Gestión multi-almacén, órdenes de compra/venta y seguimiento en tiempo real.",
    siteName: "Stockify",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stockify - Sistema de Gestión de Inventario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stockify - Sistema de Inventario Multi-Almacén",
    description:
      "Descarga Stockify y optimiza el control de inventario de tu empresa. Gestión multi-almacén, órdenes de compra/venta y seguimiento en tiempo real.",
    images: ["/og-image.jpg"],
    creator: "@stockify",
  },
};
