import { useState } from 'react';
import { siteConfig } from '../config/site';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';

export default function Currently() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section
      id="currently"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E5E5E2]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 border-b border-[#E5E5E2]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#60605E]">[06]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]">
            Currently Exploring / Enfoque actual
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#60605E]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>ACTUALIZADO SEPTIEMBRE 2026</span>
        </div>
      </div>

      <div className="pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
              Laboratorio en vivo.
            </h2>
            <p className="text-base text-[#60605E] leading-relaxed">
              La tecnología evoluciona a un ritmo implacable. En lugar de limitarme a lo que ya conozco, mantengo un espacio activo de investigación y experimentación con proyectos tangibles.
            </p>

            <div className="p-5 rounded-xl bg-white border border-[#E5E5E2] space-y-2 mt-6">
              <span className="font-mono text-xs text-[#60605E] uppercase block">
                Tema en foco ({siteConfig.currentlyExploring[activeItem].tag})
              </span>
              <p className="text-sm font-semibold text-[#111111]">
                {siteConfig.currentlyExploring[activeItem].label}
              </p>
              <p className="text-xs text-[#60605E] leading-relaxed">
                {siteConfig.currentlyExploring[activeItem].note}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {siteConfig.currentlyExploring.map((item, idx) => {
                const isSelected = activeItem === idx;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveItem(idx)}
                    className={`p-5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-[#111111] shadow-sm ring-1 ring-[#111111]'
                        : 'bg-[#FAFAF8] hover:bg-[#F2F2EF] border-[#E5E5E2]'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#60605E] block mb-2">
                        {item.tag}
                      </span>
                      <h3 className="font-semibold text-sm text-[#111111] mb-2">
                        {item.label}
                      </h3>
                    </div>
                    <span className="text-xs text-[#60605E] line-clamp-2">
                      {item.note}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
