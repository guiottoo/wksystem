const layers = [
  {
    category: 'Frontend',
    items: [
      { tech: 'React + Vite', purpose: 'Interface do cliente e do painel admin' },
      { tech: 'Tailwind CSS + shadcn/ui', purpose: 'Visual moderno, componentes prontos' },
      { tech: 'React Router v6', purpose: 'Navegação entre páginas' },
      { tech: 'React Query + Zustand', purpose: 'Sincronização com servidor e estado global' },
    ],
    color: '#3B82F6',
  },
  {
    category: 'Backend',
    items: [
      { tech: 'Node.js + Express', purpose: 'API que conecta frontend ao banco e serviços' },
      { tech: 'PostgreSQL', purpose: 'Armazena casos, usuários, mensagens e logs' },
      { tech: 'Prisma ORM', purpose: 'Acesso ao banco com segurança e migrations' },
    ],
    color: '#10B981',
  },
  {
    category: 'Serviços',
    items: [
      { tech: 'Supabase Auth', purpose: 'Login, MFA, sessão e controle de perfis' },
      { tech: 'AWS S3 / Supabase Storage', purpose: 'Documentos com acesso controlado e seguro' },
      { tech: 'Supabase Realtime', purpose: 'Mensagens em tempo real entre cliente e advogado' },
      { tech: 'Resend', purpose: 'Notificações automáticas por email' },
      { tech: 'Twilio', purpose: 'Alertas via SMS para atualizações críticas' },
    ],
    color: '#8B5CF6',
  },
  {
    category: 'Infraestrutura',
    items: [
      { tech: 'Railway ou Render', purpose: 'Hospedagem simples, custo baixo no início' },
      { tech: 'GitHub Actions', purpose: 'Deploy automático a cada atualização de código' },
      { tech: 'Sentry + UptimeRobot', purpose: 'Detecção de erros e alertas de queda' },
    ],
    color: '#F59E0B',
  },
];

const decisions = [
  {
    title: 'Supabase como hub',
    description:
      'Auth, Storage e Realtime em um único serviço. Acelera o MVP. Se o sistema crescer, pode ser migrado sem reescrever tudo.',
  },
  {
    title: 'REST, não GraphQL',
    description:
      'Para esse escopo, REST é suficiente e mais simples. GraphQL traria complexidade desnecessária neste momento.',
  },
  {
    title: 'Monorepo recomendado',
    description:
      'Frontend e backend no mesmo repositório. Facilita o CI/CD e o fluxo de trabalho do time.',
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-28 bg-[#0f0f0f]">
      <div className="site-container">
        <div className="section-header">
          <span className="text-[#D96C45] text-xs font-semibold tracking-widest uppercase">Tecnologia</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-5">Stack Técnica</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Escolhidas por três critérios: velocidade de desenvolvimento, custo operacional baixo e maturidade para um sistema jurídico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {layers.map((layer) => (
            <div key={layer.category} className="card">
              <div
                className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-lg mb-6"
                style={{ backgroundColor: `${layer.color}15`, color: layer.color, border: `1px solid ${layer.color}25` }}
              >
                {layer.category}
              </div>
              <div className="space-y-5">
                {layer.items.map((item) => (
                  <div key={item.tech} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6">
                    <span className="text-white font-medium text-[15px] flex-shrink-0">{item.tech}</span>
                    <span className="text-gray-500 text-sm sm:text-right leading-relaxed">{item.purpose}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural decisions */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Decisões de Arquitetura</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {decisions.map((d) => (
              <div key={d.title} className="bg-[#D96C45]/5 border border-[#D96C45]/15 rounded-lg p-8">
                <h4 className="text-[#D96C45] font-semibold text-base mb-3">{d.title}</h4>
                <p className="text-gray-400 text-[15px] leading-[1.75]">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
