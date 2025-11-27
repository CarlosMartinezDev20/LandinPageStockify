import {
  Package,
  Warehouse,
  ShoppingCart,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Gestión de Inventario",
    description:
      "Control multi-almacén con stock en tiempo real, movimientos de inventario y alertas de stock mínimo automáticas.",
    icon: Package,
  },
  {
    title: "Órdenes de Compra y Venta",
    description:
      "Crea y gestiona órdenes comerciales con validación de disponibilidad y registro automático de movimientos.",
    icon: ShoppingCart,
  },
  {
    title: "Múltiples Almacenes",
    description:
      "Administra varios almacenes o sucursales simultáneamente con transferencias entre ubicaciones.",
    icon: Warehouse,
  },
  {
    title: "Gestión de Contactos",
    description:
      "Base de datos completa de clientes y proveedores con historial de transacciones y vinculación automática.",
    icon: Users,
  },
  {
    title: "Reportes y Análisis",
    description:
      "Historial completo de movimientos, seguimiento de órdenes y análisis de stock por almacén.",
    icon: BarChart3,
  },
  {
    title: "Seguridad y Permisos",
    description:
      "Sistema de roles con permisos granulares, autenticación JWT y auditoría de acciones por usuario.",
    icon: Shield,
  },
];

export const Features = () => {
  return (
    <section id="features" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            TODO LO QUE NECESITAS
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-center lg:mt-24">
          <h2 className="text-3xl font-black tracking-tight drop-shadow-2xl md:text-4xl lg:text-5xl">
            Diseñada{" "}
            <span className="text-primary drop-shadow-[0_0_30px_oklch(0.765_0.155_293/0.8)]">
              para ti
            </span>
          </h2>
          <p className="text-foreground/90 mx-auto max-w-2xl text-lg leading-relaxed font-medium">
            Stockify te ofrece{" "}
            <span className="text-primary font-bold">
              todas las herramientas
            </span>{" "}
            necesarias para gestionar tu inventario de manera{" "}
            <span className="text-foreground font-semibold">
              profesional, eficiente y en tiempo real
            </span>{" "}
            desde tu dispositivo móvil.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-8 grid gap-5 sm:gap-6 md:mt-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={i}
                className="group border-primary/20 hover:border-primary/60 bg-card ring-primary/10 shadow-primary/15 hover:ring-primary/30 relative overflow-hidden shadow-xl ring-1 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_8px_60px_oklch(0.765_0.155_293/0.5)] hover:ring-2"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="from-primary/30 to-primary/20 group-hover:from-primary/50 group-hover:to-primary/40 shadow-primary/30 mb-6 inline-flex rounded-2xl bg-gradient-to-br p-5 shadow-xl transition-all duration-300 group-hover:scale-[1.15] group-hover:rotate-3 group-hover:shadow-[0_0_45px_oklch(0.765_0.155_293/0.6)]">
                    <Icon className="text-primary size-9 drop-shadow-xl transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-foreground mb-3 text-xl font-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-foreground/85 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
