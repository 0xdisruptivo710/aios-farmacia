import { BlurFade } from "@/components/ui/blur-fade";

const GuaranteeSection = () => (
  <section className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-sage-100/50" />

    <div className="container relative z-10">
      <BlurFade>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-card border border-primary/15 p-10 lg:p-14 shadow-soft relative overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />

            <div className="text-center">
              {/* Shield SVG icon */}
              <div className="w-20 h-20 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-8">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                    fill="hsl(156 25% 23%)"
                    opacity="0.15"
                  />
                  <path
                    d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                    stroke="hsl(156 25% 23%)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="hsl(156 25% 23%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="text-3xl lg:text-4xl font-display font-semibold text-foreground mb-6 leading-[1.2]">
                Nossa Garantia de{" "}
                <span className="text-primary italic">Implementação Total</span>
              </h2>
              <p className="font-body text-muted-foreground text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                Garantimos a implementação completa de todo o sistema — campanhas,
                CRM, automações e acompanhamento estratégico semanal. Se em 30 dias
                você sentir que não recebeu tudo o que foi prometido, devolvemos
                100% do seu investimento.
              </p>

              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 max-w-md mx-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(156 25% 23%)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" />
                  <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-body text-foreground font-medium text-[15px]">
                  Sem letras miúdas. Sem burocracia. Sem risco para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default GuaranteeSection;
