import { useState } from 'react';
import { siteConfig } from '../config/site';
import { Terminal, Layers, Cpu, Cloud, Shield } from 'lucide-react';

export default function Stack() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = siteConfig.stack;

  const filteredCategories =
    selectedFilter === 'all'
      ? categories
      : categories.filter((cat) => {
          if (selectedFilter === 'dev') return cat.category.toLowerCase().includes('desarrollo');
          if (selectedFilter === 'cloud') return cat.category.toLowerCase().includes('cloud');
          if (selectedFilter === 'infra') return cat.category.toLowerCase().includes('infraestructura');
          if (selectedFilter === 'ai') return cat.category.toLowerCase().includes('inteligencia');
          return true;
        });

  return (
    <section
      id="stack"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E5E5E2]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 border-b border-[#E5E5E2]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#60605E]">[05]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]">
            Stack & Tecnologías
          </span>
        </div>
        <div className="font-mono text-xs text-[#60605E]">
          ECOSISTEMA PRÁCTICO
        </div>
      </div>

      <div className="pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mb-4">
              Herramientas de construcción.
            </h2>
            <p className="text-base sm:text-lg text-[#60605E]">
              Una selección honesta de tecnologías con las que trabajo habitualmente, estructuradas según su ámbito de aplicación.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todas' },
              { id: 'dev', label: 'Desarrollo' },
              { id: 'cloud', label: 'Cloud' },
              { id: 'infra', label: 'Infraestructura' },
              { id: 'ai', label: 'IA & Scripting' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-colors ${
                  selectedFilter === tab.id
                    ? 'bg-[#111111] text-[#FAFAF8] border-[#111111]'
                    : 'bg-white text-[#60605E] hover:text-[#111111] border-[#E5E5E2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-8 rounded-2xl bg-white border border-[#E5E5E2] hover:border-[#111111] transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E5E2]">
                  <h3 className="font-bold text-lg text-[#111111]">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-[#60605E]">
                    {group.items.length} herramientas
                  </span>
                </div>

                <p className="text-xs text-[#60605E] mb-6">
                  {group.description}
                </p>

                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3 rounded-lg bg-[#FAFAF8] border border-[#E5E5E2] flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
                        <span className="font-semibold text-[#111111] text-sm">
                          {item.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span className="text-[#60605E] hidden sm:inline">
                          {item.tag}
                        </span>
                        <span className="bg-white px-2 py-0.5 rounded border border-[#E5E5E2] text-[#111111]">
                          {item.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
