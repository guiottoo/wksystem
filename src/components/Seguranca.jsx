const securityItems = [
  {
    title: 'Criptografia em Trânsito',
    description: 'Todo tráfego usa HTTPS com TLS 1.3. Sem exceções.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Criptografia em Repouso',
    description: 'Documentos no S3 com criptografia AES-256 ativada.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: 'URLs com Expiração',
    description: 'Documentos sem link público permanente. Links gerados expiram em minutos.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'MFA Obrigatório',
    description: 'Autenticação em dois fatores para todos os usuários da equipe.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Controle de Acesso',
    description: 'Cliente acessa somente o próprio caso. Advogado acessa os casos atribuídos. Admin acessa tudo.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Log de Auditoria',
    description: 'Registro de quem acessou qual documento, quando e de qual dispositivo.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
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
  { label: 'Recuperação', value: 'Menos de 4h', sub: 'para falhas críticas' },
];

const languages = [
  { lang: 'Português', desc: 'Clientes brasileiros e equipe interna' },
  { lang: 'Inglês', desc: 'Clientes internacionais' },
  { lang: 'Espanhol', desc: 'América Latina' },
  { lang: 'Russo', desc: 'Países de língua russa' },
];

export default function Seguranca() {
  return (
    <section id="seguranca" className="section-spacing">
      <div className="site-container">
        <div className="section-header">
          <span className="text-[#D96C45] text-xs font-semibold tracking-widest uppercase block mb-3">Cuidados Críticos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Segurança e Conformidade</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-[1.8]">
            O sistema armazena passaportes, certidões e dados pessoais de estrangeiros. Uma falha tem consequências jurídicas e reputacionais graves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityItems.map((item) => (
            <div key={item.title} className="card">
              <div className="w-12 h-12 rounded-lg bg-[#D96C45]/10 border border-[#D96C45]/20 flex items-center justify-center text-[#D96C45] mb-6">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{item.title}</h3>
              <p className="card-text">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* LGPD */}
          <div className="lg:col-span-2 card">
            <h3 className="text-white font-bold text-xl mb-4">LGPD</h3>
            <p className="card-text mb-6">
              A Lei Geral de Proteção de Dados se aplica integralmente ao WK System. Descumprir pode gerar multas de até{' '}
              <span className="text-[#D96C45] font-semibold">2% do faturamento ou R$ 50 milhões</span>.
            </p>
            <ul className="space-y-5">
              {lgpdItems.map((item) => (
                <li key={item} className="flex items-start gap-4 card-text">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D96C45]/15 border border-[#D96C45]/30 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[#D96C45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Reliability */}
          <div className="card">
            <h3 className="text-white font-bold text-xl mb-8">Confiabilidade</h3>
            <div className="space-y-7">
              {reliabilityItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-7 last:border-0 last:pb-0">
                  <div className="text-gray-500 text-sm mb-2">{item.label}</div>
                  <div className="text-[#D96C45] font-bold text-2xl leading-tight">{item.value}</div>
                  <div className="text-gray-600 text-sm mt-2">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="card">
          <h3 className="text-white font-bold text-xl mb-3 text-center">Suporte Multilíngue</h3>
          <p className="card-text mb-8 text-center max-w-2xl mx-auto">
            O público da WK é estrangeiro. O sistema funciona nos quatro idiomas desde o início, planejado na arquitetura.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((l) => (
              <div key={l.lang} className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.05] rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-[#D96C45]/10 border border-[#D96C45]/20 flex items-center justify-center text-[#D96C45] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-base">{l.lang}</div>
                  <div className="text-gray-500 text-sm leading-relaxed mt-1">{l.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
