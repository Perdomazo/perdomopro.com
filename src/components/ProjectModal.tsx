import { ProjectItem } from '../config/site';
import { X, ExternalLink, Github, CheckCircle, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#111111]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-[#E5E5E2] shadow-2xl p-6 sm:p-8 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#F2F2EF] text-[#60605E] hover:text-[#111111] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header info */}
        <div className="space-y-3 pb-6 border-b border-[#E5E5E2] pr-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#60605E]">
            <span className="bg-[#111111] text-[#FAFAF8] px-2 py-0.5 rounded font-semibold">
              PROYECTO {project.number}
            </span>
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAFAF8] border border-[#E5E5E2] text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {project.status}
            </span>
          </div>

          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
            {project.title}
          </h3>
          <p className="text-base text-[#60605E] font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Technical Context */}
        <div className="py-6 space-y-6">
          <div className="p-4 rounded-xl bg-[#FAFAF8] border border-[#E5E5E2]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#60605E] block mb-1">
              Contexto de la solución
            </span>
            <p className="text-sm text-[#111111] leading-relaxed">
              {project.context}
            </p>
          </div>

          {/* Problem vs Solution breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#FAFAF8] border border-[#E5E5E2] space-y-2">
              <span className="font-mono text-xs uppercase font-semibold text-rose-700 tracking-wider flex items-center gap-1.5">
                <span>01</span> El problema / Desafío
              </span>
              <p className="text-sm text-[#60605E] leading-relaxed">
                {project.architectureDetails.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAFAF8] border border-[#E5E5E2] space-y-2">
              <span className="font-mono text-xs uppercase font-semibold text-emerald-700 tracking-wider flex items-center gap-1.5">
                <span>02</span> La solución de arquitectura
              </span>
              <p className="text-sm text-[#60605E] leading-relaxed">
                {project.architectureDetails.solution}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#111111] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Aspectos técnicos destacados</span>
            </h4>
            <div className="space-y-2">
              {project.architectureDetails.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#60605E]">
                  <CheckCircle className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="p-4 rounded-xl bg-[#F2F2EF] border border-[#E5E5E2]">
            <span className="font-mono text-xs uppercase font-semibold text-[#111111] block mb-1">
              Impacto & Resultado obtenido
            </span>
            <p className="text-sm text-[#60605E]">
              {project.architectureDetails.impact}
            </p>
          </div>

          {/* Stack tags */}
          <div className="space-y-2 pt-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#60605E] block">
              Ecosistema tecnológico utilizado
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-[#111111] bg-[#FAFAF8] px-3 py-1 rounded-md border border-[#E5E5E2]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-[#E5E5E2] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-[#60605E] hover:text-[#111111] py-2 px-4 rounded-full border border-[#E5E5E2] hover:bg-[#F2F2EF] transition-colors"
          >
            Cerrar ficha técnica
          </button>

          <div className="flex items-center gap-3">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:underline"
              >
                <Github className="w-4 h-4" />
                <span>Código</span>
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#111111] text-[#FAFAF8] px-4 py-2 rounded-full hover:bg-[#2A2A28] transition-colors"
              >
                <span>Visitar sitio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
