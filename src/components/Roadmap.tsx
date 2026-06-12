import { motion } from "framer-motion";
import { Rocket, MessageCircle, Landmark, Antenna, Globe } from "lucide-react";

const phases = [
  { icon: Rocket, title: "Fase 1", subtitle: "MVP Hackathon", desc: "Verificador web, base comunitária e dashboard.", status: "now" as const },
  { icon: MessageCircle, title: "Fase 2", subtitle: "WhatsApp Bot", desc: "Verificação direta via WhatsApp em qualquer telefone.", status: "next" as const },
  { icon: Landmark, title: "Fase 3", subtitle: "Integração Bancária", desc: "Alertas em tempo real com BAI, BFA, BIC, Atlântico.", status: "future" as const },
  { icon: Antenna, title: "Fase 4", subtitle: "Integração Operadoras", desc: "Unitel, Africell e Movicel bloqueando na origem.", status: "future" as const },
  { icon: Globe, title: "Fase 5", subtitle: "Cobertura Nacional", desc: "Infraestrutura Nacional de Confiança Digital.", status: "future" as const },
];

export function Roadmap() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Roadmap
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient">
            Do MVP à infraestrutura nacional.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:-translate-x-px" />
          <div className="space-y-8">
            {phases.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className={`relative grid sm:grid-cols-2 gap-4 sm:gap-12 items-center ${i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-16 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 border-primary/20">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "sm:justify-end" : ""}`}>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.title}</span>
                      {p.status === "now" && <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">Agora</span>}
                    </div>
                    <h3 className="text-xl font-bold">{p.subtitle}</h3>
                    <p className="mt-2 text-sm text-subtext">{p.desc}</p>
                  </div>
                </div>
                <div className="absolute left-0 sm:left-1/2 top-6 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
                  <div className={`relative h-12 w-12 rounded-2xl ${p.status === "now" ? "bg-gradient-to-br from-primary to-secondary" : "bg-card border border-white/10"} grid place-items-center`}>
                    {p.status === "now" && <div className="absolute inset-0 rounded-2xl bg-primary blur-xl opacity-50" />}
                    <p.icon className={`relative h-5 w-5 ${p.status === "now" ? "text-background" : "text-primary"}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}