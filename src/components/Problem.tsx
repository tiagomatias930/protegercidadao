import { motion } from "framer-motion";
import { MessageSquareWarning, PhoneOff, Link2Off, CreditCard, Briefcase } from "lucide-react";

const problems = [
  { icon: MessageSquareWarning, title: "SMS Fraudulento", desc: "Mensagens com prémios falsos, links maliciosos e pedidos urgentes de transferência." },
  { icon: PhoneOff, title: "Chamadas Fraudulentas", desc: "Falsos funcionários de bancos, operadoras e instituições governamentais." },
  { icon: Link2Off, title: "Links de Phishing", desc: "Sites clonados que roubam credenciais bancárias e dados pessoais." },
  { icon: CreditCard, title: "Golpes Multicaixa", desc: "Esquemas que exploram operações de levantamento e transferências Express." },
  { icon: Briefcase, title: "Falsas Ofertas de Emprego", desc: "Anúncios com pagamentos adiantados e taxas de inscrição fraudulentas." },
];

export function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-danger/10 text-danger border border-danger/20 mb-4">
            O Problema
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Angolanos perdem milhões todos os meses.
          </h2>
          <p className="mt-4 text-subtext">
            Os golpes digitais evoluem mais rápido que a capacidade de defesa individual.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/5 bg-card p-6 hover:border-danger/30 transition-colors"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-danger/0 to-danger/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-danger/10 border border-danger/20 grid place-items-center mb-4">
                  <p.icon className="h-5 w-5 text-danger" />
                </div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-subtext">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}