import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Circle, Rocket, TrendingUp, Globe, Shield } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      phase: "Fase 1",
      title: "Desenvolvimento e Preparação",
      period: "Q1 2025",
      status: "completed",
      items: [
        "Desenvolvimento do whitepaper",
        "Criação da identidade visual",
        "Desenvolvimento do smart contract",
        "Auditoria de segurança inicial",
        "Formação da equipe core"
      ],
      icon: Shield
    },
    {
      phase: "Fase 2",
      title: "Lançamento Inicial",
      period: "Q2 2025",
      status: "in-progress",
      items: [
        "Lançamento oficial do token",
        "Listagem em exchanges descentralizadas",
        "Campanha de marketing inicial",
        "Início das parcerias ESG",
        "Ativação da DAO"
      ],
      icon: Rocket
    },
    {
      phase: "Fase 3",
      title: "Expansão",
      period: "Q3-Q4 2025",
      status: "upcoming",
      items: [
        "Listagem em exchanges centralizadas",
        "Expansão internacional",
        "Parcerias com ONGs ambientais",
        "Implementação de staking",
        "Lançamento do dashboard de impacto"
      ],
      icon: TrendingUp
    },
    {
      phase: "Fase 4",
      title: "Consolidação",
      period: "2026",
      status: "upcoming",
      items: [
        "Auditoria anual de impacto",
        "Programa de embaixadores",
        "Expansão do ecossistema DeFi",
        "Certificação ESG internacional",
        "Meta: 10.000 hectares protegidos"
      ],
      icon: Globe
    }
  ];

  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Roadmap do Projeto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As fases estratégicas para o lançamento e consolidação da Capivara Coin no mercado
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card 
                  key={index}
                  className={`shadow-medium hover:shadow-strong transition-smooth ${
                    phase.status === 'completed' ? 'border-primary/50' :
                    phase.status === 'in-progress' ? 'border-accent/50 ring-2 ring-accent/20' :
                    'border-border'
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl ${
                        phase.status === 'completed' ? 'bg-primary/20' :
                        phase.status === 'in-progress' ? 'bg-accent/20' :
                        'bg-muted'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          phase.status === 'completed' ? 'text-primary' :
                          phase.status === 'in-progress' ? 'text-accent' :
                          'text-muted-foreground'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-primary mb-1">
                          {phase.phase}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {phase.title}
                        </h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm">
                          {phase.status === 'completed' && (
                            <CheckCircle className="w-4 h-4 text-primary" />
                          )}
                          {phase.status === 'in-progress' && (
                            <Circle className="w-4 h-4 text-accent animate-pulse" />
                          )}
                          <span className="font-medium">{phase.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            phase.status === 'completed' ? 'text-primary' :
                            phase.status === 'in-progress' ? 'text-accent' :
                            'text-muted-foreground'
                          }`} />
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {phase.status === 'in-progress' && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progresso</span>
                          <span className="font-semibold text-accent">60%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-accent rounded-full transition-smooth" style={{ width: '60%' }} />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
