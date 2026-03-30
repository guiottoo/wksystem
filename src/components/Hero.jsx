export default function Hero() {
  return (
    <section
      id="sistema"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-10"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D96C45]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-[#D96C45]/10 border border-[#D96C45]/20 text-[#D96C45] text-xs font-medium px-5 py-2.5 rounded-lg mb-10 tracking-widest uppercase">
          Desenvolvido por Allocate
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
          WK System
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-5 leading-relaxed max-w-2xl font-medium">
          A plataforma que coloca a WK em outro nível.
        </p>

        <p className="text-base sm:text-lg text-gray-500 mb-14 max-w-xl leading-relaxed">
          Um sistema de gestão migratória completo: casos, documentos, comunicação e acompanhamento em uma única plataforma segura, multilíngue e profissional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#modulos"
            className="bg-[#D96C45] hover:bg-[#c45d38] text-white px-10 py-4 rounded-lg text-base font-semibold transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#D96C45]/20 text-center"
          >
            Explorar Projeto
          </a>
          <a
            href="#custos"
            className="border border-white/10 hover:border-white/20 text-gray-300 hover:text-white px-10 py-4 rounded-lg text-base font-semibold transition-all duration-200 bg-white/5 hover:bg-white/8 text-center"
          >
            Ver Custos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
