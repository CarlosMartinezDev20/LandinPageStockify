import {
  Download,
  Package,
  Warehouse,
  ShoppingCart,
  BarChart3,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { DOWNLOAD_APK_URL } from "@/consts";

const features = [
  {
    title: "Multi-Almacén",
    description:
      "Administra productos en múltiples ubicaciones simultáneamente.",
    icon: Warehouse,
  },
  {
    title: "Stock en Tiempo Real",
    description: "Visualiza existencias actualizadas al instante.",
    icon: Package,
  },
  {
    title: "Órdenes de Compra/Venta",
    description: "Gestiona tus operaciones comerciales fácilmente.",
    icon: ShoppingCart,
  },
  {
    title: "Reportes y Análisis",
    description: "Seguimiento completo de movimientos e historial.",
    icon: BarChart3,
  },
];

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-40">
      <div className="container flex flex-col justify-between gap-10 md:gap-12 lg:flex-row lg:gap-24">
        {/* Left side - Main content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <h1 className="text-foreground animate-in fade-in slide-in-from-bottom-4 max-w-lg text-3xl leading-tight font-black tracking-tight drop-shadow-2xl duration-700 sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight">
              Controla tu inventario{" "}
              <span className="text-primary relative inline-block drop-shadow-[0_0_35px_oklch(0.765_0.155_293/0.8)]">
                en tiempo real
                <span className="bg-primary/40 absolute inset-x-0 -bottom-3 -z-10 h-6 animate-pulse blur-xl"></span>
                <span className="bg-primary absolute inset-x-0 -bottom-1 -z-10 h-1 rounded-full"></span>
              </span>
            </h1>

            <p className="text-foreground/90 max-w-xl text-lg leading-relaxed font-medium md:text-xl">
              Descarga <span className="text-primary font-bold">Stockify</span>{" "}
              y optimiza la gestión de tus almacenes.{" "}
              <span className="text-foreground font-semibold">
                Control profesional de stock, órdenes y movimientos.
              </span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group shadow-primary/40 ring-primary/20 hover:ring-primary/40 w-full gap-2 px-8 py-6 text-base font-bold shadow-[0_8px_30px_oklch(0.765_0.155_293/0.4)] ring-2 transition-all duration-300 hover:scale-[1.08] hover:shadow-[0_12px_50px_oklch(0.765_0.155_293/0.7)] active:scale-100 sm:w-auto md:px-10 md:py-7 md:text-lg"
            >
              <a href={DOWNLOAD_APK_URL} download>
                <Download className="size-6 transition-transform group-hover:scale-110" />
                Descargar App
              </a>
            </Button>
            <div className="flex flex-col gap-3">
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
                  Android 5.0+
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

        {/* Right side - Features */}
        <div className="border-primary/30 from-card via-card/90 to-card/80 ring-primary/20 relative flex flex-1 flex-col justify-center space-y-6 rounded-2xl border-2 bg-gradient-to-br p-6 shadow-[0_8px_60px_oklch(0.765_0.155_293/0.4)] ring-2 backdrop-blur-md md:space-y-8 md:rounded-3xl md:p-10 lg:p-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex gap-5 transition-all duration-300 hover:translate-x-2"
              >
                <div className="bg-primary/30 group-hover:bg-primary/50 shadow-primary/30 flex size-16 shrink-0 items-center justify-center rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_40px_oklch(0.765_0.155_293/0.6)]">
                  <Icon className="text-primary size-8 drop-shadow-lg transition-transform duration-300 group-hover:scale-125" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-foreground text-lg font-extrabold tracking-tight">
                    {feature.title}
                  </h2>
                  <p className="text-foreground/80 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
