"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";

/**
 * Muestra un aviso solo cuando el navegador pierde la conexión.
 * El estado inicial es "en línea" para que el HTML del servidor y la
 * primera renderización del cliente coincidan; se actualiza al montar.
 */
export function ConnectionStatus() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    function update() {
      setOffline(!navigator.onLine);
    }

    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  if (!offline) return null;

  return (
    <span
      role="status"
      className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-300/15 px-2 py-0.5 text-[10px] font-bold text-amber-100"
    >
      <WifiOff className="h-3 w-3" aria-hidden="true" />
      <span className="hidden sm:inline">Sin conexión · seguí con lo guardado</span>
      <span className="sm:hidden">Sin conexión</span>
    </span>
  );
}
