import { motion } from "framer-motion";
import { Sparkles, Play, ShieldCheck, Activity, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

const stats = [
  { value: "12.847", label: "Verificações" },
  { value: "3.921", label: "Fraudes detectadas" },
  { value: "18", label: "Províncias monitoradas" },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* background effects */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] -z-10" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-subtext">Powered by AI · Inteligência Comunitária</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl">
            <span className="text-gradient">Protegendo Angola contra </span>
            <span className="text-gradient-primary">fraudes digitais.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-subtext">
            Verifique mensagens, números, links e denúncias em segundos usando
            Inteligência Artificial e inteligência comunitária.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              hash="simulator"
              className="group relative px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-semibold animate-pulse-glow"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Verificar Agora
              </span>
            </Link>
            <Link
              to="/"
              hash="how"
              className="glass px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 justify-center"
            >
              <Play className="h-4 w-4 text-primary" />
              Ver Demonstração
            </Link>
          </div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-12 w-full max-w-3xl"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-4xl font-extrabold text-gradient-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-subtext">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mt-20"
        >
          <div className="absolute -inset-4 bg-primary/30 blur-3xl rounded-3xl -z-10" />
          <div className="glass rounded-2xl overflow-hidden border border-primary/20">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/20">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-danger/60" />
                <div className="h-3 w-3 rounded-full bg-warning/60" />
                <div className="h-3 w-3 rounded-full bg-primary/60" />
              </div>
              <div className="ml-4 text-xs text-subtext font-mono">verifica.ao/dashboard</div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 p-6 bg-background/50">
              <MockCard icon={Activity} label="Verificações hoje" value="2.341" trend="+18%" />
              <MockCard icon={ShieldCheck} label="Fraudes bloqueadas" value="487" trend="+24%" />
              <MockCard icon={MapPin} label="Províncias ativas" value="18 / 18" trend="100%" />
              <div className="md:col-span-3 rounded-xl border border-white/5 bg-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold">Atividade em tempo real</div>
                  <div className="text-xs text-primary">● Live</div>
                </div>
                <div className="flex items-end gap-1 h-24">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary"
                      style={{ height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 40}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MockCard({ icon: Icon, label, value, trend }: any) {
  return (
    <div className="rounded-xl border border-white/5 bg-card p-5">
      <div className="flex items-center justify-between">
        <Icon className="h-5 w-5 text-primary" />
        <span className="text-xs text-primary font-medium">{trend}</span>
      </div>
      <div className="mt-3 text-2xl font-bold">{value}</div>
      <div className="text-xs text-subtext">{label}</div>
    </div>
  );
}