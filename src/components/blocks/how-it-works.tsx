import { Download, UserPlus, Package, TrendingUp } from "lucide-react";

import { DashedLine } from "../dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Descarga e instala",
    description:
      "Descarga el APK desde GitHub y instálalo en tu dispositivo Android. Compatible con Android 5.0+.",
    icon: Download,
  },
  {
    number: "02",
    title: "Configura tu empresa",
    description:
      "Crea tu cuenta, configura almacenes, productos y usuarios con sus respectivos permisos.",
    icon: UserPlus,
  },
  {
    number: "03",
    title: "Gestiona inventario",
    description:
      "Registra entradas/salidas, crea órdenes de compra/venta y realiza transferencias entre almacenes.",
    icon: Package,
  },
  {
    number: "04",
    title: "Monitorea y optimiza",
    description:
      "Consulta reportes en tiempo real, analiza movimientos y optimiza tu logística empresarial.",
    icon: TrendingUp,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 lg:py-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            SIMPLE Y DIRECTO
          </span>
        </div>

        {/* Header */}
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-center lg:mt-24">
          <h2 className="text-3xl font-black tracking-tight drop-shadow-2xl md:text-4xl lg:text-5xl">
            Cómo{" "}
            <span className="text-primary drop-shadow-[0_0_30px_oklch(0.765_0.155_293/0.8)]">
              funciona
            </span>
          </h2>
          <p className="text-foreground/90 mx-auto max-w-2xl text-lg leading-relaxed font-medium">
            En solo{" "}
            <span className="text-primary font-extrabold drop-shadow-[0_0_15px_oklch(0.765_0.155_293/0.5)]">
              4 pasos
            </span>{" "}
            tendrás tu inventario bajo control total
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:mt-20 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="group border-primary/20 hover:border-primary/60 bg-card ring-primary/10 shadow-primary/15 hover:ring-primary/30 h-full shadow-xl ring-1 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_8px_60px_oklch(0.765_0.155_293/0.5)] hover:ring-2">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="from-primary/30 to-primary/20 group-hover:from-primary/50 group-hover:to-primary/40 shadow-primary/30 inline-flex rounded-2xl bg-gradient-to-br p-5 shadow-xl transition-all duration-300 group-hover:scale-[1.15] group-hover:rotate-3 group-hover:shadow-[0_0_45px_oklch(0.765_0.155_293/0.6)]">
                        <Icon className="text-primary size-9 drop-shadow-xl transition-transform duration-300 group-hover:scale-125" />
                      </div>
                      <span className="text-primary/40 group-hover:text-primary/70 font-display text-5xl leading-none font-black drop-shadow-[0_0_20px_oklch(0.765_0.155_293/0.5)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_35px_oklch(0.765_0.155_293/0.8)]">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-display text-foreground mb-3 text-xl font-black tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-foreground/85 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 z-10 hidden lg:block">
                    <div className="border-primary/60 h-0.5 w-8 animate-pulse border-t-[3px] border-dashed shadow-[0_0_15px_oklch(0.765_0.155_293/0.4)]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
