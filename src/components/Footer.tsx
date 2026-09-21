import { siteConfig } from '../config/site';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFAF8] border-t border-[#E5E5E2] pt-16 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-[#E5E5E2]">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <span className="font-bold text-xl tracking-tight text-[#111111]">
                {siteConfig.brand}
              </span>
              <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-[#F2F2EF] text-[#60605E] border border-[#E5E5E2]">
                V1.0
              </span>
            </div>
            <p className="text-sm text-[#60605E] leading-relaxed">
              Marca personal y laboratorio de ingeniería de software, cloud e infraestructura fundado por Adrián Perdomo en Guadalajara, México.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm font-medium text-[#60605E]">
            <a
              href="#hero"
              className="hover:text-[#111111] transition-colors"
            >
              Inicio
            </a>
            <a
              href="#sobre-mi"
              className="hover:text-[#111111] transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#proyectos"
              className="hover:text-[#111111] transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#stack"
              className="hover:text-[#111111] transition-colors"
            >
              Stack
            </a>
            <a
              href="#contacto"
              className="hover:text-[#111111] transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Credits Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-[#60605E]">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <p className="font-mono text-[11px] text-[#A0A09C]">
              {siteConfig.location} · [{siteConfig.coordinates}]
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-[#60605E] hidden md:inline">
              Built with TypeScript · Tailwind CSS · Azure SWA ready
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full border border-[#E5E5E2] hover:border-[#111111] hover:bg-[#F2F2EF] text-[#111111] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
