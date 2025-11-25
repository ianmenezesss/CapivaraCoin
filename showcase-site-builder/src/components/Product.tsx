import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Package, Heart } from "lucide-react";

const Product = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Capivara Coin: O Investimento que Protege
          </h2>
          <p className="text-xl text-muted-foreground">
            Uma criptomoeda inovadora com propósito social e ambiental intrínseco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-medium hover:shadow-strong transition-smooth hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-3">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Nosso Produto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Uma criptomoeda inovadora com um propósito social e ambiental intrínseco ao seu funcionamento. Cada transação gera impacto positivo automaticamente.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-3">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-xl">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar a filantropia transparente, permitindo que investidores contribuam para a proteção animal de forma automática, verificável e rastreável através da blockchain.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 bg-secondary/10 rounded-xl w-fit mb-3">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-xl">Nossa Visão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser a principal charity token global, sinônimo de confiança, impacto mensurável e inovação financeira verde, estabelecendo novos padrões para o mercado cripto sustentável.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 bg-primary-glow/10 rounded-xl w-fit mb-3">
                <Heart className="w-8 h-8 text-primary-glow" />
              </div>
              <CardTitle className="text-xl">Por que a Capivara?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Escolhemos este símbolo carismático nativo da América do Sul por representar harmonia com o ecossistema, convivência pacífica e biodiversidade.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* ODS 15 Section */}
        <Card className="shadow-strong bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
          <CardHeader>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-primary font-bold text-lg">ODS 15</span>
              </div>
              <CardTitle className="text-3xl md:text-4xl mb-4">Vida Terrestre e o Poder da Marca</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">Nosso Foco Direto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alinhamento total com o ODS 15: proteção de habitats naturais, combate ao tráfico de animais e programas de resgate.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Contribuição Prática</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Capivara Coin gera fundos contínuos e automáticos para ONGs através de cada transação na blockchain.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-secondary">Símbolo Carismático</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A capivara simboliza harmonia com o ecossistema, criando conexão emocional com o público global.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Product;
