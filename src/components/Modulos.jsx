const services = [
  'Naturalização Brasileira',
  'Conversão/Emissão de CNH e CPF',
  'Visto de Investidor Imobiliário',
  'Visto de Estudante',
  'Visto Nômade Digital',
  'Visto de Aposentadoria',
  'Visto de Turista',
  'Autorização de Residência por Reunião Familiar',
  'Autorização de Residência por Acordos e Tratados',
];

const clientModules = [
  {
    title: 'Acesso com MFA',
    description: 'Login seguro com autenticação em dois fatores. O cliente acessa apenas os próprios documentos e o status do seu caso.',
  },
  {
    title: 'Envio de Documentos',
    description: 'Checklist claro do que precisa ser enviado. Upload direto na plataforma, com rastreamento de status de cada documento.',
  },
  {
    title: 'Acompanhamento do Processo',
    description: 'Timeline com o status atual do processo, atualizada em tempo real. Sem precisar ligar ou mandar mensagem.',
  },
  {
    title: 'Notificações por Email',
    description: 'Toda atualização relevante dispara um email automático. Menos dependência de WhatsApp, mais profissionalismo no atendimento.',
  },
];

const teamModules = [
  {
    title: 'Gestão de Casos',
    description: 'Criação e gerenciamento de cada processo migratório. Definição de etapas, atribuição do advogado responsável e controle de status.',
  },
  {
    title: 'Aprovação de Documentos',
    description: 'A equipe aprova, rejeita ou solicita nova versão de cada documento enviado pelo cliente. Tudo com histórico registrado.',
  },
  {
    title: 'Dashboard Operacional',
    description: 'Visão consolidada de todos os casos ativos, documentos pendentes e leads qualificados. Dados para decisões com mais segurança.',
  },
];

function CheckIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D96C45]/15 border border-[#D96C45]/30 flex items-center justify-center">
      <svg className="w-3 h-3 text-[#D96C45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Modulos() {
  return (
    <section id="modulos" className="section-spacing">
      <div className="site-container">
        <div className="section-header">
          <span className="inline-block text-[#D96C45] text-xs font-semibold tracking-widest uppercase px-2 py-2 border border-[#D96C45]/30 rounded-md bg-[#D96C45]/5">MVP</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Módulos do Sistema</h2>
          <p>Escopo mínimo para entrar em produção.</p>
        </div>

        <div className="flex flex-col gap-12">

          {/* Leads */}
          <div className="card !p-0 overflow-hidden">
            <div className="px-6 sm:px-10 py-5 bg-[#D96C45] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-white font-bold text-base tracking-wide">Para leads</h3>
              <span className="text-white/70 text-sm font-mono">Quem ainda não é cliente da WK</span>
            </div>
            <div className="px-5 sm:px-10 py-8">
              <p className="card-text mb-8">
                O lead acessa a plataforma, escolhe o serviço de interesse e preenche um formulário de elegibilidade. A WK avalia manualmente e retorna com a resposta. Se aprovado, o lead é convertido em cliente e o processo tem início.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="card-text">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Para o cliente */}
          <div className="card !p-0 overflow-hidden">
            <div className="px-6 sm:px-10 py-5 bg-[#D96C45] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-white font-bold text-base tracking-wide">Para o cliente</h3>
              <span className="text-white/70 text-sm font-mono">O que o cliente vê e faz na plataforma</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
              {clientModules.map((mod) => (
                <div key={mod.title} className="px-5 sm:px-8 py-6 sm:py-8">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckIcon />
                    <span className="text-white font-semibold text-[15px]">{mod.title}</span>
                  </div>
                  <p className="card-text">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Para a equipe */}
          <div className="card !p-0 overflow-hidden">
            <div className="px-6 sm:px-10 py-5 bg-[#D96C45] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-white font-bold text-base tracking-wide">Para a equipe</h3>
              <span className="text-white/70 text-sm font-mono">O que a WK gerencia internamente</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
              {teamModules.map((mod) => (
                <div key={mod.title} className="px-5 sm:px-8 py-6 sm:py-8">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckIcon />
                    <span className="text-white font-semibold text-[15px]">{mod.title}</span>
                  </div>
                  <p className="card-text">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
