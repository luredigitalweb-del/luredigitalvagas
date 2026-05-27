import { Link } from "react-router-dom";
import logoWhite from "@/assets/lure-logo-white.png";

export default function Obrigado() {
  return (
    <div className="min-h-screen bg-[#070a18] text-white antialiased flex items-center justify-center px-4 overflow-hidden relative">
      {/* Glow background */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="max-w-lg w-full text-center relative z-10 animate-fade-up">
        <img
          src={logoWhite}
          alt="Lure Digital"
          className="w-32 md:w-40 mx-auto mb-8 animate-fade-down"
        />

        <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0f1430] to-[#0b1027] shadow-[0_20px_60px_-15px_rgba(245,196,90,0.25)] overflow-hidden p-8 md:p-10 animate-scale-in">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent -mx-8 md:-mx-10 mb-8" />

          {/* Animated check */}
          <div className="mx-auto mb-6 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400/20 animate-ping-slow" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/40">
                <svg
                  className="w-10 h-10 text-[#070a18] animate-check"
                  viewBox="0 0 52 52"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 27 L23 36 L40 18" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-up-delay-1">
            Candidatura <span className="text-amber-300">enviada!</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed animate-fade-up-delay-2">
            Recebemos seus dados com sucesso. Nosso time de RH vai analisar seu perfil
            e entrará em contato caso avance no processo seletivo.
          </p>

          <p className="mt-6 text-xs text-white/40 animate-fade-up-delay-3">
            Fique de olho no seu e-mail e WhatsApp nos próximos dias.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 px-6 py-3 rounded-xl font-semibold text-[#070a18] bg-gradient-to-r from-[#f5c45a] to-[#e6a23c] hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-amber-500/20 animate-fade-up-delay-4"
          >
            Voltar ao início
          </Link>
        </div>

        <p className="text-center text-xs text-white/30 mt-6 animate-fade-up-delay-4">
          © {new Date().getFullYear()} Lure Digital
        </p>
      </div>
    </div>
  );
}
