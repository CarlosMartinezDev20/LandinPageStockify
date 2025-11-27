import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Descarga e instalación",
    questions: [
      {
        question: "¿Cómo descargo la aplicación?",
        answer:
          "Haz clic en el botón 'Descargar App' y el archivo APK se descargará desde GitHub. Abre el archivo y habilita la instalación de fuentes desconocidas si es necesario. Compatible con Android 5.0 o superior.",
      },
      {
        question: "¿Qué requisitos necesita mi dispositivo?",
        answer:
          "Stockify requiere Android 5.0 (Lollipop) o superior, mínimo 2GB de RAM recomendado, 50MB de almacenamiento libre y conexión a Internet.",
      },
      {
        question: "¿Es seguro instalar apps fuera de Play Store?",
        answer:
          "Sí, Stockify es completamente segura. El APK está alojado en el repositorio oficial de GitHub. Asegúrate de descargarla solo desde el enlace oficial proporcionado.",
      },
    ],
  },
  {
    title: "Uso de la app",
    questions: [
      {
        question: "¿Cómo funcionan los permisos de usuario?",
        answer:
          "Stockify tiene un sistema de roles: Admin, Gerente, Operador y Supervisor. Cada rol tiene permisos específicos para ver, crear, editar o eliminar productos, gestionar órdenes y administrar almacenes.",
      },
      {
        question: "¿Puedo gestionar múltiples almacenes?",
        answer:
          "Sí, Stockify está diseñada para empresas con múltiples almacenes. Puedes administrar productos en diferentes ubicaciones, realizar transferencias entre almacenes y ver el stock de cada uno en tiempo real.",
      },
      {
        question: "¿Cómo funcionan las órdenes de compra y venta?",
        answer:
          "Puedes crear órdenes de compra asignando productos y almacenes destino. Para ventas, el sistema valida disponibilidad y permite seleccionar el almacén de origen. Ambos tipos de órdenes registran automáticamente los movimientos de inventario.",
      },
    ],
  },
  {
    title: "Funcionalidades",
    questions: [
      {
        question: "¿Qué reportes ofrece Stockify?",
        answer:
          "Puedes ver historial completo de movimientos, seguimiento de órdenes de compra y venta, análisis de stock por almacén y registro de actividades por usuario. Próximamente incluirá exportación de datos y reportes en PDF.",
      },
      {
        question: "¿Cómo se manejan las alertas de stock?",
        answer:
          "El sistema te notifica automáticamente cuando el stock de un producto está por debajo del nivel mínimo configurado. Puedes establecer alertas personalizadas por producto y almacén.",
      },
      {
        question: "¿Puedo gestionar clientes y proveedores?",
        answer:
          "Sí, Stockify incluye gestión completa de contactos (clientes y proveedores) con historial de transacciones, información de contacto y vinculación automática con las órdenes.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl font-black tracking-tight drop-shadow-2xl md:text-4xl lg:text-5xl">
                <span className="text-primary drop-shadow-[0_0_25px_oklch(0.765_0.155_293/0.7)]">
                  Preguntas
                </span>{" "}
                frecuentes
              </h1>
            ) : (
              <h2 className="text-2xl font-black tracking-tight drop-shadow-2xl md:text-4xl lg:text-5xl">
                <span className="text-primary drop-shadow-[0_0_25px_oklch(0.765_0.155_293/0.7)]">
                  Preguntas
                </span>{" "}
                frecuentes
              </h2>
            )}
            <p className="text-foreground/80 max-w-md leading-snug font-medium lg:mx-auto">
              ¿No encuentras lo que buscas? Visita nuestro{" "}
              <a
                href="https://github.com/CarlosMartinezDev20/StockifyApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-bold underline underline-offset-4 transition-colors"
              >
                repositorio en GitHub
              </a>{" "}
              o reporta un issue.
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-foreground/80 border-primary/20 border-b-2 py-4 font-bold">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-foreground/85 font-medium">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
