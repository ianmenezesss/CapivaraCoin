import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Award, Rocket } from "lucide-react";

const Innovation = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Inovação Fortalecendo Nossa Posição
          </h2>
          <p className="text-xl text-muted-foreground">
            Três pilares de diferenciação competitiva no mercado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-medium hover:shadow-strong transition-smooth border-2 border-primary/20 hover:border-primary/40 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary">01</span>
              </div>
              <CardTitle className="text-2xl">Inovação de Modelo de Negócio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Unimos rentabilidade cripto com impacto social automatizado e transparente via blockchain. Isto não é apenas um produto — é uma nova forma de fazer caridade e investimento simultaneamente.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth border-2 border-accent/20 hover:border-accent/40 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <span className="text-sm font-semibold text-accent">02</span>
              </div>
              <CardTitle className="text-2xl">Inovação Social</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Nosso foco transcende o lucro financeiro: geramos valor público mensurável através da proteção animal sistêmica. Cada holder se torna automaticamente um filantropo ativo.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth border-2 border-secondary/20 hover:border-secondary/40 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <span className="text-sm font-semibold text-secondary">03</span>
              </div>
              <CardTitle className="text-2xl">Competitividade por Diferenciação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Contra criptos tradicionais oferecemos propósito verificável. Contra doações tradicionais oferecemos transparência absoluta. Contra charity tokens genéricas oferecemos marca carismática.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Unique Positioning */}
        <Card className="shadow-strong bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">Posicionamento Único</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              Ocupamos um espaço competitivo inexplorado na intersecção entre <strong className="text-primary">DeFi</strong>, <strong className="text-accent">ESG</strong> e <strong className="text-secondary">filantropia transparente</strong>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Enquanto milhares de tokens competem por atenção com promessas vazias de "ir para a lua", a Capivara Coin se diferencia com <strong>utilidade real</strong>, <strong>impacto verificável</strong> e <strong>propósito duradouro</strong>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nossa inovação não está apenas na tecnologia, mas na reimaginação do próprio significado de investimento cripto.
            </p>
          </CardContent>
        </Card>

        {/* Ecosystem Contribution */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="shadow-medium border-2 border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">No Ecossistema Cripto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Modelo de Referência ESG</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Inspiramos outros projetos cripto a integrar propósito social genuíno em seus tokenomics, elevando os padrões do mercado DeFi.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Padronização da Transparência</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Elevamos o nível de exigência para charity tokens, combatendo scams através do exemplo prático de auditoria e prestação de contas pública.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl">No Ecossistema Filantrópico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-accent">Nova Fonte de Financiamento</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Oferecemos um fluxo de receita perene, diversificado e descentralizado para ONGs, reduzindo dependência de doações tradicionais voláteis.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Adoção de Tecnologia</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Incentivamos a adoção da blockchain para prestação de contas no terceiro setor, modernizando e democratizando a filantropia global.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
