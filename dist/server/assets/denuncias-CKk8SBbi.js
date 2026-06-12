import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-DxDfuU71.js";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Send } from "lucide-react";
import "@tanstack/react-router";
const TYPES = ["SMS Fraudulento", "Chamada Fraudulenta", "Link de Phishing", "Golpe Multicaixa", "Falsa Oferta de Emprego", "Outro"];
function Denuncias() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState(TYPES[0]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-28 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4", children: "Centro de Denúncias" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient", children: "A sua denúncia protege milhares." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-subtext", children: "Cada denúncia alimenta a base nacional. Anónima, rápida e verificada pela comunidade." })
      ] }),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: submitted ? /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, exit: {
        opacity: 0
      }, className: "glass rounded-3xl p-12 text-center border-primary/30", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto h-20 w-20 rounded-2xl bg-primary/10 border border-primary/30 grid place-items-center animate-pulse-glow", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-10 w-10 text-primary" }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 text-2xl font-bold text-gradient", children: "Obrigado." }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-subtext", children: "A comunidade ficou mais protegida." }),
        /* @__PURE__ */ jsx("button", { onClick: () => setSubmitted(false), className: "mt-8 glass px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10", children: "Enviar nova denúncia" })
      ] }, "ok") : /* @__PURE__ */ jsxs(motion.form, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "glass rounded-3xl p-6 sm:p-8 space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs text-subtext font-medium uppercase tracking-wider", children: "Tipo de fraude" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: TYPES.map((t) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setType(t), className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${type === t ? "bg-primary text-background border-primary" : "border-white/10 text-subtext hover:border-primary/30"}`, children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs text-subtext font-medium uppercase tracking-wider", children: "Número suspeito (opcional)" }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "+244 9XX XXX XXX", className: "mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-3 text-sm font-mono focus:outline-none focus:border-primary/50" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs text-subtext font-medium uppercase tracking-wider", children: "Link suspeito (opcional)" }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "https://...", className: "mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-3 text-sm focus:outline-none focus:border-primary/50" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs text-subtext font-medium uppercase tracking-wider", children: "Descrição" }),
          /* @__PURE__ */ jsx("textarea", { required: true, rows: 5, placeholder: "Conte-nos o que aconteceu. Quanto mais detalhes, melhor protegemos os outros.", className: "mt-2 w-full rounded-xl bg-black/30 border border-white/10 p-3 text-sm focus:outline-none focus:border-primary/50 resize-none" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3 pt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-subtext", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-primary" }),
            "Denúncia anónima e encriptada"
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
            " Enviar Denúncia"
          ] })
        ] })
      ] }, "form") })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Denuncias as component
};
