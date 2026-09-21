import { motion } from 'motion/react';
import { siteConfig } from '../config/site';
import { ArrowDown, ArrowUpRight, Code2, Cloud, Workflow, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pillars = [
    { label: 'Software', icon: Code2, desc: 'Arquitectura limpia & TypeScript' },
    { label: 'Cloud & Infra', icon: Cloud, desc: 'Azure, AWS & servidores Linux' },
    { label: 'Automatización', icon: Workflow, desc: 'Pipelines CI/CD & scripting' },
    { label: 'Inteligencia Artificial', icon: Sparkles, desc: 'Agentes & modelos aplicados' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Top Metadata Strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E5E5E2] font-mono text-xs text-[#60605E]"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
          <span className="tracking-wider uppercase">Guadalajara, México</span>
          <span className="text-[#A0A09C] hidden sm:inline">[{siteConfig.coordinates}]</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-[#A0A09C]">STATUS:</span>
          <span className="inline-flex items-center gap-1.5 text-[#111111] bg-[#F2F2EF] px-2.5 py-0.5 rounded-full border border-[#E5E5E2]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {siteConfig.statusBadge}
          </span>
        </div>
      </motion.div>

      {/* Center Main Editorial Composition */}
      <div className="my-auto py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Headline */}
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block font-mono text-xs uppercase tracking-widest text-[#60605E] mb-4"
            >
              Adrián Perdomo · Personal Tech Brand & Lab
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#111111] leading-[1.08] max-w-4xl"
            >
              Construyo tecnología entre el software y la infraestructura.
            </motion.h1>
          </div>

          {/* Right Sub-Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pt-8 flex flex-col justify-between space-y-6"
          >
            <p className="text-base sm:text-lg text-[#60605E] leading-relaxed font-normal">
              {siteConfig.shortBio}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo('#proyectos')}
                className="inline-flex items-center gap-2 text-sm font-semibold bg-[#111111] text-[#FAFAF8] px-5 py-3 rounded-full hover:bg-[#2A2A28] transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111]"
              >
                <span>Ver proyectos</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#sobre-mi')}
                className="inline-flex items-center gap-2 text-sm font-medium bg-transparent text-[#111111] hover:bg-[#F2F2EF] px-5 py-3 rounded-full border border-[#E5E5E2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                <span>Sobre mí</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Technical Pillars Grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pt-8 border-t border-[#E5E5E2]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.label} className="group flex flex-col space-y-1">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#A0A09C]">
                  <span>0{idx + 1}</span>
                  <Icon className="w-3.5 h-3.5 text-[#60605E] group-hover:text-[#111111] transition-colors" />
                </div>
                <div className="text-sm font-semibold text-[#111111] pt-0.5">
                  {pillar.label}
                </div>
                <div className="text-xs text-[#60605E]">
                  {pillar.desc}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
