import { ArrowRight, MapPin, Clock } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { sendWebhook } from "@/lib/webhook";

const CTASection = () => (
  <section
    id="cta-final"
    className="py-28 lg:py-36 bg-section-dark relative overflow-hidden"
  >
    {/* Background beams effect */}
    <BackgroundBeams color="rgba(184, 149, 106, 0.12)" />

    {/* Decorative organic shapes */}
    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sage-600/15 blur-[120px]" />
    <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-bronze-700/8 blur-[100px]" />

    <div className="container relative z-10">
      <BlurFade>
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-sage-300/80 mb-6">
            Comece agora
          </span>
          <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-sand-100 mb-6 leading-[1.15]">
            Sua farmácia pode ser a próxima a crescer com{" "}
            <span className="italic text-bronze-300">previsibilidade</span>
          </h2>
          <p className="font-body text-sage-200/70 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Solicite seu diagnóstico estratégico gratuito e descubra como o
            Sistema de Pedidos Previsíveis pode transformar o faturamento da sua
            farmácia.
          </p>

          <a
            href="https://wa.me/351961342444?text=Ol%C3%A1%21%20Quero%20solicitar%20meu%20diagn%C3%B3stico%20estrat%C3%A9gico%20gratuito%20para%20a%20minha%20farm%C3%A1cia%20de%20manipula%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendWebhook("whatsapp_click", "cta_final", { action: "diagnostico_gratuito" })}
          >
            <ShimmerButton
              className="mx-auto text-white"
              background="hsl(32 40% 57%)"
              shimmerColor="rgba(255,255,255,0.35)"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </ShimmerButton>
          </a>

          {/* Urgency markers */}
          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sage-600/30 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-sage-300/70" />
              </div>
              <span className="font-body text-sm text-sage-300/60">
                Vagas limitadas por região
              </span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-sage-400/30" />
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sage-600/30 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 text-sage-300/70" />
              </div>
              <span className="font-body text-sm text-sage-300/60">
                Apenas 1 farmácia por bairro
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-md mx-auto font-body text-sm text-sage-400/50 leading-relaxed">
            Para garantir exclusividade e evitar conflitos de mercado, trabalhamos
            com um número limitado de farmácias por região. Verifique se sua área
            ainda está disponível.
          </p>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default CTASection;
