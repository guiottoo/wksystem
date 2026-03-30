const devPhases = [
  {
    phase: 'Fase 1',
    title: 'MVP',
    description: 'Os 7 módulos essenciais para entrar em produção com o sistema funcionando.',
    items: [
      'Acesso e autenticação com MFA',
      'Gestão de casos e atribuição de advogados',
      'Upload, aprovação e versionamento de documentos',
      'Timeline de acompanhamento do processo',
      'Notificações automáticas por email',
      'Formulário de análise de elegibilidade',
      'Dashboard com visão geral de todos os casos',
    ],
  },
  {
    phase: 'Fase 2',
    title: 'Evolução',
    description: 'Funcionalidades que ampliam o alcance e a profundidade do sistema após o MVP.',
    items: [
      'Chat em tempo real entre cliente e advogado',
      'Relatórios e exportação de dados',
      'Integração com ferramentas externas',
      'App mobile (iOS e Android)',
      'Automações e fluxos personalizados',
      'Portal de pagamentos integrado',
    ],
  },
];

const maintenanceItems = [
  {
    title: 'Suporte técnico',
    description: 'Correção de bugs, ajustes de comportamento e atendimento a incidentes reportados pela equipe.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Atualizações de segurança',
    description: 'Monitoramento e atualização contínua de dependências, patches de segurança e boas práticas.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Novas funcionalidades',
    description: 'Desenvolvimento contínuo de melhorias e recursos solicitados pela equipe da WK.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    title: 'Monitoramento e infraestrutura',
    description: 'Acompanhamento de performance, uptime, custos de nuvem e otimizações de banco de dados.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function CustosDev() {
  return (
    <section id="investimento" className="py-28 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16 text-center">
          <span className="text-[#D96C45] text-xs font-semibold tracking-widest uppercase">Investimento</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-5">Desenvolvimento e Manutenção</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            O desenvolvimento é dividido em fases para garantir entregas progressivas e valor imediato. A manutenção mantém o sistema seguro e evoluindo.
          </p>
        </div>

        {/* Dev phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {devPhases.map((p, i) => (
            <div
              key={p.phase}
              className={`rounded-lg p-8 border ${
                i === 0
                  ? 'bg-[#D96C45]/5 border-[#D96C45]/20'
                  : 'bg-white/[0.03] border-white/[0.07]'
              }`}
            >
              <div className="mb-5">
                <span
                  className="text-sm font-semibold px-4 py-2 rounded-lg inline-block"
                  style={
                    i === 0
                      ? { background: 'rgba(217,108,69,0.15)', color: '#D96C45', border: '1px solid rgba(217,108,69,0.3)' }
                      : { background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }
                  }
                >
                  {p.phase}
                </span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">{p.description}</p>
              <ul className="space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D96C45]/60 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Maintenance */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-6">O que está incluso na manutenção</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maintenanceItems.map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/[0.07] rounded-lg p-8 hover:border-[#D96C45]/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-[#D96C45]/10 border border-[#D96C45]/20 flex items-center justify-center text-[#D96C45] mb-5">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold text-lg mb-2 leading-snug">{item.title}</h4>
                <p className="text-gray-400 text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-[#D96C45]/8 to-transparent border border-[#D96C45]/20 rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Pronto para começar?</h3>
            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
              Entre em contato com a Allocate para receber a proposta comercial completa com valores de desenvolvimento e plano de manutenção.
            </p>
          </div>
          <a
            href="mailto:contato@allocate.com.br"
            className="flex-shrink-0 bg-[#D96C45] hover:bg-[#c45d38] text-white px-10 py-4 rounded-lg text-base font-semibold transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#D96C45]/20 whitespace-nowrap text-center"
          >
            Solicitar Proposta
          </a>
        </div>
      </div>
    </section>
  );
}
