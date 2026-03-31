import AllocateLogo from './AllocateLogo';

const links = [
  { label: 'Sistema', href: '#sistema' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Stack', href: '#stack' },
  { label: 'Custos', href: '#custos' },
  { label: 'Investimento', href: '#investimento' },
];

export default function Footer() {
  return (
    <footer className="py-14 border-t border-white/[0.06] bg-[#0f0f0f]">
      <div className="site-container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <AllocateLogo className="h-7" />
            <p className="text-gray-600 text-sm">Documento Confidencial</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center md:text-left">
          <p className="text-gray-700 text-sm">2026 Allocate. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
