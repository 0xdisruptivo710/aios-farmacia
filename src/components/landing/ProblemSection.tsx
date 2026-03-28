import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" />
      </svg>
    ),
    title: "Aquisição Local",
    desc: "Estratégia de aquisição local estruturada para atrair clientes da região",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M8 7h8M8 11h5M8 15h8" strokeLinecap="round" />
      </svg>
    ),
    title: "CRM Organizado",
    desc: "CRM organizado para acompanhar cada cliente e sua jornada de compra",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
    title: "Estratégia de Recompra",
    desc: "Estratégia de recompra para fórmulas recorrentes e receitas contínuas",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Remarketing Ativo",
    desc: "Remarketing ativo para reativar clientes inativos e recuperar vendas",
  },
];

const ProblemSection = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-sage-50/70 blur-[90px]" />

    <div className="container relative z-10">
      <BlurFade>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-primary mb-5">
            Diagnóstico
          </span>
          <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-6 leading-[1.15]">
            O problema{" "}
            <span className="text-primary italic">não é falta de clientes.</span>
            <br />
            É falta de sistema.
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto font-light">
            A maioria das farmácias de manipulação não possui os elementos
            fundamentais para crescer com consistência:
          </p>
        </div>
      </BlurFade>

      <div className="max-w-4xl mx-auto grid gap-5 sm:grid-cols-2">
        {problems.map((problem, i) => (
          <BlurFade key={i} delay={0.1 + i * 0.1}>
            <MagicCard
              className="h-full"
              gradientColor="rgba(185, 50, 50, 0.12)"
            >
              <div className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border border-destructive/15 bg-destructive/5 flex items-center justify-center shrink-0 text-destructive/60">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">
                    {problem.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.6}>
        <div className="mt-14 max-w-2xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80"
              alt="Cápsulas e medicamentos manipulados"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sage-900/80 to-sage-900/40 flex items-center px-8">
              <p className="font-body text-white/90 text-[15px] leading-relaxed max-w-md">
                Sem essas peças, você continua refém da indicação médica e do acaso.{" "}
                <span className="text-bronze-200 font-medium">É hora de mudar essa realidade.</span>
              </p>
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default ProblemSection;
