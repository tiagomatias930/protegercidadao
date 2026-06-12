import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { X, Menu } from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Início" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/denuncias", label: "Denúncias" }
  ];
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 inset-x-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary blur-md opacity-60 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsx("div", { className: "relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary grid place-items-center", children: /* @__PURE__ */ jsx("img", { src: "/logo.png", className: "h-6 w-6 text-background", strokeWidth: 2.5 }) })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "font-extrabold tracking-tight text-lg", children: [
          "VERIFI",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "CA" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          className: "px-4 py-2 text-sm text-subtext hover:text-foreground transition-colors rounded-lg hover:bg-white/5",
          activeProps: { className: "px-4 py-2 text-sm text-foreground rounded-lg bg-white/5" },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-subtext", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
          ] }),
          "Análise em Tempo Real"
        ] }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/",
            hash: "simulator",
            className: "px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90 transition-opacity",
            children: "Verificar Agora"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("button", { className: "md:hidden p-2 text-foreground", onClick: () => setOpen(!open), children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "glass mt-2 rounded-2xl p-4 md:hidden flex flex-col gap-1", children: links.map((l) => /* @__PURE__ */ jsx(
      Link,
      {
        to: l.to,
        onClick: () => setOpen(false),
        className: "px-4 py-2.5 text-sm text-subtext rounded-lg hover:bg-white/5",
        children: l.label
      },
      l.to
    )) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-white/5 mt-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary grid place-items-center", children: /* @__PURE__ */ jsx("img", { src: "/logo.png", className: "h-6 w-6 text-background", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ jsxs("span", { className: "font-extrabold tracking-tight text-lg", children: [
            "VERIFI",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "CA" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-subtext max-w-md", children: "Infraestrutura Nacional de Confiança Digital de Angola. Construindo um país onde cada cidadão pode confiar antes de clicar." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-3", children: "Produto" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-subtext", children: [
          /* @__PURE__ */ jsx("li", { children: "Verificador IA" }),
          /* @__PURE__ */ jsx("li", { children: "Dashboard" }),
          /* @__PURE__ */ jsx("li", { children: "Denúncias" }),
          /* @__PURE__ */ jsx("li", { children: "API (em breve)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-3", children: "Parceiros" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-subtext", children: [
          /* @__PURE__ */ jsx("li", { children: "Bancos" }),
          /* @__PURE__ */ jsx("li", { children: "Operadoras" }),
          /* @__PURE__ */ jsx("li", { children: "Governo" }),
          /* @__PURE__ */ jsx("li", { children: "Imprensa" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-subtext", children: [
      /* @__PURE__ */ jsx("span", { children: "© 2026 VERIFICA · Luanda, Angola" }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
        "Desenvolvido por",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground/80 tracking-wide", children: "Alpha Hydrae" })
      ] })
    ] }) })
  ] });
}
export {
  Footer as F,
  Navbar as N
};
