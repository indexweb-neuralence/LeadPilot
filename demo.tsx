import Component from "@/components/ui/product-showcase";
import GlowyWavesHero from "@/components/ui/glowy-waves-hero-shadcnui";
import HowItWorksDark from "@/components/ui/how-it-works-dark";

export default function DemoOne() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <GlowyWavesHero>
        <Component />
      </GlowyWavesHero>
      <HowItWorksDark />
    </div>
  );
}
