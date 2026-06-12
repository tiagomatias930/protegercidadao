import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ShieldCheck, ShieldAlert, Users, PhoneIncoming, TrendingUp, TrendingDown, MapPin, Activity,
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, BarChart, Bar,
} from "recharts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — VERIFICA" },
      { name: "description", content: "Inteligência em tempo real sobre fraudes digitais em Angola." },
    ],
  }),
  component: Dashboard,
});

const series = Array.from({ length: 14 }).map((_, i) => ({
  d: `D${i + 1}`,
  verif: 600 + Math.round(Math.sin(i * 0.5) * 180 + i * 35),
  fraud: 120 + Math.round(Math.sin(i * 0.7) * 60 + i * 6),
}));

const categories = [
  { name: "Phishing SMS", value: 38 },
  { name: "Multicaixa", value: 24 },
  { name: "Chamadas", value: 18 },
  { name: "Emprego falso", value: 12 },
  { name: "Outros", value: 8 },
];
const COLORS = ["#3b82f6", "#06b6d4", "#f59e0b", "#ef4444", "#a1a1aa"];

const provinces = [
  { name: "Luanda", level: 92, reports: 1840, x: "62%", y: "55%" },
  { name: "Benguela", level: 71, reports: 612, x: "48%", y: "70%" },
  { name: "Huambo", level: 58, reports: 421, x: "55%", y: "67%" },
  { name: "Huíla", level: 64, reports: 388, x: "52%", y: "80%" },
  { name: "Cabinda", level: 49, reports: 254, x: "45%", y: "20%" },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between flex-wrap gap-4 mb-8"
          >
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">Centro de operações</div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient mt-1">Dashboard Nacional</h1>
            </div>
            <div className="glass flex items-center gap-2 px-3 py-1.5 rounded-full text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-subtext">Atualizado em tempo real</span>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard icon={Activity} label="Total de verificações" value="12.847" trend={18} />
            <StatCard icon={ShieldAlert} label="Fraudes detectadas" value="3.921" trend={24} variant="danger" />
            <StatCard icon={PhoneIncoming} label="Números denunciados" value="1.284" trend={11} />
            <StatCard icon={Users} label="Utilizadores ativos" value="9.432" trend={-3} />
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Verificações e fraudes — últimos 14 dias</h3>
                <div className="flex gap-3 text-xs">
                  <Legend color="#3b82f6" label="Verificações" />
                  <Legend color="#ef4444" label="Fraudes" />
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer>
                  <AreaChart data={series}>
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="d" stroke="#a1a1aa" fontSize={11} />
                    <YAxis stroke="#a1a1aa" fontSize={11} />
                    <Tooltip contentStyle={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                    <Area type="monotone" dataKey="verif" stroke="#3b82f6" fill="url(#g1)" strokeWidth={2} />
                    <Area type="monotone" dataKey="fraud" stroke="#ef4444" fill="url(#g2)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Categorias de fraude</h3>
              <div className="h-64">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={categories} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={3}>
                      {categories.map((_, i) => <Cell key={i} fill={COLORS[i]} stroke="none" />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                {categories.map((c, i) => (
                  <div key={c.name} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: COLORS[i] }} />
                    <span className="text-subtext truncate">{c.name}</span>
                    <span className="ml-auto font-semibold">{c.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mt-6">
            <div className="lg:col-span-2 glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Mapa de Angola — intensidade de fraude</h3>
              </div>
              <div className="relative aspect-[4/3] rounded-xl bg-black/30 border border-white/5 overflow-hidden">
                {/* Stylized Angola silhouette */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path
                    d="M30 15 L70 12 L78 30 L82 50 L75 75 L60 88 L45 90 L30 82 L25 60 L20 40 Z"
                    fill="rgba(59,130,246,0.05)"
                    stroke="rgba(59,130,246,0.4)"
                    strokeWidth="0.3"
                  />
                </svg>
                {provinces.map((p) => (
                  <div key={p.name} style={{ left: p.x, top: p.y }} className="absolute -translate-x-1/2 -translate-y-1/2 group">
                    <div
                      className="rounded-full animate-pulse-glow"
                      style={{
                        width: 20 + p.level / 4,
                        height: 20 + p.level / 4,
                        background: p.level > 70 ? "rgba(239,68,68,0.5)" : p.level > 55 ? "rgba(245,158,11,0.5)" : "rgba(59,130,246,0.5)",
                        border: `2px solid ${p.level > 70 ? "#ef4444" : p.level > 55 ? "#f59e0b" : "#3b82f6"}`,
                      }}
                    />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-[11px] font-semibold">{p.name}</div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity glass rounded-lg px-2 py-1 text-[10px] whitespace-nowrap">
                      {p.reports} denúncias · nível {p.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Top províncias</h3>
              <div className="h-64">
                <ResponsiveContainer>
                  <BarChart data={provinces} layout="vertical" margin={{ left: 10 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#a1a1aa" fontSize={11} width={70} />
                    <Tooltip contentStyle={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                    <Bar dataKey="reports" radius={[0, 8, 8, 0]}>
                      {provinces.map((p, i) => (
                        <Cell key={i} fill={p.level > 70 ? "#ef4444" : p.level > 55 ? "#f59e0b" : "#3b82f6"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 mt-6">
            <h3 className="font-semibold mb-4">Últimas detecções</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-subtext uppercase tracking-wider">
                    <th className="py-2 pr-4">Tipo</th>
                    <th className="py-2 pr-4">Origem</th>
                    <th className="py-2 pr-4">Província</th>
                    <th className="py-2 pr-4">Score</th>
                    <th className="py-2 pr-4">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["SMS Phishing", "+244 923 412 901", "Luanda", 94, "Bloqueado"],
                    ["Chamada falsa", "+244 928 776 122", "Benguela", 88, "Em análise"],
                    ["Link suspeito", "bit.ly/mcx-premio", "Huambo", 91, "Bloqueado"],
                    ["Multicaixa", "+244 991 002 110", "Luanda", 76, "Bloqueado"],
                    ["Emprego falso", "vagas-angola.com", "Huíla", 68, "Alerta"],
                  ].map((r, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="py-3 pr-4">{r[0]}</td>
                      <td className="py-3 pr-4 font-mono text-xs text-subtext">{r[1]}</td>
                      <td className="py-3 pr-4">{r[2]}</td>
                      <td className="py-3 pr-4">
                        <span className={`font-bold ${Number(r[3]) > 80 ? "text-danger" : Number(r[3]) > 60 ? "text-warning" : "text-primary"}`}>{r[3]}%</span>
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">{r[4]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StatCard({ icon: Icon, label, value, trend, variant }: any) {
  const up = trend >= 0;
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className={`h-10 w-10 rounded-xl ${variant === "danger" ? "bg-danger/10 border-danger/20" : "bg-primary/10 border-primary/20"} border grid place-items-center`}>
          <Icon className={`h-5 w-5 ${variant === "danger" ? "text-danger" : "text-primary"}`} />
        </div>
        <span className={`text-xs flex items-center gap-1 ${up ? "text-primary" : "text-danger"}`}>
          {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />} {Math.abs(trend)}%
        </span>
      </div>
      <div className="mt-4 text-2xl font-extrabold">{value}</div>
      <div className="text-xs text-subtext">{label}</div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-subtext">
      <span className="h-2 w-2 rounded-full" style={{ background: color }} /> {label}
    </span>
  );
}