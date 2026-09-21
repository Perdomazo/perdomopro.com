import { useState } from 'react';
import { siteConfig, ProjectItem } from '../config/site';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, ChevronRight, Layers, ArrowRight, Server, Cloud, Cpu, Smartphone } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="proyectos"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E5E5E2]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 border-b border-[#E5E5E2]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#60605E]">[03]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]">
            Selected Work / Proyectos seleccionados
          </span>
        </div>
        <div className="font-mono text-xs text-[#60605E]">
          4 CASOS TÉCNICOS DOCUMENTADOS
        </div>
      </div>

      <div className="pt-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mb-4">
            Proyectos & Casos de Estudio.
          </h2>
          <p className="text-base sm:text-lg text-[#60605E]">
            Experiencia técnica real, exploraciones académicas y desarrollos personales documentados con rigor, honestidad y foco en la arquitectura del sistema.
          </p>
        </div>

        {/* Editorial Showcase List */}
        <div className="space-y-16 lg:space-y-24">
          {siteConfig.projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-white border border-[#E5E5E2] p-8 sm:p-10 lg:p-12 hover:border-[#111111] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Content Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#60605E]">
                      <span className="font-bold text-[#111111] bg-[#F2F2EF] px-2 py-0.5 rounded">
                        {project.number}
                      </span>
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAFAF8] border border-[#E5E5E2] text-[#111111] text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-2 group-hover:text-black">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-[#60605E]">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#60605E] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-[#111111] bg-[#FAFAF8] px-2.5 py-1 rounded border border-[#E5E5E2]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="font-mono text-xs text-[#60605E] self-center">
                          +{project.technologies.length - 5} más
                        </span>
                      )}
                    </div>

                    {/* Action button */}
                    <div className="pt-4 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-semibold bg-[#111111] text-[#FAFAF8] hover:bg-[#2A2A28] px-4 py-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                      >
                        <span>Ver arquitectura técnica</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] hover:underline"
                        >
                          <span>Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual / Schematic Vector Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="w-full bg-[#FAFAF8] rounded-xl border border-[#E5E5E2] p-6 sm:p-8 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
                      {/* Abstract technical schematic for each project */}
                      {project.id === 'azure-web-modernization' && (
                        <div className="space-y-4 my-auto">
                          <div className="flex items-center justify-between font-mono text-[11px] text-[#60605E] pb-3 border-b border-[#E5E5E2]">
                            <span>MIGRATION WORKFLOW SCHEMATIC</span>
                            <span>AZURE SWA · CI/CD</span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                            <div className="p-3 rounded-lg bg-white border border-[#E5E5E2]">
                              <Server className="w-4 h-4 mx-auto mb-1 text-rose-600" />
                              <span className="font-bold block text-[11px]">IIS / AWS EC2</span>
                              <span className="text-[10px] text-[#A0A09C]">Legacy Monolith</span>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                              <span className="text-[10px] text-[#60605E] mb-1">GitHub Actions</span>
                              <ArrowRight className="w-4 h-4 text-[#111111]" />
                              <span className="text-[9px] text-emerald-600 font-semibold mt-1">Auto-deploy</span>
                            </div>

                            <div className="p-3 rounded-lg bg-white border border-[#111111]">
                              <Cloud className="w-4 h-4 mx-auto mb-1 text-[#111111]" />
                              <span className="font-bold block text-[11px]">Azure SWA</span>
                              <span className="text-[10px] text-emerald-600 font-semibold">Edge CDN + SSL</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded bg-white border border-[#E5E5E2] text-[11px] font-mono text-[#60605E] flex justify-between items-center">
                            <span>DNS Records: Azure Traffic Routing</span>
                            <span className="text-emerald-600 font-semibold">Zero-downtime cutover</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'iot-industrial-monitoring' && (
                        <div className="space-y-4 my-auto">
                          <div className="flex items-center justify-between font-mono text-[11px] text-[#60605E] pb-3 border-b border-[#E5E5E2]">
                            <span>EDGE-TO-CLOUD TELEMETRY PIPELINE</span>
                            <span>MQTT · UdeG LAB</span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                            <div className="p-3 rounded-lg bg-white border border-[#E5E5E2]">
                              <Cpu className="w-4 h-4 mx-auto mb-1 text-amber-600" />
                              <span className="font-bold block text-[11px]">Sensores Gas</span>
                              <span className="text-[10px] text-[#A0A09C]">Captura Analógica</span>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                              <span className="text-[10px] text-[#60605E] mb-1">Raspberry Pi</span>
                              <ArrowRight className="w-4 h-4 text-[#111111]" />
                              <span className="text-[9px] text-[#60605E] mt-1">Local Buffer</span>
                            </div>

                            <div className="p-3 rounded-lg bg-white border border-[#111111]">
                              <Server className="w-4 h-4 mx-auto mb-1 text-[#111111]" />
                              <span className="font-bold block text-[11px]">Broker MQTT</span>
                              <span className="text-[10px] text-emerald-600 font-semibold">TLS Telemetry</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded bg-white border border-[#E5E5E2] text-[11px] font-mono text-[#60605E] flex justify-between items-center">
                            <span>Tolerancia a desconexión</span>
                            <span className="text-[#111111] font-semibold">Persistencia local en Edge</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'gastup-app' && (
                        <div className="space-y-4 my-auto">
                          <div className="flex items-center justify-between font-mono text-[11px] text-[#60605E] pb-3 border-b border-[#E5E5E2]">
                            <span>LOCAL-FIRST MOBILE ARCHITECTURE</span>
                            <span>OFFLINE DATABASE</span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                            <div className="p-3 rounded-lg bg-white border border-[#111111]">
                              <Smartphone className="w-4 h-4 mx-auto mb-1 text-[#111111]" />
                              <span className="font-bold block text-[11px]">React Native</span>
                              <span className="text-[10px] text-[#60605E]">Native UI</span>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                              <span className="text-[10px] text-[#60605E] mb-1">Direct Driver</span>
                              <ArrowRight className="w-4 h-4 text-[#111111]" />
                              <span className="text-[9px] text-emerald-600 font-semibold mt-1">0ms Network</span>
                            </div>

                            <div className="p-3 rounded-lg bg-white border border-[#E5E5E2]">
                              <Server className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                              <span className="font-bold block text-[11px]">SQLite Local</span>
                              <span className="text-[10px] text-emerald-600 font-semibold">100% Privado</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded bg-white border border-[#E5E5E2] text-[11px] font-mono text-[#60605E] flex justify-between items-center">
                            <span>Seguridad de datos</span>
                            <span className="text-emerald-600 font-semibold">Sin nube obligatoria</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'perdomopro-platform' && (
                        <div className="space-y-4 my-auto">
                          <div className="flex items-center justify-between font-mono text-[11px] text-[#60605E] pb-3 border-b border-[#E5E5E2]">
                            <span>STATIC WEB APPLICATION CORE</span>
                            <span>LIGHTWEIGHT PERFORMANCE</span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                            <div className="p-3 rounded-lg bg-white border border-[#E5E5E2]">
                              <span className="font-bold block text-[11px] mb-1">TypeScript</span>
                              <span className="text-[10px] text-[#A0A09C]">Tailwind 4 + Motion</span>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                              <span className="text-[10px] text-[#60605E] mb-1">Vite Build</span>
                              <ArrowRight className="w-4 h-4 text-[#111111]" />
                              <span className="text-[9px] text-emerald-600 font-semibold mt-1">Pure Static dist/</span>
                            </div>

                            <div className="p-3 rounded-lg bg-white border border-[#111111]">
                              <Cloud className="w-4 h-4 mx-auto mb-1 text-[#111111]" />
                              <span className="font-bold block text-[11px]">Azure SWA</span>
                              <span className="text-[10px] text-emerald-600 font-semibold">Global CDN</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded bg-white border border-[#E5E5E2] text-[11px] font-mono text-[#60605E] flex justify-between items-center">
                            <span>Core Web Vitals</span>
                            <span className="text-emerald-600 font-semibold">Performance Score 100</span>
                          </div>
                        </div>
                      )}

                      <div className="pt-3 border-t border-[#E5E5E2] flex items-center justify-between text-[11px] font-mono text-[#60605E]">
                        <span>ESQUEMA DE ARQUITECTURA</span>
                        <span className="text-[#111111] font-semibold">FIG. 0{idx + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
