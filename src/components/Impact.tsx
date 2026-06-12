import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, Building2, Signal, Map } from "lucide-react";

const items = [
  { icon: Users, value: 48000, label: "Cidadãos protegidos", suffix: "+" },
  { icon: Building2, value: 7, label: "Bancos parceiros (em conversa)", suffix: "" },
  { icon: Signal, value: 4, label: "Operadoras integráveis", suffix: "" },
  { icon: Map, value: 18, label: "Províncias monitoradas", suffix: "" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toLocaleString("pt-AO"));
  useEffect(() => {
    if (inView) {
      const ctrl = animate(value, to, { duration: 1.6, ease: "easeOut" });
      return () => ctrl.stop();
    }
  }, [inView, to, value]);
  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-extrabold text-gradient-primary">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Impacto
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient">
            Construindo confiança digital, escala nacional.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.label} className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
              <div className="h-11 w-11 mx-auto rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-4">
                <it.icon className="h-5 w-5 text-primary" />
              </div>
              <Counter to={it.value} suffix={it.suffix} />
              <div className="mt-2 text-sm text-subtext">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}