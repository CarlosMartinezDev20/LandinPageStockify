import { useRef } from "react";
import { Star } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const items = [
  {
    quote:
      "Stockify transformó completamente cómo gestionamos nuestros 3 almacenes. Stock en tiempo real es un cambio radical.",
    author: "María González",
    role: "Gerente de Logística",
    rating: 5,
  },
  {
    quote:
      "El sistema de permisos es perfecto. Cada operador tiene acceso solo a lo que necesita. Muy profesional.",
    author: "Carlos Ramírez",
    role: "Administrador TI",
    rating: 5,
  },
  {
    quote:
      "Las órdenes de compra y venta se gestionan instantáneamente. Los movimientos se registran solos. Increíble.",
    author: "Ana Martínez",
    role: "Jefa de Compras",
    rating: 5,
  },
  {
    quote:
      "Antes usábamos Excel. Ahora con Stockify todo es automático y sin errores. No volvemos atrás.",
    author: "Roberto Silva",
    role: "Dueño de Distribuidora",
    rating: 5,
  },
  {
    quote:
      "La interfaz es super intuitiva. Capacitamos al equipo en menos de una hora y ya estaban operando.",
    author: "Laura Torres",
    role: "Supervisora de Almacén",
    rating: 5,
  },
  {
    quote:
      "Los reportes y el historial de movimientos nos dan total visibilidad. Tomamos mejores decisiones ahora.",
    author: "Diego Pérez",
    role: "Director de Operaciones",
    rating: 5,
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-black tracking-tight drop-shadow-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Lo que dicen{" "}
              <span className="text-primary drop-shadow-[0_0_25px_oklch(0.765_0.155_293/0.7)]">
                nuestros usuarios
              </span>
            </h2>
            <p className="text-foreground/85 max-w-2xl text-lg leading-relaxed font-medium">
              Empresas de diferentes tamaños ya optimizaron su inventario con
              Stockify. Únete y descubre por qué confían en nosotros.
            </p>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-card/70 group hover:bg-card border-primary/20 hover:border-primary/50 shadow-primary/10 hover:shadow-primary/25 ring-primary/5 hover:ring-primary/20 h-full overflow-hidden border-2 shadow-xl ring-1 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_oklch(0.765_0.155_293/0.4)] hover:ring-2">
                      <CardContent className="flex h-full flex-col justify-between gap-5 p-6 md:gap-6 md:p-8">
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="text-primary size-5 fill-current drop-shadow-[0_0_12px_oklch(0.765_0.155_293/0.7)] transition-transform group-hover:scale-110"
                              />
                            ),
                          )}
                        </div>
                        <blockquote className="font-display text-foreground/90 text-base leading-relaxed font-semibold">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="border-primary/20 space-y-1 border-t pt-4">
                          <div className="text-foreground text-sm font-bold">
                            {testimonial.author}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {testimonial.role}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-card hover:bg-card/90 border-primary/30 hover:border-primary/60 shadow-primary/20 hover:shadow-primary/40 ring-primary/10 hover:ring-primary/30 static size-14.5 translate-x-0 translate-y-0 border-2 shadow-xl ring-1 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_oklch(0.765_0.155_293/0.5)] [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-card hover:bg-card/90 border-primary/30 hover:border-primary/60 shadow-primary/20 hover:shadow-primary/40 ring-primary/10 hover:ring-primary/30 static size-14.5 translate-x-0 translate-y-0 border-2 shadow-xl ring-1 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_oklch(0.765_0.155_293/0.5)] [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
