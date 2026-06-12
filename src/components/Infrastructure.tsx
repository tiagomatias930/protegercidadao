import { Cpu, Database, Network } from "lucide-react";
import { motion } from "framer-motion";

export function Infrastructure() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass border-primary/30 p-8 sm:p-14">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                Visão de longo prazo
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient">
                Infraestrutura Nacional de Confiança Digital
              </h2>
              <p className="mt-6 text-lg text-subtext leading-relaxed">
                Hoje combatemos fraudes. <span className="text-foreground font-semibold">Amanhã construímos a infraestrutura nacional de confiança digital de Angola</span> — o sistema que bancos, operadoras, governo e cidadãos consultam antes de qualquer transação digital.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Cpu, label: "Modelos IA locais" },
                  { icon: Database, label: "Base nacional unificada" },
                  { icon: Network, label: "APIs para o ecossistema" },
                ].map((it) => (
                  <div key={it.label} className="rounded-xl border border-white/10 p-3 flex items-center gap-2">
                    <it.icon className="h-4 w-4 text-primary" />
                    <span className="text-xs">{it.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto w-64 animate-float"
              >
                <div className="rounded-[2.5rem] border-4 border-white/10 bg-card p-3 shadow-2xl">
                  <div className="rounded-[2rem] bg-background p-4 aspect-[9/19] flex flex-col">
                    <div className="flex justify-between text-[10px] text-subtext">
                      <span>9:41</span>
                      <span>VERIFICA</span>
                    </div>
                    <div className="mt-4 text-xs text-subtext">Verificação WhatsApp</div>
                    <div className="mt-2 rounded-lg bg-white/5 p-3 text-xs">
                      "Olá, sou do seu banco..."
                    </div>
                    <div className="mt-3 rounded-xl border border-danger/40 bg-danger/10 p-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-danger animate-pulse" />
                        <span className="text-[10px] font-bold text-danger">FRAUDE DETECTADA</span>
                      </div>
                      <div className="mt-2 text-xl font-extrabold text-danger">92%</div>
                      <div className="text-[10px] text-subtext mt-1">Padrão de engenharia social</div>
                    </div>
                    <div className="mt-auto pt-4 grid grid-cols-2 gap-2">
                      <div className="rounded-lg bg-primary text-background py-2 text-[10px] font-bold text-center">Bloquear</div>
                      <div className="rounded-lg border border-white/10 py-2 text-[10px] text-center">Denunciar</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}