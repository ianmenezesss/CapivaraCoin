import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Product from "@/components/Product";
import Tokenomics from "@/components/Tokenomics";
import Innovation from "@/components/Innovation";
import Metrics from "@/components/Metrics";
import Roadmap from "@/components/Roadmap";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Product />
      <Tokenomics />
      <Innovation />
      <Metrics />
      <Roadmap />
      <CallToAction />
    </main>
  );
};

export default Index;
