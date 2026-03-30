const infra = [
  { service: 'Railway ou Render', purpose: 'Hospedagem backend + frontend', range: 'R$ 116 – R$ 290' },
  { service: 'PostgreSQL managed', purpose: 'Banco de dados principal', range: 'R$ 87 – R$ 145' },
  { service: 'AWS S3 / Supabase Storage', purpose: 'Armazenamento de documentos', range: 'R$ 29 – R$ 174' },
  { service: 'Supabase Auth + Realtime', purpose: 'Autenticação e chat', range: 'R$ 0 – R$ 145' },
  { service: 'Cloudflare CDN', purpose: 'Performance e segurança', range: 'R$ 0 – R$ 116' },
  { service: 'Domínio (.com.br)', purpose: 'Endereço do sistema', range: '~R$ 12' },
];

const communication = [
  { service: 'Resend', purpose: 'Email transacional', model: 'Por volume de emails', range: 'R$ 0 – R$ 100' },
  { service: 'Twilio', purpose: 'SMS de notificação', model: '~R$ 0,35 por SMS', range: 'R$ 50 – R$ 300' },
  { service: 'Sentry', purpose: 'Monitoramento de erros', model: 'Gratuito até 5 mil erros/mês', range: 'R$ 0 – R$ 100' },
  { service: 'UptimeRobot', purpose: 'Alertas de disponibilidade', model: 'Gratuito no plano básico', range: 'R$ 0' },
];

export default function Custos() {
  return (
    <section id="custos" className="py-28 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#D96C45] text-xs font-semibold tracking-widest uppercase">Operação</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Custos Operacionais</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Custos mensais recorrentes para manter o sistema funcionando após o desenvolvimento. Independem de novas funcionalidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Infra table */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/[0.07]">
              <h3 className="text-white font-semibold">Infraestrutura & Hospedagem</h3>
              <p className="text-gray-500 text-xs mt-1">Onde o sistema roda e onde os dados ficam armazenados</p>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {infra.map((row) => (
                <div key={row.service} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
                  <div>
                    <div className="text-white text-sm font-medium">{row.service}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{row.purpose}</div>
                  </div>
                  <span className="text-[#D96C45] text-sm font-semibold whitespace-nowrap ml-4">{row.range}</span>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-[#D96C45]/5 border-t border-[#D96C45]/15">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Total estimado</span>
                <span className="text-[#D96C45] font-bold">R$ 244 – R$ 882/mês</span>
              </div>
            </div>
          </div>

          {/* Communication table */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/[0.07]">
              <h3 className="text-white font-semibold">Comunicação & Monitoramento</h3>
              <p className="text-gray-500 text-xs mt-1">Notificações para clientes e saúde do sistema</p>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {communication.map((row) => (
                <div key={row.service} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
                  <div>
                    <div className="text-white text-sm font-medium">{row.service}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{row.purpose}</div>
                    <div className="text-gray-600 text-xs">{row.model}</div>
                  </div>
                  <span className="text-[#D96C45] text-sm font-semibold whitespace-nowrap ml-4">{row.range}</span>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-[#D96C45]/5 border-t border-[#D96C45]/15">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Total estimado</span>
                <span className="text-[#D96C45] font-bold">R$ 50 – R$ 500/mês</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-[#D96C45]/10 to-transparent border border-[#D96C45]/20 rounded-2xl p-7">
          <h3 className="text-white font-bold text-lg mb-6">Resumo Mensal</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-gray-400 text-sm mb-1">Infraestrutura</div>
              <div className="text-2xl font-bold text-white">R$ 244 – R$ 882</div>
              <div className="text-gray-500 text-xs">por mês</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Comunicação & Monitoramento</div>
              <div className="text-2xl font-bold text-white">R$ 50 – R$ 500</div>
              <div className="text-gray-500 text-xs">por mês</div>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-6">
              <div className="text-gray-400 text-sm mb-1">Total operacional</div>
              <div className="text-3xl font-bold text-[#D96C45]">R$ 294 – R$ 1.382</div>
              <div className="text-gray-500 text-xs">por mês · R$ 3.528 – R$ 16.584/ano</div>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-6 leading-relaxed">
            Estimativas baseadas no uso esperado para o porte atual da WK. O custo real varia conforme o volume de documentos, número de SMS e crescimento da base de clientes. Os valores tendem a cair no início e crescer conforme o sistema é mais utilizado.
          </p>
        </div>
      </div>
    </section>
  );
}
