import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { sendWebhook } from "@/lib/webhook";

const ValueSection = () => (
  <section className="py-24 lg:py-32 bg-section-warm relative overflow-hidden">
    <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-bronze-50/40 blur-[90px]" />

    <div className="container relative z-10">
      <BlurFade>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-5">
              Investimento
            </span>
            <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-4">
              Faça as contas:{" "}
              <span className="text-gradient-bronze italic">
                o retorno é inevitável
              </span>
            </h2>
          </div>

          <MagicCard gradientColor="rgba(184, 149, 106, 0.15)">
            <div className="p-8 lg:p-10">
              <div className="space-y-8">
                {/* Value proposition 1 */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-bronze-50 border border-bronze-100 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(32 40% 57%)" strokeWidth="1.5">
                      <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" />
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Um cliente recorrente vale milhares por ano
                    </h3>
                    <p className="font-body text-muted-foreground text-[15px] leading-relaxed">
                      Um único cliente de manipulação pode gastar de R$ 200 a R$ 800
                      por mês em fórmulas. Em 12 meses, isso significa de{" "}
                      <strong className="text-foreground font-medium">
                        R$ 2.400 a R$ 9.600
                      </strong>{" "}
                      por cliente.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-border" />

                {/* Value proposition 2 */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(156 25% 23%)" strokeWidth="1.5">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Se o sistema trouxer apenas 10 novos clientes recorrentes por mês...
                    </h3>
                    <p className="font-body text-muted-foreground text-[15px] leading-relaxed">
                      Estamos falando de um potencial de{" "}
                      <strong className="text-foreground font-medium">
                        R$ 24.000 a R$ 96.000
                      </strong>{" "}
                      em faturamento anual adicional. O investimento se paga já nas
                      primeiras semanas.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-border" />

                {/* Price */}
                <div className="rounded-2xl bg-background border border-primary/10 p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <p className="font-body text-[11px] text-muted-foreground mb-4 tracking-[0.2em] uppercase font-medium">
                    Investimento mensal
                  </p>
                  <p className="font-display text-5xl lg:text-6xl font-semibold text-foreground mb-3">
                    R$ 3.500
                  </p>
                  <p className="font-body text-sm text-muted-foreground font-light mb-8">
                    Menos que o lucro de{" "}
                    <strong className="text-foreground font-medium">
                      5 clientes recorrentes
                    </strong>{" "}
                    por mês.
                  </p>

                  <a
                    href="https://wa.me/351961342444?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20investimento%20no%20sistema%20de%20Pedidos%20Previs%C3%ADveis%20para%20minha%20farm%C3%A1cia."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendWebhook("whatsapp_click", "value_section", { action: "quero_comecar" })}
                  >
                    <ShimmerButton className="mx-auto text-white" shimmerColor="rgba(255,255,255,0.3)">
                      Quero Começar Agora
                      <ArrowRight className="w-4 h-4" />
                    </ShimmerButton>
                  </a>
                </div>
              </div>
            </div>
          </MagicCard>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default ValueSection;
