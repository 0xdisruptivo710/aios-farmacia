import { BlurFade } from "@/components/ui/blur-fade";

const painPoints = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
    text: "Poucos pedidos por dia e faturamento imprevisível",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12h4l3-9 6 18 3-9h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Movimentação irregular — dias bons e dias péssimos",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    text: "Clientes que compram uma vez e nunca mais retornam",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    text: "Falta de previsibilidade para planejar crescimento",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 7l10 10M17 7L7 17" strokeLinecap="round" />
      </svg>
    ),
    text: "Promoções constantes que corroem sua margem",
  },
];

const PainSection = () => (
  <section className="py-24 lg:py-32 bg-section-warm relative overflow-hidden">
    <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-sand-100/60 blur-[80px]" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div>
          <BlurFade delay={0}>
            <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-5">
              O problema
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-6 leading-[1.15]">
              Se sua farmácia depende apenas de indicação médica,{" "}
              <span className="text-destructive italic">
                você está deixando dinheiro na mesa
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="font-body text-muted-foreground text-lg font-light mb-10">
              Reconhece algum desses sinais?
            </p>
          </BlurFade>

          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <BlurFade key={i} delay={0.3 + i * 0.1}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/80 border border-destructive/10 hover:border-destructive/25 transition-all duration-400 group">
                  <div className="w-10 h-10 rounded-lg bg-destructive/8 flex items-center justify-center shrink-0 text-destructive/70 group-hover:bg-destructive/12 transition-colors">
                    {point.icon}
                  </div>
                  <p className="font-body text-foreground/80 text-[15px] leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {point.text}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <BlurFade delay={0.3} className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lifted">
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
              alt="Farmacêutica organizando medicamentos"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/40 to-transparent" />

            {/* Overlay stat card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(0 40% 45%)" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">73% das farmácias</p>
                  <p className="font-body text-xs text-muted-foreground">não têm sistema de recompra ativo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating pharmacy cross */}
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="9" y="3" width="6" height="18" rx="1" fill="hsl(156 25% 23%)" opacity="0.6" />
              <rect x="3" y="9" width="18" height="6" rx="1" fill="hsl(156 25% 23%)" opacity="0.6" />
            </svg>
          </div>
        </BlurFade>
      </div>
    </div>
  </section>
);

export default PainSection;
