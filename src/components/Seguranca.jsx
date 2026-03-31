const securityItems = [
  { title: 'Criptografia em Trânsito', description: 'Todo tráfego usa HTTPS com TLS 1.3. Sem exceções.' },
  { title: 'Criptografia em Repouso', description: 'Documentos no S3 com criptografia AES-256 ativada.' },
  { title: 'URLs com Expiração', description: 'Documentos sem link público permanente. Links gerados expiram em minutos.' },
  { title: 'MFA Obrigatório', description: 'Autenticação em dois fatores para todos os usuários da equipe.' },
  { title: 'Controle de Acesso', description: 'Cliente acessa somente o próprio caso. Advogado acessa os casos atribuídos. Admin acessa tudo.' },
  { title: 'Log de Auditoria', description: 'Registro de quem acessou qual documento, quando e de qual dispositivo.' },
];

const lgpdItems = [
  'Política de Privacidade clara e acessível na plataforma',
  'Consentimento explícito do usuário no cadastro (opt-in documentado)',
  'Direito do cliente de acessar, corrigir ou excluir seus dados',
  'Retenção de documentos jurídicos por no mínimo 5 anos',
  'Notificação obrigatória em caso de vazamento em até 72 horas',
];

const languages = [
  { lang: 'Português' },
  { lang: 'Inglês' },
  { lang: 'Espanhol' },
  { lang: 'Russo' },
];

export default function Seguranca() {
  return (
    <section id="seguranca" className="section-spacing">
      <div className="site-container">
        <div className="section-header">
          <span className="text-[#D96C45] text-xs font-semibold tracking-widest uppercase inline-block">Cuidados Críticos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Segurança e Conformidade</h2>
          <p>
            O sistema armazena passaportes, certidões e dados pessoais de estrangeiros. Uma falha tem consequências jurídicas e reputacionais graves.
          </p>
        </div>

        {/* Security table */}
        <div className="card !p-0 overflow-hidden">
          <div className="divide-y divide-white/[0.05]">
            {securityItems.map((item) => (
              <div key={item.title} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-12 px-5 sm:px-8 py-5 hover:bg-white/[0.02] transition-colors">
                <div className="text-white font-semibold text-[15px] sm:w-56 flex-shrink-0">{item.title}</div>
                <div className="card-text">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* LGPD — full width */}
        <div className="card" style={{ marginTop: '5rem' }}>
          <h3 className="text-white font-bold text-xl">LGPD</h3>
          <p className="card-text">
            A Lei Geral de Proteção de Dados se aplica integralmente ao WK System.
          </p>
          <ul className="space-y-5 mt-6">
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

        {/* Languages */}
        <div className="card" style={{ marginTop: '5rem' }}>
          <h3 className="text-white font-bold text-xl text-center">Suporte Multilíngue</h3>
          <p className="card-text text-center mx-auto mt-3">
            O público da WK é estrangeiro. O sistema funciona nos quatro idiomas desde o início, planejado na arquitetura.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {languages.map((l) => (
              <div key={l.lang} className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-6 text-center">
                <div className="text-white font-semibold text-base">{l.lang}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
