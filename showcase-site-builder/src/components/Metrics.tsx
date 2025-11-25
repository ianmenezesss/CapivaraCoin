import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Target, TrendingUp } from "lucide-react";

const Metrics = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Foco no Primeiro Ano
          </h2>
          <p className="text-xl text-muted-foreground">
            Validação, Inovação e Impacto Sustentável
          </p>
        </div>

        {/* Main Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-medium hover:shadow-strong transition-smooth text-center border-2 border-primary/20 hover:border-primary/40">
            <CardHeader>
              <div className="flex justify-center mb-3">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Users className="w-10 h-10 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1.500+</div>
              <div className="text-sm text-muted-foreground font-medium">Holders Únicos</div>
              <div className="text-xs text-muted-foreground mt-1">Até o fim do primeiro ano</div>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth text-center border-2 border-accent/20 hover:border-accent/40">
            <CardHeader>
              <div className="flex justify-center mb-3">
                <div className="p-4 bg-accent/10 rounded-2xl">
                  <DollarSign className="w-10 h-10 text-accent" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">R$5.000+</div>
              <div className="text-sm text-muted-foreground font-medium">Doações Acumuladas</div>
              <div className="text-xs text-muted-foreground mt-1">Comprovadas em 12 meses</div>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth text-center border-2 border-secondary/20 hover:border-secondary/40">
            <CardHeader>
              <div className="flex justify-center mb-3">
                <div className="p-4 bg-secondary/10 rounded-2xl">
                  <Target className="w-10 h-10 text-secondary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">3+</div>
              <div className="text-sm text-muted-foreground font-medium">Campanhas Apoiadas</div>
              <div className="text-xs text-muted-foreground mt-1">Com ONGs parceiras</div>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth text-center border-2 border-primary/20 hover:border-primary/40">
            <CardHeader>
              <div className="flex justify-center mb-3">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">R$50k</div>
              <div className="text-sm text-muted-foreground font-medium">Market Cap</div>
              <div className="text-xs text-muted-foreground mt-1">Meta inicial de validação</div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-medium border-2 border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">Indicadores de Inovação e Crescimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Taxa de Engajamento</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Percentual de usuários que interagem com funcionalidades chave (staking, governança DAO), visando 20% de adesão nos primeiros 6 meses.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Volume de Transação Real</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Monitoramento do volume transacionado de forma orgânica, buscando consistência e crescimento gradual de 10% a cada trimestre.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl">Indicadores ESG e Impacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-accent">Valor Total Doado</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Medida direta do impacto financeiro, com meta de R$5.000+ em doações comprovadas para a causa animal no primeiro ano.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Relatórios de Campanhas</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Documentação de 3+ campanhas de resgate ou projetos específicos apoiados por ONGs parceiras, com resultados verificáveis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="shadow-medium bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-muted">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground leading-relaxed text-lg">
                Nossos indicadores focam na <strong>validação de mercado</strong> e no <strong>impacto real</strong> do nosso modelo. 
                Eles são evidências tangíveis de transformação social e ambiental, <strong>verificáveis publicamente na blockchain</strong> a qualquer momento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
