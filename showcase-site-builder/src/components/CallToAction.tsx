import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Leaf } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-strong border-0 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center text-primary-foreground">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Capivara Coin: Investimento com Propósito
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 opacity-95 text-balance">
                Uma nova era de investimentos: onde rentabilidade encontra responsabilidade, onde tecnologia encontra propósito.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <Sparkles className="w-10 h-10 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Inovação</h3>
                  <p className="text-sm opacity-90">Tokenomics deflacionários com impacto social integrado</p>
                </div>

                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <Leaf className="w-10 h-10 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Sustentabilidade</h3>
                  <p className="text-sm opacity-90">Contribuição direta e verificável para o ODS 15</p>
                </div>

                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <Shield className="w-10 h-10 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Transparência</h3>
                  <p className="text-sm opacity-90">Auditoria pública via blockchain e DAO</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-bold mb-6">
                  Junte-se à revolução da filantropia transparente
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 shadow-medium hover:shadow-strong transition-smooth text-lg px-8"
                  >
                    Saiba Mais
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 transition-smooth text-lg px-8"
                  >
                    Ver Whitepaper
                  </Button>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-primary-foreground/20">
                <p className="text-lg opacity-90">
                  Invista com propósito. Proteja a vida terrestre.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Equipe do Projeto</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div>Marx Lenin</div>
              <div>Emerson De Aquino</div>
              <div>Rafael Teixeira</div>
              <div>Jadson Mendes</div>
              <div>Allan Oliveira</div>
              <div>Ian Freire Borges</div>
              <div>Ian Davi Menezes</div>
              <div>Leonardo Calheira</div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Projeto desenvolvido para UC Inovação, Sustentabilidade e Competitividade Empresarial<br />
              Professora: Claudia Becker • Salvador, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
