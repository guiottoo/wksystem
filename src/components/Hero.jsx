export default function Hero() {
  return (
    <section
      id="sistema"
      className="h-[70vh] min-h-[500px] flex items-center justify-center relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D96C45]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 site-container flex flex-col items-center text-center">
        <div className="inline-flex items-center bg-[#D96C45]/10 border border-[#D96C45]/20 text-[#D96C45] text-xs font-medium px-8 py-4 rounded-lg mb-10 tracking-widest uppercase">
          Explicação do projeto
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
          WK System
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 leading-[1.5] max-w-2xl font-medium">
          A plataforma que coloca a WK em outro nível.
        </p>

        <p className="text-base sm:text-lg text-gray-500 mb-14 max-w-xl leading-[1.8]">
          Um sistema de gestão migratória completo: casos, documentos, comunicação e acompanhamento em uma única plataforma segura, multilíngue e profissional.
        </p>

        <a
          href="#modulos"
          className="btn-primary text-center"
        >
          Explorar Projeto
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
