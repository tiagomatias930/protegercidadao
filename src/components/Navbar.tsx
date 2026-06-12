import { Link } from "@tanstack/react-router";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Início" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/denuncias", label: "Denúncias" },
  ] as const;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
        <div className="glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary grid place-items-center">
                <img src="/logo.png" className="h-6 w-6 text-background" strokeWidth={2.5} />
              </div>
            </div>
            <span className="font-extrabold tracking-tight text-lg">
              VERIFI<span className="text-primary">CA</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm text-subtext hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                activeProps={{ className: "px-4 py-2 text-sm text-foreground rounded-lg bg-white/5" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-subtext">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Análise em Tempo Real
            </div>
            <Link
              to="/"
              hash="simulator"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90 transition-opacity"
            >
              Verificar Agora
            </Link>
          </div>
          <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-sm text-subtext rounded-lg hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}