import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, ShieldCheck, Loader2, Phone, MessageSquare, AlertTriangle, CheckCircle2 } from "lucide-react";

type Verdict = "fraud" | "safe" | "warning";
type Result = {
  verdict: Verdict;
  score: number;
  title: string;
  reasons: string[];
  category?: string;
  reports?: number;
};

const FRAUD_KEYWORDS = ["parabéns","ganhou","ganhaste","clique","prémio","premio","kz","urgente","código","pin","transferência","multicaixa","100.000","500.000","milhões"];

function analyzeMessage(text: string): Result {
  const lower = text.toLowerCase();
  const hits = FRAUD_KEYWORDS.filter((k) => lower.includes(k));
  const score = Math.min(98, hits.length * 18 + (lower.includes("http") ? 25 : 0) + 20);
  if (score >= 70) {
    return {
      verdict: "fraud",
      score,
      title: "FRAUDE DETECTADA",
      reasons: [
        "Linguagem urgente e apelativa",
        "Oferta financeira suspeita",
        "Padrão conhecido de phishing",
        lower.includes("http") ? "Link encurtado / domínio não verificado" : "Estrutura típica de SMS fraudulento",
      ],
      category: "Phishing / SMS fraudulento",
    };
  }
  if (score >= 40) {
    return { verdict: "warning", score, title: "POTENCIALMENTE SUSPEITO", reasons: ["Alguns padrões de risco identificados", "Recomendamos cautela"] };
  }
  return { verdict: "safe", score: Math.max(5, 25 - score), title: "MENSAGEM SEGURA", reasons: ["Nenhum padrão de fraude detectado", "Sem correspondência em base comunitária"] };
}

function analyzeNumber(num: string): Result {
  const digits = num.replace(/\D/g, "");
  let score = 0;
  for (const c of digits) score = (score * 31 + c.charCodeAt(0)) % 100;
  score = (score + 35) % 100;
  if (score >= 65) {
    return {
      verdict: "fraud",
      score,
      title: "Risco Elevado",
      reasons: ["Número associado a múltiplas denúncias", "Padrão de chamadas em massa", "Origem não verificada"],
      category: "Fraude Bancária",
      reports: 38,
    };
  }
  if (score >= 35) {
    return { verdict: "warning", score, title: "Risco Moderado", reasons: ["Poucas denúncias registadas", "Origem desconhecida"], reports: 4 };
  }
  return { verdict: "safe", score, title: "Sem registos suspeitos", reasons: ["Nenhuma denúncia ativa"], reports: 0 };
}

export function Simulator() {
  const [tab, setTab] = useState<"msg" | "num">("msg");
  const [message, setMessage] = useState("Parabéns! Ganhou 500.000 Kz. Clique aqui: http://multicaixa-premio.com");
  const [number, setNumber] = useState("+244 923 000 000");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleAnalyze = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(tab === "msg" ? analyzeMessage(message) : analyzeNumber(number));
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="simulator" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Demonstração ao vivo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient">
            Experimente agora. Resultado em segundos.
          </h2>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8 border-primary/20">
          <div className="flex gap-2 mb-6 p-1 bg-black/30 rounded-xl w-fit">
            <button
              onClick={() => { setTab("msg"); setResult(null); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "msg" ? "bg-primary text-background" : "text-subtext hover:text-foreground"}`}
            >
              <MessageSquare className="h-4 w-4" /> Mensagem
            </button>
            <button
              onClick={() => { setTab("num"); setResult(null); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "num" ? "bg-primary text-background" : "text-subtext hover:text-foreground"}`}
            >
              <Phone className="h-4 w-4" /> Número
            </button>
          </div>

          {tab === "msg" ? (
            <div>
              <label className="text-xs text-subtext font-medium uppercase tracking-wider">Mensagem para análise</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-4 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Cole aqui a mensagem suspeita..."
              />
            </div>
          ) : (
            <div>
              <label className="text-xs text-subtext font-medium uppercase tracking-wider">Número de telefone</label>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-4 text-sm font-mono focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="+244 9XX XXX XXX"
              />
            </div>
          )}

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-4 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Analisando...</>) : (<>Analisar com IA</>)}
          </button>

          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6"
              >
                <ResultPanel result={result} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ResultPanel({ result }: { result: Result }) {
  const styles: Record<Verdict, { Icon: any; text: string; border: string; bg: string; bar: string; iconBg: string }> = {
    fraud:   { Icon: ShieldAlert,   text: "text-danger",  border: "border-danger/40",  bg: "bg-danger/10",  bar: "bg-danger",  iconBg: "bg-danger/20 border-danger/30" },
    warning: { Icon: AlertTriangle, text: "text-warning", border: "border-warning/40", bg: "bg-warning/10", bar: "bg-warning", iconBg: "bg-warning/20 border-warning/30" },
    safe:    { Icon: ShieldCheck,   text: "text-primary", border: "border-primary/40", bg: "bg-primary/10", bar: "bg-primary", iconBg: "bg-primary/20 border-primary/30" },
  };
  const s = styles[result.verdict];

  return (
    <div className={`rounded-2xl border-2 ${s.border} ${s.bg} p-6`}>
      <div className="flex items-start gap-4">
        <div className={`h-14 w-14 rounded-xl border ${s.iconBg} grid place-items-center shrink-0`}>
          <s.Icon className={`h-7 w-7 ${s.text}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className={`text-xl sm:text-2xl font-extrabold ${s.text}`}>{result.title}</h3>
            <div className="text-right">
              <div className={`text-3xl font-extrabold ${s.text}`}>{result.score}%</div>
              <div className="text-xs text-subtext">Score de risco</div>
            </div>
          </div>

          <div className="mt-3 h-2 bg-black/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${result.score}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`h-full ${s.bar} rounded-full`}
            />
          </div>

          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-subtext mb-2">Motivos</div>
              <ul className="space-y-1.5">
                {result.reasons.map((r) => (
                  <li key={r} className="flex gap-2 text-sm">
                    <CheckCircle2 className={`h-4 w-4 ${s.text} shrink-0 mt-0.5`} /> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              {result.category && (
                <div className="glass rounded-xl p-3">
                  <div className="text-xs text-subtext">Categoria</div>
                  <div className="font-semibold mt-0.5">{result.category}</div>
                </div>
              )}
              {typeof result.reports === "number" && (
                <div className="glass rounded-xl p-3">
                  <div className="text-xs text-subtext">Denúncias registadas</div>
                  <div className="font-semibold mt-0.5">{result.reports} {result.reports === 1 ? "denúncia" : "denúncias"}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}