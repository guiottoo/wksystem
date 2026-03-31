export default function Hero() {
  return (
    <section
      id="sistema"
      className="h-[70vh] min-h-[500px] flex items-center justify-center relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#D96C45]/3 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none" />

      <div className="relative z-10 site-container flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#D96C45] mb-6 leading-[1.1] tracking-tight">
          WK System
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 mb-5 leading-[1.5] max-w-2xl font-medium">
          A plataforma que coloca a WK em outro nível.
        </p>

        <p className="max-w-xl" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace", fontSize: '14px', lineHeight: '1.85', color: '#9ca3af' }}>
          Um sistema de gestão migratória completo: casos, documentos, comunicação e acompanhamento em uma única plataforma segura, multilíngue e profissional.
        </p>
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
