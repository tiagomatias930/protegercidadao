import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, Send } from "lucide-react";

export const Route = createFileRoute("/denuncias")({
  head: () => ({
    meta: [
      { title: "Centro de Denúncias — VERIFICA" },
      { name: "description", content: "Denuncie fraudes digitais e proteja a comunidade angolana." },
    ],
  }),
  component: Denuncias,
});

const TYPES = ["SMS Fraudulento", "Chamada Fraudulenta", "Link de Phishing", "Golpe Multicaixa", "Falsa Oferta de Emprego", "Outro"];

function Denuncias() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState(TYPES[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              Centro de Denúncias
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient">
              A sua denúncia protege milhares.
            </h1>
            <p className="mt-4 text-subtext">
              Cada denúncia alimenta a base nacional. Anónima, rápida e verificada pela comunidade.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass rounded-3xl p-12 text-center border-primary/30"
              >
                <div className="mx-auto h-20 w-20 rounded-2xl bg-primary/10 border border-primary/30 grid place-items-center animate-pulse-glow">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-gradient">Obrigado.</h2>
                <p className="mt-2 text-subtext">A comunidade ficou mais protegida.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 glass px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10"
                >
                  Enviar nova denúncia
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="glass rounded-3xl p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label className="text-xs text-subtext font-medium uppercase tracking-wider">Tipo de fraude</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {TYPES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setType(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${type === t ? "bg-primary text-background border-primary" : "border-white/10 text-subtext hover:border-primary/30"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-subtext font-medium uppercase tracking-wider">Número suspeito (opcional)</label>
                  <input
                    type="text"
                    placeholder="+244 9XX XXX XXX"
                    className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-3 text-sm font-mono focus:outline-none focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="text-xs text-subtext font-medium uppercase tracking-wider">Link suspeito (opcional)</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-3 text-sm focus:outline-none focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="text-xs text-subtext font-medium uppercase tracking-wider">Descrição</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Conte-nos o que aconteceu. Quanto mais detalhes, melhor protegemos os outros."
                    className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-3 text-sm focus:outline-none focus:border-primary/50 resize-none"
                  />
                </div>

                <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-subtext">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Denúncia anónima e encriptada
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-semibold flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" /> Enviar Denúncia
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}