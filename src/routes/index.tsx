import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-lure.png";
import logoGold from "@/assets/lure-logo-gold.png";
import logoWhite from "@/assets/lure-logo-white.png";
import { Toaster } from "@/components/ui/sonner";

export default function Index() {
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showWhite, setShowWhite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t1 = setTimeout(() => setShowWhite(true), 1200);
    const t2 = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      navigate("/obrigado");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#070a18] text-white antialiased">
      <Toaster theme="dark" position="top-center" />
      {/* Splash */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#070a18] transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <img
          src={logoGold}
          alt="Lure Digital"
          className={`absolute w-40 md:w-52 transition-all duration-700 ${
            showWhite ? "opacity-0 scale-95" : "opacity-100 scale-100 animate-pulse"
          }`}
        />
        <img
          src={logoWhite}
          alt="Lure Digital"
          className={`absolute w-40 md:w-52 transition-all duration-700 ${
            showWhite ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      </div>

      {/* Hero */}
      <header className="relative w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Lure Digital"
          className="hidden md:block w-full h-auto mx-auto"
        />
        <img
          src={heroImage}
          alt="Lure Digital"
          className="block md:hidden w-full h-[180px] object-cover object-center mx-auto"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#070a18]" />
      </header>

      <main className="max-w-2xl mx-auto px-4 md:px-6 mt-6 md:mt-10 relative z-10 pb-16">
        {/* Unified card */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0f1430] to-[#0b1027] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Top accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          {/* Vaga header */}
          <div className="p-5 md:p-8 text-center">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/90">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Vagas abertas
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-300/90">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Recebendo candidaturas
              </span>
            </div>

            <h1 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight leading-tight">
              Vagas <span className="text-amber-300">Lure Digital</span>
            </h1>

            <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs md:text-sm text-white/55">
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Operacional
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Fortaleza
              </span>
            </div>

            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              Na Lure Digital, acreditamos que marketing não é apenas sobre anúncio bonito.
              É sobre crescimento, posicionamento e resultado real no mercado automotivo da América Latina.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06]" />

          {/* Form section */}
          <div className="p-5 md:p-8">
            <div className="mb-6">
              <h2 className="text-lg md:text-xl font-bold tracking-tight">Candidate-se agora</h2>
              <p className="text-xs md:text-sm text-white/50 mt-1">Preencha os dados abaixo para concorrer à vaga.</p>
            </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Nome completo" required>
              <input required type="text" maxLength={120} className={inputCls} />
            </Field>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <Field label="E-mail" required>
                <input required type="email" maxLength={150} className={inputCls} />
              </Field>
              <Field label="Telefone" required>
                <input required type="tel" placeholder="(11) 99999-9999" maxLength={20} className={inputCls} />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <Field label="Área/Função" required>
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Selecione</option>
                  <option>Comercial</option>
                  <option>RH</option>
                  <option>Financeiro</option>
                  <option>Operacional</option>
                  <option>Eventos</option>
                  <option>Marketing</option>
                  <option>Educação</option>
                </select>
              </Field>
              <Field label="Como conheceu a vaga" required>
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Selecione</option>
                  <option>LinkedIn</option>
                  <option>Instagram</option>
                  <option>Indicação</option>
                  <option>Site da Lure</option>
                  <option>Outro</option>
                </select>
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <Field label="Disponibilidade" required>
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Selecione</option>
                  <option>Imediata</option>
                  <option>15 dias</option>
                  <option>30 dias</option>
                  <option>Mais de 30 dias</option>
                </select>
              </Field>
              <Field label="Pretensão salarial (R$)" required>
                <input required type="number" min={0} defaultValue={0} className={inputCls} />
              </Field>
            </div>

            <Field label="Instagram">
              <input type="url" placeholder="https://instagram.com/..." maxLength={250} className={inputCls} />
            </Field>

            <Field label="LinkedIn">
              <input type="url" placeholder="https://linkedin.com/in/..." maxLength={250} className={inputCls} />
            </Field>

            <Field label="Portfólio">
              <input type="url" placeholder="https://..." maxLength={250} className={inputCls} />
            </Field>

            <Field label="Link do currículo (PDF/Drive)" required>
              <input required type="url" placeholder="https://drive.google.com/..." maxLength={250} className={inputCls} />
            </Field>

            <Field label="Carta de apresentação">
              <textarea rows={5} maxLength={2000} placeholder="Breve apresentação do candidato..." className={`${inputCls} resize-y min-h-[120px]`} />
            </Field>

            <div className="pt-3">
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3.5 rounded-xl font-semibold text-[#070a18] bg-gradient-to-r from-[#f5c45a] to-[#e6a23c] hover:brightness-110 active:brightness-95 transition shadow-lg shadow-amber-500/20 disabled:opacity-60"
              >
                {submitting ? "Enviando..." : "Enviar candidatura →"}
              </button>
              <button type="reset" className="w-full mt-2 px-5 py-2.5 text-sm text-white/50 hover:text-white/80 transition">
                Limpar campos
              </button>
            </div>
          </form>
          </div>
        </div>

        <p className="text-center text-xs text-white/30 mt-6">
          © {new Date().getFullYear()} Lure Digital — Aceleradora de resultados no mercado automotivo.
        </p>
      </main>
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] text-white text-sm placeholder:text-white/25 outline-none transition focus:border-amber-400/50 focus:bg-black/60 focus:ring-2 focus:ring-amber-400/15";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium mb-1.5 text-white/70 uppercase tracking-wider">
        {label} {required && <span className="text-amber-400 normal-case">*</span>}
      </span>
      {children}
    </label>
  );
}
