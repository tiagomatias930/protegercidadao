import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary grid place-items-center">
              <img src="/logo.png" className="h-6 w-6 text-background" strokeWidth={2.5} />
            </div>
            <span className="font-extrabold tracking-tight text-lg">
              VERIFI<span className="text-primary">CA</span>
            </span>
          </div>
          <p className="text-sm text-subtext max-w-md">
            Infraestrutura Nacional de Confiança Digital de Angola. Construindo um país onde cada cidadão pode confiar antes de clicar.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Produto</h4>
          <ul className="space-y-2 text-sm text-subtext">
            <li>Verificador IA</li>
            <li>Dashboard</li>
            <li>Denúncias</li>
            <li>API (em breve)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Parceiros</h4>
          <ul className="space-y-2 text-sm text-subtext">
            <li>Bancos</li>
            <li>Operadoras</li>
            <li>Governo</li>
            <li>Imprensa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-subtext">
          <span>© 2026 VERIFICA · Luanda, Angola</span>
          <span className="flex items-center gap-1.5">
            Desenvolvido por{" "}
            <span className="font-semibold text-foreground/80 tracking-wide">
              Alpha Hydrae
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}