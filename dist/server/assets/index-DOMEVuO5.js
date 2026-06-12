import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-DxDfuU71.js";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Sparkles, ShieldCheck, Play, Activity, MapPin, MessageSquareWarning, PhoneOff, Link2Off, CreditCard, Briefcase, MessageCircle, Brain, Users, Gauge, MessageSquare, Phone, Loader2, AlertTriangle, ShieldAlert, CheckCircle2, Building2, Signal, Map, Rocket, Landmark, Antenna, Globe, Cpu, Database, Network } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
const stats = [
  { value: "12.847", label: "Verificações" },
  { value: "3.921", label: "Fraudes detectadas" },
  { value: "18", label: "Províncias monitoradas" }
];
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: { background: "var(--gradient-hero)" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] -z-10" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "flex flex-col items-center text-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-subtext", children: "Powered by AI · Inteligência Comunitária" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Protegendo Angola contra " }),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-primary", children: "fraudes digitais." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base sm:text-lg text-subtext", children: "Verifique mensagens, números, links e denúncias em segundos usando Inteligência Artificial e inteligência comunitária." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/",
                  hash: "simulator",
                  className: "group relative px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-semibold animate-pulse-glow",
                  children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }),
                    "Verificar Agora"
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/",
                  hash: "how",
                  className: "glass px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 justify-center",
                  children: [
                    /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 text-primary" }),
                    "Ver Demonstração"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.6 },
                className: "mt-16 grid grid-cols-3 gap-4 sm:gap-12 w-full max-w-3xl",
                children: stats.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-4xl font-extrabold text-gradient-primary", children: s.value }),
                  /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs sm:text-sm text-subtext", children: s.label })
                ] }, s.label))
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5, duration: 0.8 },
          className: "relative mt-20",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-primary/30 blur-3xl rounded-3xl -z-10" }),
            /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl overflow-hidden border border-primary/20", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/20", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-danger/60" }),
                  /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-warning/60" }),
                  /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-primary/60" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "ml-4 text-xs text-subtext font-mono", children: "verifica.ao/dashboard" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 p-6 bg-background/50", children: [
                /* @__PURE__ */ jsx(MockCard, { icon: Activity, label: "Verificações hoje", value: "2.341", trend: "+18%" }),
                /* @__PURE__ */ jsx(MockCard, { icon: ShieldCheck, label: "Fraudes bloqueadas", value: "487", trend: "+24%" }),
                /* @__PURE__ */ jsx(MockCard, { icon: MapPin, label: "Províncias ativas", value: "18 / 18", trend: "100%" }),
                /* @__PURE__ */ jsxs("div", { className: "md:col-span-3 rounded-xl border border-white/5 bg-card p-5", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: "Atividade em tempo real" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-primary", children: "● Live" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-end gap-1 h-24", children: Array.from({ length: 32 }).map((_, i) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary",
                      style: { height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 40}%` }
                    },
                    i
                  )) })
                ] })
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function MockCard({ icon: Icon, label, value, trend }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-white/5 bg-card p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-primary font-medium", children: trend })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-2xl font-bold", children: value }),
    /* @__PURE__ */ jsx("div", { className: "text-xs text-subtext", children: label })
  ] });
}
const problems = [
  { icon: MessageSquareWarning, title: "SMS Fraudulento", desc: "Mensagens com prémios falsos, links maliciosos e pedidos urgentes de transferência." },
  { icon: PhoneOff, title: "Chamadas Fraudulentas", desc: "Falsos funcionários de bancos, operadoras e instituições governamentais." },
  { icon: Link2Off, title: "Links de Phishing", desc: "Sites clonados que roubam credenciais bancárias e dados pessoais." },
  { icon: CreditCard, title: "Golpes Multicaixa", desc: "Esquemas que exploram operações de levantamento e transferências Express." },
  { icon: Briefcase, title: "Falsas Ofertas de Emprego", desc: "Anúncios com pagamentos adiantados e taxas de inscrição fraudulentas." }
];
function Problem() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-danger/10 text-danger border border-danger/20 mb-4", children: "O Problema" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight", children: "Angolanos perdem milhões todos os meses." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-subtext", children: "Os golpes digitais evoluem mais rápido que a capacidade de defesa individual." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: problems.map((p, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { delay: i * 0.05, duration: 0.4 },
        whileHover: { y: -4 },
        className: "group relative rounded-2xl border border-white/5 bg-card p-6 hover:border-danger/30 transition-colors",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-danger/0 to-danger/5 opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl bg-danger/10 border border-danger/20 grid place-items-center mb-4", children: /* @__PURE__ */ jsx(p.icon, { className: "h-5 w-5 text-danger" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-subtext", children: p.desc })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const steps = [
  { icon: MessageCircle, title: "Envie a mensagem ou número", desc: "Cole o conteúdo suspeito na nossa interface ou no nosso bot." },
  { icon: Brain, title: "IA analisa padrões suspeitos", desc: "Modelo treinado em milhares de fraudes angolanas e africanas." },
  { icon: Users, title: "Consulta à base comunitária", desc: "Cruzamos com denúncias verificadas de outros cidadãos." },
  { icon: Gauge, title: "Resultado com score de risco", desc: "Resposta instantânea, transparente, com justificações claras." }
];
function HowItWorks() {
  return /* @__PURE__ */ jsx("section", { id: "how", className: "relative py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4", children: "Como funciona" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient", children: "Quatro passos. Segundos para decidir." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { delay: i * 0.1, duration: 0.5 },
          className: "relative",
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/30 blur-xl rounded-full" }),
              /* @__PURE__ */ jsxs("div", { className: "relative h-24 w-24 rounded-2xl glass border-primary/30 grid place-items-center", children: [
                /* @__PURE__ */ jsx(s.icon, { className: "h-8 w-8 text-primary" }),
                /* @__PURE__ */ jsx("span", { className: "absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gradient-to-br from-primary to-secondary text-background text-xs font-bold grid place-items-center", children: i + 1 })
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-5 font-semibold", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-subtext max-w-xs", children: s.desc })
          ] })
        },
        s.title
      )) })
    ] })
  ] }) });
}
const FRAUD_KEYWORDS = ["parabéns", "ganhou", "ganhaste", "clique", "prémio", "premio", "kz", "urgente", "código", "pin", "transferência", "multicaixa", "100.000", "500.000", "milhões"];
function analyzeMessage(text) {
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
        lower.includes("http") ? "Link encurtado / domínio não verificado" : "Estrutura típica de SMS fraudulento"
      ],
      category: "Phishing / SMS fraudulento"
    };
  }
  if (score >= 40) {
    return { verdict: "warning", score, title: "POTENCIALMENTE SUSPEITO", reasons: ["Alguns padrões de risco identificados", "Recomendamos cautela"] };
  }
  return { verdict: "safe", score: Math.max(5, 25 - score), title: "MENSAGEM SEGURA", reasons: ["Nenhum padrão de fraude detectado", "Sem correspondência em base comunitária"] };
}
function analyzeNumber(num) {
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
      reports: 38
    };
  }
  if (score >= 35) {
    return { verdict: "warning", score, title: "Risco Moderado", reasons: ["Poucas denúncias registadas", "Origem desconhecida"], reports: 4 };
  }
  return { verdict: "safe", score, title: "Sem registos suspeitos", reasons: ["Nenhuma denúncia ativa"], reports: 0 };
}
function Simulator() {
  const [tab, setTab] = useState("msg");
  const [message, setMessage] = useState("Parabéns! Ganhou 500.000 Kz. Clique aqui: http://multicaixa-premio.com");
  const [number, setNumber] = useState("+244 923 000 000");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const handleAnalyze = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(tab === "msg" ? analyzeMessage(message) : analyzeNumber(number));
      setLoading(false);
    }, 1200);
  };
  return /* @__PURE__ */ jsx("section", { id: "simulator", className: "relative py-24 scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4", children: "Demonstração ao vivo" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient", children: "Experimente agora. Resultado em segundos." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-6 sm:p-8 border-primary/20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-6 p-1 bg-black/30 rounded-xl w-fit", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setTab("msg");
              setResult(null);
            },
            className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "msg" ? "bg-primary text-background" : "text-subtext hover:text-foreground"}`,
            children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }),
              " Mensagem"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setTab("num");
              setResult(null);
            },
            className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "num" ? "bg-primary text-background" : "text-subtext hover:text-foreground"}`,
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
              " Número"
            ]
          }
        )
      ] }),
      tab === "msg" ? /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs text-subtext font-medium uppercase tracking-wider", children: "Mensagem para análise" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            value: message,
            onChange: (e) => setMessage(e.target.value),
            rows: 4,
            className: "mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-4 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none",
            placeholder: "Cole aqui a mensagem suspeita..."
          }
        )
      ] }) : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs text-subtext font-medium uppercase tracking-wider", children: "Número de telefone" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: number,
            onChange: (e) => setNumber(e.target.value),
            className: "mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-4 text-sm font-mono focus:outline-none focus:border-primary/50 transition-colors",
            placeholder: "+244 9XX XXX XXX"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleAnalyze,
          disabled: loading,
          className: "mt-4 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-semibold flex items-center justify-center gap-2 disabled:opacity-60",
          children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
            " Analisando..."
          ] }) : /* @__PURE__ */ jsx(Fragment, { children: "Analisar com IA" })
        }
      ),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: result && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20, scale: 0.98 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.4 },
          className: "mt-6",
          children: /* @__PURE__ */ jsx(ResultPanel, { result })
        },
        result.title
      ) })
    ] })
  ] }) });
}
function ResultPanel({ result }) {
  const styles = {
    fraud: { Icon: ShieldAlert, text: "text-danger", border: "border-danger/40", bg: "bg-danger/10", bar: "bg-danger", iconBg: "bg-danger/20 border-danger/30" },
    warning: { Icon: AlertTriangle, text: "text-warning", border: "border-warning/40", bg: "bg-warning/10", bar: "bg-warning", iconBg: "bg-warning/20 border-warning/30" },
    safe: { Icon: ShieldCheck, text: "text-primary", border: "border-primary/40", bg: "bg-primary/10", bar: "bg-primary", iconBg: "bg-primary/20 border-primary/30" }
  };
  const s = styles[result.verdict];
  return /* @__PURE__ */ jsx("div", { className: `rounded-2xl border-2 ${s.border} ${s.bg} p-6`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: `h-14 w-14 rounded-xl border ${s.iconBg} grid place-items-center shrink-0`, children: /* @__PURE__ */ jsx(s.Icon, { className: `h-7 w-7 ${s.text}` }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
        /* @__PURE__ */ jsx("h3", { className: `text-xl sm:text-2xl font-extrabold ${s.text}`, children: result.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxs("div", { className: `text-3xl font-extrabold ${s.text}`, children: [
            result.score,
            "%"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-subtext", children: "Score de risco" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 h-2 bg-black/30 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { width: 0 },
          animate: { width: `${result.score}%` },
          transition: { duration: 0.8, ease: "easeOut" },
          className: `h-full ${s.bar} rounded-full`
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-subtext mb-2", children: "Motivos" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1.5", children: result.reasons.map((r) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: `h-4 w-4 ${s.text} shrink-0 mt-0.5` }),
            " ",
            r
          ] }, r)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          result.category && /* @__PURE__ */ jsxs("div", { className: "glass rounded-xl p-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-subtext", children: "Categoria" }),
            /* @__PURE__ */ jsx("div", { className: "font-semibold mt-0.5", children: result.category })
          ] }),
          typeof result.reports === "number" && /* @__PURE__ */ jsxs("div", { className: "glass rounded-xl p-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-subtext", children: "Denúncias registadas" }),
            /* @__PURE__ */ jsxs("div", { className: "font-semibold mt-0.5", children: [
              result.reports,
              " ",
              result.reports === 1 ? "denúncia" : "denúncias"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
const items = [
  { icon: Users, value: 48e3, label: "Cidadãos protegidos", suffix: "+" },
  { icon: Building2, value: 7, label: "Bancos parceiros (em conversa)", suffix: "" },
  { icon: Signal, value: 4, label: "Operadoras integráveis", suffix: "" },
  { icon: Map, value: 18, label: "Províncias monitoradas", suffix: "" }
];
function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toLocaleString("pt-AO"));
  useEffect(() => {
    if (inView) {
      const ctrl = animate(value, to, { duration: 1.6, ease: "easeOut" });
      return () => ctrl.stop();
    }
  }, [inView, to, value]);
  return /* @__PURE__ */ jsxs("span", { ref, className: "text-4xl sm:text-5xl font-extrabold text-gradient-primary", children: [
    /* @__PURE__ */ jsx(motion.span, { children: rounded }),
    suffix
  ] });
}
function Impact() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4", children: "Impacto" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient", children: "Construindo confiança digital, escala nacional." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: items.map((it) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 text-center hover:border-primary/30 transition-colors", children: [
      /* @__PURE__ */ jsx("div", { className: "h-11 w-11 mx-auto rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-4", children: /* @__PURE__ */ jsx(it.icon, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsx(Counter, { to: it.value, suffix: it.suffix }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-subtext", children: it.label })
    ] }, it.label)) })
  ] }) });
}
const phases = [
  { icon: Rocket, title: "Fase 1", subtitle: "MVP Hackathon", desc: "Verificador web, base comunitária e dashboard.", status: "now" },
  { icon: MessageCircle, title: "Fase 2", subtitle: "WhatsApp Bot", desc: "Verificação direta via WhatsApp em qualquer telefone.", status: "next" },
  { icon: Landmark, title: "Fase 3", subtitle: "Integração Bancária", desc: "Alertas em tempo real com BAI, BFA, BIC, Atlântico.", status: "future" },
  { icon: Antenna, title: "Fase 4", subtitle: "Integração Operadoras", desc: "Unitel, Africell e Movicel bloqueando na origem.", status: "future" },
  { icon: Globe, title: "Fase 5", subtitle: "Cobertura Nacional", desc: "Infraestrutura Nacional de Confiança Digital.", status: "future" }
];
function Roadmap() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4", children: "Roadmap" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient", children: "Do MVP à infraestrutura nacional." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:-translate-x-px" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: phases.map((p, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5 },
          className: `relative grid sm:grid-cols-2 gap-4 sm:gap-12 items-center ${i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `pl-16 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}`, children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 border-primary/20", children: [
              /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-2 mb-2 ${i % 2 === 0 ? "sm:justify-end" : ""}`, children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: p.title }),
                p.status === "now" && /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30", children: "Agora" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: p.subtitle }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-subtext", children: p.desc })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-0 sm:left-1/2 top-6 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2", children: /* @__PURE__ */ jsxs("div", { className: `relative h-12 w-12 rounded-2xl ${p.status === "now" ? "bg-gradient-to-br from-primary to-secondary" : "bg-card border border-white/10"} grid place-items-center`, children: [
              p.status === "now" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-primary blur-xl opacity-50" }),
              /* @__PURE__ */ jsx(p.icon, { className: `relative h-5 w-5 ${p.status === "now" ? "text-background" : "text-primary"}` })
            ] }) })
          ]
        },
        p.title
      )) })
    ] })
  ] }) });
}
function Infrastructure() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl glass border-primary/30 p-8 sm:p-14", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4", children: "Visão de longo prazo" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient", children: "Infraestrutura Nacional de Confiança Digital" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-lg text-subtext leading-relaxed", children: [
          "Hoje combatemos fraudes. ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "Amanhã construímos a infraestrutura nacional de confiança digital de Angola" }),
          " — o sistema que bancos, operadoras, governo e cidadãos consultam antes de qualquer transação digital."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid sm:grid-cols-3 gap-4", children: [
          { icon: Cpu, label: "Modelos IA locais" },
          { icon: Database, label: "Base nacional unificada" },
          { icon: Network, label: "APIs para o ecossistema" }
        ].map((it) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-white/10 p-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(it.icon, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs", children: it.label })
        ] }, it.label)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { y: 20, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "relative mx-auto w-64 animate-float",
          children: /* @__PURE__ */ jsx("div", { className: "rounded-[2.5rem] border-4 border-white/10 bg-card p-3 shadow-2xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] bg-background p-4 aspect-[9/19] flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-subtext", children: [
              /* @__PURE__ */ jsx("span", { children: "9:41" }),
              /* @__PURE__ */ jsx("span", { children: "VERIFICA" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs text-subtext", children: "Verificação WhatsApp" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 rounded-lg bg-white/5 p-3 text-xs", children: '"Olá, sou do seu banco..."' }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 rounded-xl border border-danger/40 bg-danger/10 p-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-danger animate-pulse" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-danger", children: "FRAUDE DETECTADA" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 text-xl font-extrabold text-danger", children: "92%" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-subtext mt-1", children: "Padrão de engenharia social" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-4 grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-primary text-background py-2 text-[10px] font-bold text-center", children: "Bloquear" }),
              /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-white/10 py-2 text-[10px] text-center", children: "Denunciar" })
            ] })
          ] }) })
        }
      ) })
    ] })
  ] }) }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Problem, {}),
      /* @__PURE__ */ jsx(HowItWorks, {}),
      /* @__PURE__ */ jsx(Simulator, {}),
      /* @__PURE__ */ jsx(Impact, {}),
      /* @__PURE__ */ jsx(Infrastructure, {}),
      /* @__PURE__ */ jsx(Roadmap, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
