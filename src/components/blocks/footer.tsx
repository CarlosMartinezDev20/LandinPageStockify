import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DOWNLOAD_APK_URL } from "@/consts";

export function Footer() {
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Características", href: "/#features" },
    { name: "FAQ", href: "/#faq" },
  ];

  const legal = [
    { name: "Política de Privacidad", href: "/privacy" },
    { name: "Términos de Servicio", href: "#" },
  ];

  return (
    <footer className="flex flex-col items-center gap-16 pt-24 lg:pt-32">
      <div className="container max-w-3xl space-y-10 text-center">
        <div className="space-y-5">
          <h2 className="text-3xl font-black tracking-tight drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Optimiza tu inventario{" "}
            <span className="text-primary drop-shadow-[0_0_35px_oklch(0.765_0.155_293/0.9)]">
              hoy
            </span>
          </h2>
          <p className="text-foreground/90 mx-auto max-w-xl text-lg leading-relaxed font-medium">
            Descarga <span className="text-primary font-bold">Stockify</span> y
            transforma la gestión de tus almacenes en{" "}
            <span className="text-primary font-extrabold drop-shadow-[0_0_15px_oklch(0.765_0.155_293/0.5)]">
              minutos
            </span>
            . Control profesional y{" "}
            <span className="text-foreground font-bold">en tiempo real</span>.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Button
            size="lg"
            className="group ring-primary/20 hover:ring-primary/40 w-full gap-3 px-10 py-7 text-base font-extrabold shadow-[0_8px_50px_oklch(0.765_0.155_293/0.5)] ring-2 transition-all duration-300 hover:scale-[1.08] hover:shadow-[0_12px_70px_oklch(0.765_0.155_293/0.7)] active:scale-100 sm:w-auto md:px-12 md:py-8 md:text-lg"
            asChild
          >
            <a href={DOWNLOAD_APK_URL} download>
              <Download className="size-6 transition-transform group-hover:scale-110" />
              Descargar ahora
            </a>
          </Button>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="group/check flex items-center gap-2.5">
              <div className="flex size-5 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-transform group-hover/check:scale-110">
                <svg
                  className="size-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-foreground/90 font-medium">
                Multi-Almacén
              </span>
            </div>
            <div className="group/check flex items-center gap-2.5">
              <div className="flex size-5 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-transform group-hover/check:scale-110">
                <svg
                  className="size-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-foreground/90 font-medium">
                Tiempo Real
              </span>
            </div>
            <div className="group/check flex items-center gap-2.5">
              <div className="flex size-5 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-transform group-hover/check:scale-110">
                <svg
                  className="size-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-foreground/90 font-medium">
                Sistema Profesional
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-foreground hover:text-primary font-semibold transition-all duration-300 hover:scale-105"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-muted-foreground/20 container border-t pt-8 pb-8">
        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} Stockify. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
