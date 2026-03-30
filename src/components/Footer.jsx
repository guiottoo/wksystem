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
    <footer className="py-12 border-t border-white/[0.06] bg-[#0f0f0f]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <AllocateLogo className="h-8 w-auto" />
            <p className="text-gray-600 text-xs">Documento Confidencial</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-7 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center md:text-left">
          <p className="text-gray-700 text-xs">2025 Allocate. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
