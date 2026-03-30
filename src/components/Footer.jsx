import AllocateLogo from './AllocateLogo';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.07] bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <AllocateLogo className="h-8 w-auto" />
          <p className="text-gray-600 text-xs">Documento Confidencial · WK System</p>
        </div>

        <div className="flex items-center gap-6">
          {['Sistema', 'Módulos', 'Stack', 'Segurança', 'Custos'].map((item, i) => (
            <a
              key={item}
              href={`#${['sistema', 'modulos', 'stack', 'seguranca', 'custos'][i]}`}
              className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="text-gray-700 text-xs">© 2025 Allocate · Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
