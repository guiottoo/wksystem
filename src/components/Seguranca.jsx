const securityItems = [
  {
    title: 'Criptografia em Trânsito',
    description: 'Todo tráfego usa HTTPS com TLS 1.3. Sem exceções.',
    icon: '🔒',
  },
  {
    title: 'Criptografia em Repouso',
    description: 'Documentos no S3 com criptografia AES-256 ativada.',
    icon: '🗄️',
  },
  {
    title: 'URLs com Expiração',
    description: 'Documentos não ficam com link público permanente. Links gerados expiram em minutos.',
    icon: '⏱️',
  },
  {
    title: 'MFA Obrigatório',
    description: 'Autenticação em dois fatores para todos os usuários da equipe.',
    icon: '📱',
  },
  {
    title: 'Controle de Acesso',
    description: 'Cliente acessa somente o próprio caso. Advogado acessa somente os casos atribuídos. Admin acessa tudo.',
    icon: '👥',
  },
  {
    title: 'Log de Auditoria',
    description: 'Registro de quem acessou qual documento, quando e de qual dispositivo.',
    icon: '📋',
  },
  {
    title: 'Proteção contra Força Bruta',
    description: 'Bloqueio automático após tentativas repetidas de login incorreto.',
    icon: '🛡️',
  },
];

const lgpdItems = [
  'Política de Privacidade clara e acessível na plataforma',
  'Consentimento explícito do usuário no cadastro (opt-in documentado)',
  'Direito do cliente de acessar, corrigir ou excluir seus dados',
  'Retenção de documentos jurídicos por no mínimo 5 anos',
  'Notificação obrigatória em caso de vazamento em até 72 horas',
];

const reliabilityItems = [
  { label: 'Uptime mínimo', value: '99,5%', sub: 'máx. 3,6h fora por mês' },
  { label: 'Backup do banco', value: 'Diário', sub: 'retenção de 30 dias' },
  { label: 'Backup de documentos', value: 'S3', sub: 'versionamento ativo' },
  { label: 'Recuperação', value: '< 4h', sub: 'para falhas críticas' },
];

const languages = [
  { lang: 'Português', flag: '🇧🇷', desc: 'Clientes brasileiros e equipe interna' },
  { lang: 'Inglês', flag: '🇺🇸', desc: 'Clientes de países de língua inglesa e uso internacional' },
  { lang: 'Espanhol', flag: '🇪🇸', desc: 'Clientes da América Latina' },
  { lang: 'Russo', flag: '🇷🇺', desc: 'Clientes de países de língua russa' },
];

export default function Seguranca() {
  return (
    <section id="seguranca" className="py-28 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#D96C45] text-xs font-semibold tracking-widest uppercase">Cuidados Críticos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Segurança & Conformidade</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            O sistema armazena passaportes, certidões e dados pessoais de estrangeiros. Uma falha tem consequências jurídicas e reputacionais graves.
          </p>
        </div>

        {/* Security grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {securityItems.map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 hover:border-[#D96C45]/20 transition-colors"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* LGPD */}
          <div className="lg:col-span-2 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7">
            <h3 className="text-white font-bold text-lg mb-2">LGPD — Lei Geral de Proteção de Dados</h3>
            <p className="text-gray-400 text-sm mb-5">
              A LGPD se aplica integralmente ao WK System. Descumprir pode gerar multas de até{' '}
              <span className="text-[#D96C45] font-semibold">2% do faturamento ou R$ 50 milhões</span>.
            </p>
            <ul className="space-y-3">
              {lgpdItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D96C45]/15 border border-[#D96C45]/30 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[#D96C45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Reliability */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7">
            <h3 className="text-white font-bold text-lg mb-5">Confiabilidade</h3>
            <div className="space-y-4">
              {reliabilityItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="text-gray-500 text-xs mb-1">{item.label}</div>
                  <div className="text-[#D96C45] font-bold text-lg">{item.value}</div>
                  <div className="text-gray-500 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7">
          <h3 className="text-white font-bold text-lg mb-2">Suporte Multilíngue</h3>
          <p className="text-gray-400 text-sm mb-6">
            O público da WK é estrangeiro. O sistema precisa funcionar nos quatro idiomas desde o início — planejado na arquitetura, não adicionado depois.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {languages.map((l) => (
              <div key={l.lang} className="flex items-center gap-3 bg-white/[0.03] rounded-xl p-4">
                <span className="text-3xl">{l.flag}</span>
                <div>
                  <div className="text-white font-semibold text-sm">{l.lang}</div>
                  <div className="text-gray-500 text-xs leading-tight mt-0.5">{l.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
