const infra = [
  { service: 'Railway ou Render', purpose: 'Hospedagem backend + frontend', range: 'R$ 116 a R$ 290' },
  { service: 'PostgreSQL managed', purpose: 'Banco de dados principal', range: 'R$ 87 a R$ 145' },
  { service: 'AWS S3 / Supabase Storage', purpose: 'Armazenamento de documentos', range: 'R$ 29 a R$ 174' },
  { service: 'Supabase Auth + Realtime', purpose: 'Autenticação e chat em tempo real', range: 'R$ 0 a R$ 145' },
  { service: 'Cloudflare CDN', purpose: 'Performance e segurança', range: 'R$ 0 a R$ 116' },
  { service: 'Domínio (.com.br)', purpose: 'Endereço do sistema', range: '~R$ 12' },
];

const communication = [
  { service: 'Resend', purpose: 'Email transacional', model: 'Por volume de emails', range: 'R$ 0 a R$ 100' },
  { service: 'Twilio', purpose: 'SMS de notificação', model: '~R$ 0,35 por SMS', range: 'R$ 50 a R$ 300' },
  { service: 'Sentry', purpose: 'Monitoramento de erros', model: 'Gratuito até 5 mil erros/mês', range: 'R$ 0 a R$ 100' },
  { service: 'UptimeRobot', purpose: 'Alertas de disponibilidade', model: 'Gratuito no plano básico', range: 'R$ 0' },
];

export default function Custos() {
  return (
    <section id="custos" className="py-28 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16 text-center">
          <span className="text-[#D96C45] text-xs font-semibold tracking-widest uppercase">Operação</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-5">Custos Operacionais</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Custos mensais recorrentes para manter o sistema funcionando após o desenvolvimento. Independem de novas funcionalidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Infra table */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-white/[0.07]">
              <h3 className="text-white font-semibold text-lg">Infraestrutura e Hospedagem</h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">Onde o sistema roda e onde os dados ficam armazenados</p>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {infra.map((row) => (
                <div key={row.service} className="flex items-center justify-between px-8 py-5 hover:bg-white/[0.02] transition-colors gap-4">
                  <div className="min-w-0">
                    <div className="text-white text-base font-medium leading-snug">{row.service}</div>
                    <div className="text-gray-500 text-sm mt-0.5 leading-relaxed">{row.purpose}</div>
                  </div>
                  <span className="text-[#D96C45] text-base font-semibold whitespace-nowrap flex-shrink-0">{row.range}</span>
                </div>
              ))}
            </div>
            <div className="px-8 py-5 bg-[#D96C45]/5 border-t border-[#D96C45]/15">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold text-base">Total estimado</span>
                <span className="text-[#D96C45] font-bold text-base">R$ 244 a R$ 882/mês</span>
              </div>
            </div>
          </div>

          {/* Communication table */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-white/[0.07]">
              <h3 className="text-white font-semibold text-lg">Comunicação e Monitoramento</h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">Notificações para clientes e saúde do sistema</p>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {communication.map((row) => (
                <div key={row.service} className="flex items-center justify-between px-8 py-5 hover:bg-white/[0.02] transition-colors gap-4">
                  <div className="min-w-0">
                    <div className="text-white text-base font-medium leading-snug">{row.service}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{row.purpose}</div>
                    <div className="text-gray-600 text-sm">{row.model}</div>
                  </div>
                  <span className="text-[#D96C45] text-base font-semibold whitespace-nowrap flex-shrink-0">{row.range}</span>
                </div>
              ))}
            </div>
            <div className="px-8 py-5 bg-[#D96C45]/5 border-t border-[#D96C45]/15">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold text-base">Total estimado</span>
                <span className="text-[#D96C45] font-bold text-base">R$ 50 a R$ 500/mês</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-[#D96C45]/8 to-transparent border border-[#D96C45]/20 rounded-lg p-8 sm:p-10">
          <h3 className="text-white font-bold text-xl mb-8">Resumo Mensal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-gray-500 text-sm mb-2 uppercase tracking-wide">Infraestrutura</div>
              <div className="text-2xl font-bold text-white leading-tight">R$ 244 a R$ 882</div>
              <div className="text-gray-500 text-sm mt-1">por mês</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-2 uppercase tracking-wide">Comunicação</div>
              <div className="text-2xl font-bold text-white leading-tight">R$ 50 a R$ 500</div>
              <div className="text-gray-500 text-sm mt-1">por mês</div>
            </div>
            <div className="sm:border-l sm:border-white/10 sm:pl-8">
              <div className="text-gray-500 text-sm mb-2 uppercase tracking-wide">Total operacional</div>
              <div className="text-3xl font-bold text-[#D96C45] leading-tight">R$ 294 a R$ 1.382</div>
              <div className="text-gray-500 text-sm mt-1">por mês</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-8 leading-relaxed border-t border-white/5 pt-6">
            Estimativas baseadas no uso esperado para o porte atual da WK. O custo real varia conforme o volume de documentos, número de SMS e crescimento da base de clientes. Os valores tendem a cair no início e crescer conforme o sistema é mais utilizado.
          </p>
        </div>
      </div>
    </section>
  );
}
