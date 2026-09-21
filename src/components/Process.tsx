import { useState } from 'react';
import { siteConfig } from '../config/site';
import { ArrowRight, Check, Compass, PenTool, Code, Rocket, TrendingUp } from 'lucide-react';

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const icons = [Compass, PenTool, Code, Rocket, TrendingUp];
  const activeStep = siteConfig.processSteps[activeStepIndex];

  return (
    <section
      id="proceso"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E5E5E2]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 border-b border-[#E5E5E2]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#60605E]">[04]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]">
            Forma de trabajar
          </span>
        </div>
        <div className="font-mono text-xs text-[#60605E]">
          METODOLOGÍA DE INGENIERÍA
        </div>
      </div>

      <div className="pt-12">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mb-4">
            From problem to deployment.
          </h2>
          <p className="text-base sm:text-lg text-[#60605E]">
            Escribir código es solo una fase. El valor real surge de entender el contexto técnico, delimitar la arquitectura y garantizar que la solución pueda desplegarse y operar sin sorpresas.
          </p>
        </div>

        {/* Step Navigation Pill Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
          {siteConfig.processSteps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const Icon = icons[idx % icons.length];

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#111111] shadow-sm ring-1 ring-[#111111]'
                    : 'bg-[#FAFAF8] hover:bg-[#F2F2EF] border-[#E5E5E2]'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span className={isSelected ? 'text-[#111111] font-bold' : 'text-[#60605E]'}>
                    {step.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#111111]' : 'text-[#A0A09C]'}`} />
                </div>
                <div>
                  <span className="block font-bold text-sm text-[#111111]">
                    {step.title}
                  </span>
                  <span className="text-[11px] text-[#60605E] truncate block">
                    {step.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Inspector */}
        <div className="rounded-2xl bg-white border border-[#E5E5E2] p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs text-[#60605E]">
                <span className="bg-[#111111] text-[#FAFAF8] px-2 py-0.5 rounded font-bold">
                  ETAPA {activeStep.number}
                </span>
                <span className="uppercase">{activeStep.subtitle}</span>
              </div>

              <h3 className="text-3xl font-bold text-[#111111] tracking-tight">
                {activeStep.title}
              </h3>

              <p className="text-base text-[#60605E] leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 lg:border-l lg:border-[#E5E5E2] lg:pl-12">
              <span className="font-mono text-xs uppercase tracking-wider text-[#111111] block mb-2">
                Principios & Criterios aplicados
              </span>

              <div className="space-y-3">
                {activeStep.principles.map((principle, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAF8] border border-[#E5E5E2]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#111111] text-[#FAFAF8] flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-sm text-[#111111] font-medium leading-relaxed">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
