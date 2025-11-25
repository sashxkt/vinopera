import Hero from "@/components/Hero";
import Middle from "@/components/Middle";
import Bottom from "@/components/Bottom";
import Pricing from "@/components/Pricing";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background bg-dot-grid relative overflow-hidden">
      <Header />
      <Hero />
      <Middle />
      <Pricing />
      <Bottom />
    </main>
  );
}
