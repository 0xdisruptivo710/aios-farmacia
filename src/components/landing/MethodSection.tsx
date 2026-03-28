import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const methods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
    title: "Aquisição Local",
    desc: "Tráfego pago segmentado para atrair clientes da sua região diretamente para sua farmácia.",
    image: "https://plus.unsplash.com/premium_photo-1661537565000-46b8b01437ee?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Farmacêutica atendendo cliente em farmácia moderna",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 9h8M8 13h4" strokeLinecap="round" />
      </svg>
    ),
    title: "WhatsApp Comercial",
    desc: "Estruturação completa do seu canal de atendimento para converter e reter.",
    image: "https://images.unsplash.com/photo-1685586784800-42bac9c32db9?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Pessoa usando WhatsApp no smartphone",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M8 7h8M8 11h5M8 15h8" strokeLinecap="round" />
      </svg>
    ),
    title: "CRM Inteligente",
    desc: "Cada cliente rastreado, cada fórmula registrada, cada oportunidade aproveitada.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Dashboard de CRM com análise de dados",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Segmentação por Fórmula",
    desc: "Comunicação personalizada para cada tipo de manipulado e perfil de cliente.",
    image: "https://plus.unsplash.com/premium_photo-1677604592144-14aebecbbe5f?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Profissional manipulando fórmula em laboratório",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
    title: "Automação de Recompra",
    desc: "Lembretes automáticos quando a fórmula está acabando. Recompra no piloto automático.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Dashboard de automação e métricas",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Remarketing Inteligente",
    desc: "Alcançamos quem visitou, quem comprou e quem parou — e trazemos todos de volta.",
    image: "https://plus.unsplash.com/premium_photo-1725534268383-5798fcf09424?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Farmacêuticas interagindo com clientes",
  },
];

const MethodSection = () => (
  <section className="py-24 lg:py-32 bg-section-warm relative overflow-hidden">
    <div className="absolute bottom-[-10%] left-[20%] w-[350px] h-[350px] rounded-full bg-sage-50/50 blur-[90px]" />

    <div className="container relative z-10">
      <BlurFade>
        <div className="text-center mb-16">
          <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-5">
            Metodologia Exclusiva
          </span>
          <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-6">
            Sistema de{" "}
            <span className="text-gradient-bronze italic">
              Pedidos Previsíveis
            </span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Um método completo, desenvolvido exclusivamente para farmácias de
            manipulação que querem crescer com consistência.
          </p>
        </div>
      </BlurFade>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {methods.map((method, i) => (
          <BlurFade key={i} delay={0.1 + i * 0.08}>
            <MagicCard className="h-full group cursor-default">
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={method.image}
                  alt={method.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-sm">
                  {method.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {method.desc}
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
);

export default MethodSection;
