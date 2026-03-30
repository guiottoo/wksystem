export default function Hero() {
  return (
    <section
      id="sistema"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D96C45]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#D96C45]/10 border border-[#D96C45]/20 text-[#D96C45] text-xs font-medium px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
          Desenvolvido por Allocate
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
          WK System
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
          Plataforma de gestão migratória desenvolvida sob medida para a WK.
        </p>

        <p className="text-base text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Um sistema completo para centralizar casos, documentos e comunicação com clientes estrangeiros — em um único lugar, seguro, multilíngue e profissional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#modulos"
            className="bg-[#D96C45] hover:bg-[#c45d38] text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-[#D96C45]/20"
          >
            Ver Módulos
          </a>
          <a
            href="#custos"
            className="border border-white/10 hover:border-white/20 text-gray-300 hover:text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-white/5 hover:bg-white/10"
          >
            Ver Custos
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '7', label: 'Módulos no MVP' },
            { value: '4', label: 'Idiomas suportados' },
            { value: '99.5%', label: 'Uptime garantido' },
            { value: '3', label: 'Perfis de acesso' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#D96C45] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
            </div>
          ))}
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
