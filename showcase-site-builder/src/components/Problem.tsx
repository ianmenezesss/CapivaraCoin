import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, TrendingDown, TrendingUp } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            A Lacuna entre Boas Intenções e Impacto Real
          </h2>
          <p className="text-xl text-muted-foreground">
            Identificamos dois problemas críticos no mercado atual
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-medium hover:shadow-strong transition-smooth border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-destructive/10 rounded-xl">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Problema 1: Filantropia Tradicional</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Desconfiança e opacidade dominam o cenário das doações. Como garantir que o dinheiro realmente chega ao destino pretendido?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A falta de transparência afasta potenciais doadores e reduz o impacto das iniciativas sociais.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-destructive/10 rounded-xl">
                  <TrendingDown className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Problema 2: Mercado Cripto</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Excesso de projetos especulativos sem propósito claro inunda o mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Investidores buscam não apenas retorno financeiro, mas também significado e impacto real em suas escolhas de investimento.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Opportunity */}
        <Card className="shadow-strong bg-gradient-to-br from-primary to-accent text-primary-foreground border-0 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-primary-foreground/10 rounded-xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <CardTitle className="text-3xl">A Oportunidade</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <p className="text-lg leading-relaxed">
              O mercado global de investimentos ESG ultrapassou <strong>US$ 35 trilhões</strong> em 2020 e continua em expansão acelerada.
            </p>
            <p className="text-lg leading-relaxed">
              As novas gerações não querem apenas lucro — elas exigem <strong>propósito, transparência e responsabilidade social</strong>.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Problem;
