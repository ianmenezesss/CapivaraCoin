import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Heart, Droplet, Code } from "lucide-react";

const Tokenomics = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            5% de Taxa: Impacto, Sustentabilidade e Estabilidade
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            O Coração da Nossa Inovação Tokenômica
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Uma taxa fixa de 5% é aplicada automaticamente sobre todas as transações. Esta taxa não é um custo — é o mecanismo que transforma cada operação em impacto social verificável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-medium hover:shadow-strong transition-smooth border-2 border-primary/20 hover:border-primary/40">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Code className="w-10 h-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">1% Dev Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground leading-relaxed">
                Garante financiamento contínuo para desenvolvimento técnico, segurança, auditorias, expansão do projeto e manutenção da infraestrutura.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-strong hover:shadow-glow transition-smooth border-2 border-accent/40 hover:border-accent scale-105 md:scale-110">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 gradient-accent rounded-2xl">
                  <Heart className="w-10 h-10 text-accent-foreground" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">2% Causa Animal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground leading-relaxed">
                Direcionado automaticamente à Carteira de Doação pública e auditável. Fundos distribuídos para ONGs parceiras através de votação da DAO.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth border-2 border-primary/20 hover:border-primary/40">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Droplet className="w-10 h-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">2% Liquidez (LP)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground leading-relaxed">
                Fortalece o Liquidity Pool automaticamente, estabilizando o preço, reduzindo volatilidade e facilitando negociações para todos os holders.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="shadow-medium border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg mt-1">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Transparência Total</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Todos os endereços de carteira são públicos na blockchain. Qualquer pessoa pode verificar em tempo real para onde cada centavo está indo — esta é a revolução da filantropia transparente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
