const modules = [
  {
    number: '01',
    title: 'Acesso e Segurança',
    description:
      'Login seguro com autenticação em dois fatores (MFA). Cada usuário enxerga apenas o que lhe pertence. Três perfis de acesso: Cliente, Advogado e Admin.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Gestão de Casos',
    description:
      'A equipe cria e gerencia cada processo migratório. Define etapas, atribui o advogado responsável e atualiza o status do caso em tempo real.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Envio de Documentos',
    description:
      'O cliente recebe uma lista do que precisa enviar e faz o upload direto na plataforma. A equipe aprova, rejeita ou solicita nova versão. Tudo registrado.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Acompanhamento do Processo',
    description:
      'O cliente visualiza uma timeline clara com o status atual do processo. Sem precisar ligar ou mandar mensagem para saber o que está acontecendo.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Notificações Automáticas',
    description:
      'Toda atualização relevante dispara um email automático para o cliente. Menos mensagens no WhatsApp, mais profissionalismo no atendimento.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Análise de Elegibilidade',
    description:
      'Leads e clientes respondem um formulário e descobrem imediatamente se atendem os requisitos para o visto ou naturalização. Resultado sem precisar falar com advogado.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Dashboard da Equipe',
    description:
      'Visão geral de todos os casos ativos, documentos pendentes e leads qualificados. Dados concretos para tomar decisões com mais segurança.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
];

export default function Modulos() {
  return (
    <section id="modulos" className="py-28 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#D96C45] text-xs font-semibold tracking-widest uppercase">MVP</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Módulos do Sistema</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Escopo mínimo para entrar em produção. Tudo que resolve o problema central da WK, sem nada além do necessário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <div
              key={mod.number}
              className={`group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-[#D96C45]/30 hover:bg-white/[0.05] transition-all duration-300 ${
                i === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#D96C45]/10 border border-[#D96C45]/20 flex items-center justify-center text-[#D96C45] group-hover:bg-[#D96C45]/15 transition-colors">
                  {mod.icon}
                </div>
                <div>
                  <span className="text-[#D96C45]/60 text-xs font-mono">{mod.number}</span>
                  <h3 className="text-white font-semibold text-base mt-0.5 mb-2 group-hover:text-[#D96C45] transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{mod.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
