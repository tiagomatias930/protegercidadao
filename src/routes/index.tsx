import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Simulator } from "@/components/Simulator";
import { Impact } from "@/components/Impact";
import { Roadmap } from "@/components/Roadmap";
import { Infrastructure } from "@/components/Infrastructure";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VERIFICA — Protegendo Angola contra fraudes digitais" },
      { name: "description", content: "Verifique mensagens, números e links em segundos com IA e inteligência comunitária. Plataforma Nacional de Confiança Digital de Angola." },
      { property: "og:title", content: "VERIFICA — Antes de confiar, VerifiCa." },
      { property: "og:description", content: "Plataforma Nacional de Confiança Digital de Angola." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Simulator />
        <Impact />
        <Infrastructure />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
