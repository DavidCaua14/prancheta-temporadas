/* eslint-disable @next/next/no-img-element -- arte já otimizada em WebP */

/** Marca do Prancheta Temporadas (mesma prancheta do online, outro subtítulo). */
export function Logo({ className = "", size = "sm" }: { className?: string; size?: "sm" | "lg" }) {
  const big = size === "lg";
  const markClass = big ? "h-16 w-16 max-[359px]:h-12 max-[359px]:w-12 sm:h-20 sm:w-20" : "h-10 w-10";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/art/logo-mark.webp" alt="" className={`${markClass} object-contain`} />
      <span className="flex flex-col leading-none">
        <span className={`t-display ${big ? "text-4xl max-[359px]:text-3xl sm:text-6xl" : "text-lg sm:text-xl"} text-[var(--sun)]`}>Prancheta</span>
        <span
          className={`font-extrabold uppercase text-[var(--hot)] ${big ? "mt-1.5 text-xs tracking-[0.3em] max-[359px]:text-[0.6rem] sm:text-sm" : "mt-0.5 hidden text-[0.6rem] tracking-[0.24em] min-[400px]:block"}`}
        >
          Temporadas · Modo Carreira
        </span>
      </span>
    </span>
  );
}
