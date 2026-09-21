import { useState } from 'react';
import { siteConfig } from '../config/site';
import { ArrowUpRight, Code2, Cloud, Workflow, Sparkles, Check } from 'lucide-react';

export default function WorkAreas() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  const icons = [Code2, Cloud, Workflow, Sparkles];
  const activeArea = siteConfig.workAreas[activeAreaIndex];

  return (
    <section
      id="areas"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E5E5E2]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 border-b border-[#E5E5E2]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#60605E]">[02]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]">
            Áreas de trabajo
          </span>
        </div>
        <div className="font-mono text-xs text-[#60605E]">
          ESPECIALIZACIÓN EN CONSTRUCCIÓN
        </div>
      </div>

      <div className="pt-12">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mb-4">
            Lo que estoy construyendo.
          </h2>
          <p className="text-base sm:text-lg text-[#60605E]">
            No me limito a un único eslabón de la cadena tecnológica. Mi trabajo se centra en el punto de encuentro entre código funcional e infraestructura operativa.
          </p>
        </div>

        {/* Editorial Layout: Left Area List & Right Detailed Technical Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Area Index */}
          <div className="lg:col-span-6 space-y-3">
            {siteConfig.workAreas.map((area, idx) => {
              const Icon = icons[idx % icons.length];
              const isSelected = activeAreaIndex === idx;

              return (
                <button
                  key={area.number}
                  type="button"
                  onClick={() => setActiveAreaIndex(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#111111] shadow-sm'
                      : 'bg-[#FAFAF8] hover:bg-[#F2F2EF] border-[#E5E5E2]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span
                        className={`px-2 py-0.5 rounded ${
                          isSelected ? 'bg-[#111111] text-[#FAFAF8]' : 'bg-[#E5E5E2] text-[#60605E]'
                        }`}
                      >
                        {area.number}
                      </span>
                      <span className="text-[#60605E] uppercase">{area.title}</span>
                    </div>
                    <Icon
                      className={`w-4 h-4 ${
                        isSelected ? 'text-[#111111]' : 'text-[#A0A09C]'
                      }`}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-2">
                    {area.title}
                  </h3>

                  <p className="text-sm text-[#60605E] line-clamp-2">
                    {area.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Architectural Deep Dive for Selected Area */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E5E5E2] shadow-sm space-y-8">
              <div className="flex items-start justify-between pb-6 border-b border-[#E5E5E2]">
                <div>
                  <span className="font-mono text-xs text-[#60605E] block mb-1">
                    ÁREA SELECCIONADA · {activeArea.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                    {activeArea.title}
                  </h3>
                  <p className="text-sm font-medium text-[#60605E] mt-1">
                    {activeArea.tagline}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-3">
                  Alcance y descripción
                </h4>
                <p className="text-sm sm:text-base text-[#60605E] leading-relaxed">
                  {activeArea.description}
                </p>
              </div>

              {/* Focus points */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-3">
                  Puntos de foco técnico
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeArea.focus.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAFAF8] border border-[#E5E5E2] text-xs text-[#111111]"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-3">
                  Entregables característicos
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeArea.deliverables.map((del) => (
                    <span
                      key={del}
                      className="inline-flex items-center text-xs font-mono text-[#111111] bg-[#F2F2EF] px-3 py-1 rounded-full border border-[#E5E5E2]"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
