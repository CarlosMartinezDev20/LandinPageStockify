import { useState, useEffect } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { DOWNLOAD_APK_URL } from "@/consts";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Características", href: "/#features" },
  { label: "FAQ", href: "/#faq" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);

    // Cerrar menú móvil al cambiar de ruta
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <section
      className={cn(
        "bg-background/95 border-primary/30 hover:border-primary/50 ring-primary/20 hover:ring-primary/30 absolute left-1/2 z-50 w-[min(95%,700px)] -translate-x-1/2 rounded-3xl border-2 shadow-[0_8px_60px_oklch(0.765_0.155_293/0.4)] ring-2 backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_12px_80px_oklch(0.765_0.155_293/0.6)]",
        "top-3 md:top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between px-4 py-2.5 md:px-6 md:py-3">
        <a href="/" className="group/logo flex shrink-0 items-center gap-2">
          <span className="text-foreground group-hover/logo:text-primary text-lg font-black tracking-tight transition-colors duration-300 md:text-xl">
            Stockify
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-6 max-lg:hidden">
          {ITEMS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "hover:text-primary text-sm font-semibold transition-all duration-300 hover:scale-105",
                pathname === link.href
                  ? "text-primary drop-shadow-[0_0_10px_oklch(0.765_0.155_293/0.6)]"
                  : "text-foreground/90",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href={DOWNLOAD_APK_URL} download className="max-lg:hidden">
            <Button>
              <span className="relative z-10">Descargar</span>
            </Button>
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 shadow-xl transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="flex flex-col space-y-1">
          {ITEMS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "hover:bg-accent rounded-lg px-4 py-3 text-base font-medium transition-colors",
                pathname === link.href
                  ? "bg-accent text-primary"
                  : "text-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="border-border mt-2 border-t pt-4">
            <a
              href={DOWNLOAD_APK_URL}
              download
              className="block w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full" size="lg">
                Descargar App
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};
