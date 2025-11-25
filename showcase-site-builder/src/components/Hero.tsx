import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/capybara-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Capivara em habitat natural"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full border border-primary-foreground/20 shadow-glow">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Modelo de Negócio Deflacionário ESG</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground text-balance leading-tight">
            Capivara Coin
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-balance">
            O investimento que protege a vida terrestre. Cada transação gera impacto positivo automático através da blockchain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Conheça o Projeto
              <ArrowRight className="w-5 h-5 transition-bounce group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
              Ver Whitepaper
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-card/10 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-primary-foreground/10">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">Transparente via Blockchain</div>
            </div>

            <div className="bg-card/10 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-primary-foreground/10">
              <div className="flex items-center justify-center mb-3">
                <Leaf className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">ODS 15</div>
              <div className="text-sm text-primary-foreground/80">Vida Terrestre</div>
            </div>

            <div className="bg-card/10 backdrop-blur-md rounded-2xl p-6 shadow-soft border border-primary-foreground/10">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-1">5%</div>
              <div className="text-sm text-primary-foreground/80">Taxa de Impacto Social</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
