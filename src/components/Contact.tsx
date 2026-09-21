import { useState } from 'react';
import { siteConfig } from '../config/site';
import { Mail, ArrowUpRight, Copy, Check, Github, Linkedin, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('Desarrollo de Software');
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`[Contacto PerdomoPro] ${inquiryType} - ${senderName || 'Consulta'}`);
    const body = encodeURIComponent(
      `Hola Adrián,\n\nMi nombre es ${senderName || '[Tu Nombre]'}.\n\nTipo de interés: ${inquiryType}\n\nMensaje:\n${senderMessage || 'Me gustaría conversar sobre un proyecto o colaboración técnica.'}\n\nSaludos,\n${senderName || ''}`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contacto"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E5E5E2]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 border-b border-[#E5E5E2]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#60605E]">[07]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]">
            Contacto / Iniciar conversación
          </span>
        </div>
        <div className="font-mono text-xs text-[#60605E]">
          RESPUESTA HABITUAL &lt; 24H
        </div>
      </div>

      <div className="pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Big Statement & Direct Links */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#60605E] block mb-3">
                ¿Tienes una idea o un problema que resolver?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.15]">
                Hablemos sobre software, infraestructura o cloud.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#60605E] leading-relaxed">
              Estoy abierto a colaboraciones técnicas, desarrollo de software, modernizaciones web en Azure/AWS y oportunidades profesionales donde pueda aportar valor real.
            </p>

            {/* Direct Email with Quick Copy */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E2] space-y-4">
              <span className="font-mono text-xs text-[#60605E] uppercase block">
                Correo electrónico directo
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-base sm:text-lg font-semibold text-[#111111] hover:underline"
                >
                  {siteConfig.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111] bg-[#F2F2EF] hover:bg-[#E5E5E2] px-3 py-1.5 rounded-md border border-[#E5E5E2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                  aria-label="Copiar correo al portapapeles"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#60605E]" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#60605E] uppercase block">
                Presencia profesional
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#111111] bg-white px-4 py-2.5 rounded-full border border-[#E5E5E2] hover:border-[#111111] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#60605E]" />
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#111111] bg-white px-4 py-2.5 rounded-full border border-[#E5E5E2] hover:border-[#111111] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#60605E]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Proposal / Draft Builder */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white border border-[#E5E5E2] p-8 sm:p-10 shadow-sm space-y-6">
              <div className="border-b border-[#E5E5E2] pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#60605E] block mb-1">
                  Redactor rápido de mensaje
                </span>
                <h3 className="text-xl font-bold text-[#111111]">
                  Enviar consulta directamente
                </h3>
              </div>

              {/* Inquiry Type Selection */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#111111] block">
                  Área de consulta
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Desarrollo de Software',
                    'Cloud / Infraestructura',
                    'Automatización',
                    'Consultoría técnica',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`text-xs font-medium p-2.5 rounded-lg border text-left transition-colors ${
                        inquiryType === type
                          ? 'bg-[#111111] text-[#FAFAF8] border-[#111111]'
                          : 'bg-[#FAFAF8] text-[#60605E] hover:text-[#111111] border-[#E5E5E2]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name input */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="font-mono text-xs text-[#111111] block">
                  Tu nombre o empresa
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Ej. Roberto Sánchez"
                  className="w-full text-sm p-3 rounded-lg bg-[#FAFAF8] border border-[#E5E5E2] focus:border-[#111111] focus:outline-none transition-colors"
                />
              </div>

              {/* Brief Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="font-mono text-xs text-[#111111] block">
                  Breve resumen del proyecto
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Cuéntame brevemente qué necesitas construir, migrar o automatizar..."
                  className="w-full text-sm p-3 rounded-lg bg-[#FAFAF8] border border-[#E5E5E2] focus:border-[#111111] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit / Open Mail Client */}
              <a
                href={generateMailtoLink()}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#111111] text-[#FAFAF8] hover:bg-[#2A2A28] py-3.5 rounded-full transition-colors shadow-sm"
              >
                <span>Generar correo y enviar</span>
                <Send className="w-4 h-4" />
              </a>

              <p className="font-mono text-[11px] text-[#A0A09C] text-center">
                Abre tu cliente de correo preferido con el mensaje formateado listo para enviar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
