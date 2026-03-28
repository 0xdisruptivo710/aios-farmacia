import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
  {
    target: 327,
    prefix: "+",
    suffix: "%",
    label: "aumento médio em pedidos",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    target: 47,
    prefix: "",
    suffix: "",
    label: "farmácias atendidas",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    target: 2.8,
    prefix: "R$ ",
    suffix: "M",
    label: "faturamento gerado",
    decimals: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    target: 94,
    prefix: "",
    suffix: "%",
    label: "taxa de renovação",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Dra. Camila Rezende",
    role: "Farmácia Essência Viva — São Paulo, SP",
    text: "Em 3 meses, triplicamos os pedidos mensais. O sistema de recompra automática mudou completamente nosso faturamento.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Dr. Ricardo Almeida",
    role: "Farmácia Magistral Plus — Curitiba, PR",
    text: "Nunca imaginei que o CRM faria tanta diferença. Agora cada cliente é acompanhado e não perde nenhuma fórmula.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Dra. Fernanda Lima",
    role: "Farmácia Natural Care — Belo Horizonte, MG",
    text: "O remarketing trouxe de volta clientes que não compravam há meses. É impressionante como o sistema funciona.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?auto=format&fit=crop&w=150&q=80",
  },
];

const ResultsSection = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1696861286643-341a8d7a79e9?auto=format&fit=crop&w=1920&q=80"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-sage-900/92" />
    </div>

    <div className="container relative z-10">
      <BlurFade>
        <div className="text-center mb-16">
          <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-bronze-300/80 mb-5">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-white mb-6 leading-[1.15]">
            Números que falam{" "}
            <span className="italic text-bronze-300">por si</span>
          </h2>
        </div>
      </BlurFade>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
        {stats.map((stat, i) => (
          <BlurFade key={i} delay={0.1 + i * 0.1}>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-400">
              <div className="w-12 h-12 rounded-xl bg-bronze-400/15 flex items-center justify-center mx-auto mb-4 text-bronze-300">
                {stat.icon}
              </div>
              <AnimatedCounter
                target={stat.target}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={(stat as any).decimals || 0}
                className="font-display text-4xl lg:text-5xl font-bold text-white block mb-2"
              />
              <span className="font-body text-sm text-white/50">{stat.label}</span>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Testimonials */}
      <BlurFade delay={0.5}>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-400"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="rgb(234, 179, 8)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <p className="font-body text-sm font-medium text-white">{t.name}</p>
                  <p className="font-body text-[11px] text-white/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  </section>
);

export default ResultsSection;
