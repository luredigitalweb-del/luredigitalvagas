import { createFileRoute, Link } from "@tanstack/react-router";
import logoWhite from "@/assets/lure-logo-white.png";
import logoGold from "@/assets/lure-logo-gold-full.png";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado | Lure Digital" },
      { name: "description", content: "Candidatura recebida com sucesso." },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  return (
    <div className="min-h-screen bg-[#070a18] text-white antialiased flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <img src={logoWhite} alt="Lure Digital" className="w-32 md:w-40 mx-auto mb-8" />

        <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0f1430] to-[#0b1027] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden p-8 md:p-10">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent -mx-8 md:-mx-10 mb-8" />

          <div className="mx-auto mb-6 flex items-center justify-center">
            <img src={logoGold} alt="Lure Digital" className="h-24 w-24 object-contain" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Candidatura <span className="text-amber-300">enviada!</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
            Recebemos seus dados com sucesso. Nosso time de RH vai analisar seu perfil
            e entrará em contato caso avance no processo seletivo.
          </p>

          <p className="mt-6 text-xs text-white/40">
            Fique de olho no seu e-mail e WhatsApp nos próximos dias.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 px-6 py-3 rounded-xl font-semibold text-[#070a18] bg-gradient-to-r from-[#f5c45a] to-[#e6a23c] hover:brightness-110 transition shadow-lg shadow-amber-500/20"
          >
            Voltar ao início
          </Link>
        </div>

        <p className="text-center text-xs text-white/30 mt-6">
          © {new Date().getFullYear()} Lure Digital
        </p>
      </div>
    </div>
  );
}