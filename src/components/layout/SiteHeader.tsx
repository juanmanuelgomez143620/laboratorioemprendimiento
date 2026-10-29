"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, BookOpen, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { ConnectionStatus } from "@/components/ui/ConnectionStatus";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState<{ open: boolean; pathname: string }>({
    open: false,
    pathname,
  });
  const open = mobileMenu.open && mobileMenu.pathname === pathname;
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  function closeMenu() {
    setMobileMenu((current) => ({ ...current, open: false }));
  }

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenu((current) => ({ ...current, open: false }));
      }
    }

    document.addEventListener("keydown", onKeyDown);
    firstMobileLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="no-print bg-brand-950 text-white">
        <div className="container-page flex min-h-9 flex-wrap items-center justify-between gap-x-5 gap-y-1 py-1.5 text-[11px] font-semibold tracking-wide text-white/70">
          <p className="hidden items-center gap-1.5 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-sea-300" aria-hidden="true" />
            Escuela Normal Superior N.º 9 · Wanda, Misiones
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sea-300 sm:hidden" aria-hidden="true" />
            Campus público · sin registro
          </p>
          <div className="ml-auto flex items-center gap-4">
            <ConnectionStatus />
            <Link
              href="/mi-progreso"
              className="inline-flex items-center gap-1.5 rounded font-bold text-white transition hover:text-sea-200"
            >
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              Mi progreso
            </Link>
          </div>
        </div>
      </div>

      <div className="container-page flex min-h-[72px] items-center justify-between gap-5 py-2">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden items-center gap-0.5 xl:flex">
          {site.nav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-2.5 py-2 text-[13.5px] font-bold transition",
                  active
                    ? "text-brand-950 after:absolute after:inset-x-2.5 after:-bottom-[1px] after:h-0.5 after:rounded-full after:bg-sea-500"
                    : "text-body hover:bg-brand-50 hover:text-brand-900",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/cursos" className="btn btn-primary btn-sm hidden lg:inline-flex">
            Explorar cursos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-brand-950 transition hover:bg-brand-50 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            onClick={() =>
              setMobileMenu((current) => ({
                open: current.pathname === pathname ? !current.open : true,
                pathname,
              }))
            }
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-6.5rem)] overflow-y-auto border-b border-line bg-white shadow-2xl xl:hidden"
        >
          <nav aria-label="Navegación móvil" className="container-page py-5">
            <ul className="grid gap-1">
              {site.nav.map((item, index) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-12 items-center justify-between rounded-xl px-4 text-base font-bold transition",
                        active
                          ? "bg-brand-50 text-brand-950"
                          : "text-body hover:bg-slate-50 hover:text-brand-900",
                      )}
                    >
                      {item.label}
                      <ArrowRight
                        className={cn("h-4 w-4", active ? "text-sea-600" : "text-slate-400")}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 grid gap-2 border-t border-line pt-4 sm:grid-cols-2">
              <Link href="/mi-progreso" onClick={closeMenu} className="btn btn-secondary">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Mi progreso
              </Link>
              <Link href="/cursos" onClick={closeMenu} className="btn btn-primary">
                Explorar cursos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Tu avance se guarda únicamente en este navegador. No necesitás crear una cuenta.
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
