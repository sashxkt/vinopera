import Hero from "@/components/Hero";
import Middle from "@/components/Middle";
import Bottom from "@/components/Bottom";
import Pricing from "@/components/Pricing";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <main>
      <ParallaxSection>
        <Hero />
      </ParallaxSection>
      <ParallaxSection>
        <Middle />
      </ParallaxSection>
      <ParallaxSection>
        <Pricing />
      </ParallaxSection>
      <ParallaxSection>
        <Bottom />
      </ParallaxSection>
    </main>
  );
}
