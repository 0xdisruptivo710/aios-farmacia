import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const methods = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Aquisição Local",
    desc: "Tráfego pago segmentado para atrair clientes da sua região diretamente para sua farmácia.",
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "WhatsApp Comercial",
    desc: "Estruturação completa do seu canal de atendimento para converter e reter.",
    color: "bg-green-500/10",
    iconColor: "text-green-600",
    accent: "from-green-500/20 to-transparent",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 3v18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="15" cy="12" r="1" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    title: "CRM Inteligente",
    desc: "Cada cliente rastreado, cada fórmula registrada, cada oportunidade aproveitada.",
    color: "bg-blue-500/10",
    iconColor: "text-blue-600",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="4" width="6" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="8" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 10v4M12 8v8M19 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Segmentação por Fórmula",
    desc: "Comunicação personalizada para cada tipo de manipulado e perfil de cliente.",
    color: "bg-purple-500/10",
    iconColor: "text-purple-600",
    accent: "from-purple-500/20 to-transparent",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 10l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 10h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automação de Recompra",
    desc: "Lembretes automáticos quando a fórmula está acabando. Recompra no piloto automático.",
    color: "bg-amber-500/10",
    iconColor: "text-amber-600",
    accent: "from-amber-500/20 to-transparent",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 22v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 5v4M15 7h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Remarketing Inteligente",
    desc: "Alcançamos quem visitou, quem comprou e quem parou — e trazemos todos de volta.",
    color: "bg-rose-500/10",
    iconColor: "text-rose-600",
    accent: "from-rose-500/20 to-transparent",
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
              <div className="p-7 relative overflow-hidden">
                {/* Gradient accent top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.accent}`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center mb-5 ${method.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>

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
