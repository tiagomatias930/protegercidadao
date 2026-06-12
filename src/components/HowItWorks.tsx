import { motion } from "framer-motion";
import { MessageCircle, Brain, Users, Gauge } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Envie a mensagem ou número", desc: "Cole o conteúdo suspeito na nossa interface ou no nosso bot." },
  { icon: Brain, title: "IA analisa padrões suspeitos", desc: "Modelo treinado em milhares de fraudes angolanas e africanas." },
  { icon: Users, title: "Consulta à base comunitária", desc: "Cruzamos com denúncias verificadas de outros cidadãos." },
  { icon: Gauge, title: "Resultado com score de risco", desc: "Resposta instantânea, transparente, com justificações claras." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Como funciona
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient">
            Quatro passos. Segundos para decidir.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
                    <div className="relative h-24 w-24 rounded-2xl glass border-primary/30 grid place-items-center">
                      <s.icon className="h-8 w-8 text-primary" />
                      <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gradient-to-br from-primary to-secondary text-background text-xs font-bold grid place-items-center">
                        {i + 1}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-subtext max-w-xs">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}