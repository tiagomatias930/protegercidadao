import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-DxDfuU71.js";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, PhoneIncoming, Users, MapPin, TrendingUp, TrendingDown } from "lucide-react";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import "@tanstack/react-router";
import "react";
const series = Array.from({
  length: 14
}).map((_, i) => ({
  d: `D${i + 1}`,
  verif: 600 + Math.round(Math.sin(i * 0.5) * 180 + i * 35),
  fraud: 120 + Math.round(Math.sin(i * 0.7) * 60 + i * 6)
}));
const categories = [{
  name: "Phishing SMS",
  value: 38
}, {
  name: "Multicaixa",
  value: 24
}, {
  name: "Chamadas",
  value: 18
}, {
  name: "Emprego falso",
  value: 12
}, {
  name: "Outros",
  value: 8
}];
const COLORS = ["#3b82f6", "#06b6d4", "#f59e0b", "#ef4444", "#a1a1aa"];
const provinces = [{
  name: "Luanda",
  level: 92,
  reports: 1840,
  x: "62%",
  y: "55%"
}, {
  name: "Benguela",
  level: 71,
  reports: 612,
  x: "48%",
  y: "70%"
}, {
  name: "Huambo",
  level: 58,
  reports: 421,
  x: "55%",
  y: "67%"
}, {
  name: "Huíla",
  level: 64,
  reports: 388,
  x: "52%",
  y: "80%"
}, {
  name: "Cabinda",
  level: 49,
  reports: 254,
  x: "45%",
  y: "20%"
}];
function Dashboard() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-28 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "flex items-center justify-between flex-wrap gap-4 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-primary font-semibold", children: "Centro de operações" }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient mt-1", children: "Dashboard Nacional" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass flex items-center gap-2 px-3 py-1.5 rounded-full text-xs", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-subtext", children: "Atualizado em tempo real" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6", children: [
        /* @__PURE__ */ jsx(StatCard, { icon: Activity, label: "Total de verificações", value: "12.847", trend: 18 }),
        /* @__PURE__ */ jsx(StatCard, { icon: ShieldAlert, label: "Fraudes detectadas", value: "3.921", trend: 24, variant: "danger" }),
        /* @__PURE__ */ jsx(StatCard, { icon: PhoneIncoming, label: "Números denunciados", value: "1.284", trend: 11 }),
        /* @__PURE__ */ jsx(StatCard, { icon: Users, label: "Utilizadores ativos", value: "9.432", trend: -3 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 glass rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Verificações e fraudes — últimos 14 dias" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3 text-xs", children: [
              /* @__PURE__ */ jsx(Legend, { color: "#3b82f6", label: "Verificações" }),
              /* @__PURE__ */ jsx(Legend, { color: "#ef4444", label: "Fraudes" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-64", children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(AreaChart, { data: series, children: [
            /* @__PURE__ */ jsxs("defs", { children: [
              /* @__PURE__ */ jsxs("linearGradient", { id: "g1", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#3b82f6", stopOpacity: 0.4 }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#3b82f6", stopOpacity: 0 })
              ] }),
              /* @__PURE__ */ jsxs("linearGradient", { id: "g2", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#ef4444", stopOpacity: 0.3 }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#ef4444", stopOpacity: 0 })
              ] })
            ] }),
            /* @__PURE__ */ jsx(CartesianGrid, { stroke: "rgba(255,255,255,0.05)" }),
            /* @__PURE__ */ jsx(XAxis, { dataKey: "d", stroke: "#a1a1aa", fontSize: 11 }),
            /* @__PURE__ */ jsx(YAxis, { stroke: "#a1a1aa", fontSize: 11 }),
            /* @__PURE__ */ jsx(Tooltip, { contentStyle: {
              background: "#18181b",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12
            } }),
            /* @__PURE__ */ jsx(Area, { type: "monotone", dataKey: "verif", stroke: "#3b82f6", fill: "url(#g1)", strokeWidth: 2 }),
            /* @__PURE__ */ jsx(Area, { type: "monotone", dataKey: "fraud", stroke: "#ef4444", fill: "url(#g2)", strokeWidth: 2 })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Categorias de fraude" }),
          /* @__PURE__ */ jsx("div", { className: "h-64", children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(PieChart, { children: [
            /* @__PURE__ */ jsx(Pie, { data: categories, dataKey: "value", innerRadius: 50, outerRadius: 80, paddingAngle: 3, children: categories.map((_, i) => /* @__PURE__ */ jsx(Cell, { fill: COLORS[i], stroke: "none" }, i)) }),
            /* @__PURE__ */ jsx(Tooltip, { contentStyle: {
              background: "#18181b",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12
            } })
          ] }) }) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 text-xs mt-2", children: categories.map((c, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full", style: {
              background: COLORS[i]
            } }),
            /* @__PURE__ */ jsx("span", { className: "text-subtext truncate", children: c.name }),
            /* @__PURE__ */ jsxs("span", { className: "ml-auto font-semibold", children: [
              c.value,
              "%"
            ] })
          ] }, c.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-4 mt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 glass rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-primary" }),
            " Mapa de Angola — intensidade de fraude"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] rounded-xl bg-black/30 border border-white/5 overflow-hidden", children: [
            /* @__PURE__ */ jsx("svg", { viewBox: "0 0 100 100", className: "absolute inset-0 w-full h-full", preserveAspectRatio: "none", children: /* @__PURE__ */ jsx("path", { d: "M30 15 L70 12 L78 30 L82 50 L75 75 L60 88 L45 90 L30 82 L25 60 L20 40 Z", fill: "rgba(59,130,246,0.05)", stroke: "rgba(59,130,246,0.4)", strokeWidth: "0.3" }) }),
            provinces.map((p) => /* @__PURE__ */ jsxs("div", { style: {
              left: p.x,
              top: p.y
            }, className: "absolute -translate-x-1/2 -translate-y-1/2 group", children: [
              /* @__PURE__ */ jsx("div", { className: "rounded-full animate-pulse-glow", style: {
                width: 20 + p.level / 4,
                height: 20 + p.level / 4,
                background: p.level > 70 ? "rgba(239,68,68,0.5)" : p.level > 55 ? "rgba(245,158,11,0.5)" : "rgba(59,130,246,0.5)",
                border: `2px solid ${p.level > 70 ? "#ef4444" : p.level > 55 ? "#f59e0b" : "#3b82f6"}`
              } }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-[11px] font-semibold", children: p.name }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity glass rounded-lg px-2 py-1 text-[10px] whitespace-nowrap", children: [
                p.reports,
                " denúncias · nível ",
                p.level
              ] })
            ] }, p.name))
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Top províncias" }),
          /* @__PURE__ */ jsx("div", { className: "h-64", children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(BarChart, { data: provinces, layout: "vertical", margin: {
            left: 10
          }, children: [
            /* @__PURE__ */ jsx(XAxis, { type: "number", hide: true }),
            /* @__PURE__ */ jsx(YAxis, { dataKey: "name", type: "category", stroke: "#a1a1aa", fontSize: 11, width: 70 }),
            /* @__PURE__ */ jsx(Tooltip, { contentStyle: {
              background: "#18181b",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12
            } }),
            /* @__PURE__ */ jsx(Bar, { dataKey: "reports", radius: [0, 8, 8, 0], children: provinces.map((p, i) => /* @__PURE__ */ jsx(Cell, { fill: p.level > 70 ? "#ef4444" : p.level > 55 ? "#f59e0b" : "#3b82f6" }, i)) })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 mt-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Últimas detecções" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-left text-xs text-subtext uppercase tracking-wider", children: [
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4", children: "Tipo" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4", children: "Origem" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4", children: "Província" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4", children: "Score" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4", children: "Estado" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: [["SMS Phishing", "+244 923 412 901", "Luanda", 94, "Bloqueado"], ["Chamada falsa", "+244 928 776 122", "Benguela", 88, "Em análise"], ["Link suspeito", "bit.ly/mcx-premio", "Huambo", 91, "Bloqueado"], ["Multicaixa", "+244 991 002 110", "Luanda", 76, "Bloqueado"], ["Emprego falso", "vagas-angola.com", "Huíla", 68, "Alerta"]].map((r, i) => /* @__PURE__ */ jsxs("tr", { className: "border-t border-white/5", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3 pr-4", children: r[0] }),
            /* @__PURE__ */ jsx("td", { className: "py-3 pr-4 font-mono text-xs text-subtext", children: r[1] }),
            /* @__PURE__ */ jsx("td", { className: "py-3 pr-4", children: r[2] }),
            /* @__PURE__ */ jsx("td", { className: "py-3 pr-4", children: /* @__PURE__ */ jsxs("span", { className: `font-bold ${Number(r[3]) > 80 ? "text-danger" : Number(r[3]) > 60 ? "text-warning" : "text-primary"}`, children: [
              r[3],
              "%"
            ] }) }),
            /* @__PURE__ */ jsx("td", { className: "py-3 pr-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10", children: r[4] }) })
          ] }, i)) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  variant
}) {
  const up = trend >= 0;
  return /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: `h-10 w-10 rounded-xl ${variant === "danger" ? "bg-danger/10 border-danger/20" : "bg-primary/10 border-primary/20"} border grid place-items-center`, children: /* @__PURE__ */ jsx(Icon, { className: `h-5 w-5 ${variant === "danger" ? "text-danger" : "text-primary"}` }) }),
      /* @__PURE__ */ jsxs("span", { className: `text-xs flex items-center gap-1 ${up ? "text-primary" : "text-danger"}`, children: [
        up ? /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(TrendingDown, { className: "h-3 w-3" }),
        " ",
        Math.abs(trend),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 text-2xl font-extrabold", children: value }),
    /* @__PURE__ */ jsx("div", { className: "text-xs text-subtext", children: label })
  ] });
}
function Legend({
  color,
  label
}) {
  return /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-subtext", children: [
    /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full", style: {
      background: color
    } }),
    " ",
    label
  ] });
}
export {
  Dashboard as component
};
