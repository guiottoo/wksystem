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
      'Auth + Storage + Realtime em um único serviço. Acelera o MVP. Se o sistema crescer, pode ser migrado sem reescrever tudo.',
  },
  {
    title: 'REST, não GraphQL',
    description:
      'Para esse escopo, REST é suficiente e mais simples. GraphQL traria complexidade desnecessária neste momento.',
  },
  {
    title: 'Monorepo recomendado',
    description:
      'Frontend e backend no mesmo repositório. Facilita o CI/CD e o fluxo de trabalho do time de desenvolvimento.',
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-28 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#D96C45] text-xs font-semibold tracking-widest uppercase">Tecnologia</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Stack Técnica</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Escolhidas por três critérios: velocidade de desenvolvimento, custo operacional baixo e maturidade para um sistema jurídico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {layers.map((layer) => (
            <div
              key={layer.category}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6"
            >
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: `${layer.color}18`, color: layer.color, border: `1px solid ${layer.color}30` }}
              >
                {layer.category}
              </div>
              <div className="space-y-3">
                {layer.items.map((item) => (
                  <div key={item.tech} className="flex items-start justify-between gap-4">
                    <span className="text-white font-medium text-sm">{item.tech}</span>
                    <span className="text-gray-500 text-sm text-right leading-tight">{item.purpose}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural decisions */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Decisões de Arquitetura</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {decisions.map((d) => (
              <div
                key={d.title}
                className="bg-[#D96C45]/5 border border-[#D96C45]/15 rounded-xl p-5"
              >
                <h4 className="text-[#D96C45] font-semibold text-sm mb-2">{d.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
