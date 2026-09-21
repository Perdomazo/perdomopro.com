import { siteConfig } from '../config/site';
import { Terminal, Cpu, Server, Layers, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E5E5E2]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 border-b border-[#E5E5E2]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#60605E]">[01]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]">
            Sobre mí / Trayectoria
          </span>
        </div>
        <div className="font-mono text-xs text-[#60605E]">
          PERSPECTIVA · INGENIERÍA · OPERACIONES
        </div>
      </div>

      {/* Main Editorial Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-12 items-start">
        {/* Left Column: Heading and Key Value Proposition */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.15]">
            {siteConfig.about.title}
          </h2>

          <p className="text-base sm:text-lg text-[#60605E] leading-relaxed">
            {siteConfig.about.p1}
          </p>

          <div className="p-6 rounded-2xl bg-[#F2F2EF] border border-[#E5E5E2] space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#60605E] block">
              Enfoque profesional
            </span>
            <p className="text-sm text-[#111111] leading-relaxed font-medium">
              "El software de calidad no termina cuando compila en local: cobra sentido cuando se despliega de forma automatizada, resiste fallos de infraestructura y es predecible para el usuario final."
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#60605E]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Filosofía de desarrollo en producción</span>
            </div>
          </div>
        </div>

        {/* Right Column: Deep Story & Trajectory Steps */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4 text-base text-[#60605E] leading-relaxed">
            <p>{siteConfig.about.p2}</p>
            <p>{siteConfig.about.p3}</p>
          </div>

          {/* Structured Timeline Steps */}
          <div className="pt-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-6 flex items-center gap-2">
              <span>Recorrido formativo y práctico</span>
              <span className="h-px flex-1 bg-[#E5E5E2]"></span>
            </h3>

            <div className="space-y-4">
              {siteConfig.about.trajectory.map((item, index) => (
                <div
                  key={item.step}
                  className="p-5 rounded-xl bg-white border border-[#E5E5E2] hover:border-[#111111] transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-[#111111] bg-[#F2F2EF] px-2 py-0.5 rounded">
                        {item.step}
                      </span>
                      <h4 className="text-base font-semibold text-[#111111]">
                        {item.label}
                      </h4>
                    </div>
                    <span className="font-mono text-[11px] text-[#60605E] uppercase bg-[#FAFAF8] px-2.5 py-0.5 rounded-full border border-[#E5E5E2]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#60605E] mb-2 pl-9">
                    {item.entity}
                  </div>

                  <p className="text-sm text-[#60605E] pl-9 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
