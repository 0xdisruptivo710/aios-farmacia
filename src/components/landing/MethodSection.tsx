import { motion } from "framer-motion";
import {
  Target,
  MessageSquare,
  Database,
  Layers,
  RotateCcw,
  Zap,
} from "lucide-react";

const methods = [
  {
    icon: Target,
    title: "Aquisição Local",
    desc: "Tráfego pago segmentado para atrair clientes da sua região diretamente para sua farmácia.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Comercial",
    desc: "Estruturação completa do seu canal de atendimento para converter e reter.",
  },
  {
    icon: Database,
    title: "CRM Inteligente",
    desc: "Cada cliente rastreado, cada fórmula registrada, cada oportunidade aproveitada.",
  },
  {
    icon: Layers,
    title: "Segmentação por Fórmula",
    desc: "Comunicação personalizada para cada tipo de manipulado e perfil de cliente.",
  },
  {
    icon: RotateCcw,
    title: "Automação de Recompra",
    desc: "Lembretes automáticos quando a fórmula está acabando. Recompra no piloto automático.",
  },
  {
    icon: Zap,
    title: "Remarketing Inteligente",
    desc: "Alcançamos quem visitou, quem comprou e quem parou — e trazemos todos de volta.",
  },
];

const MethodSection = () => (
  <section className="py-24 lg:py-32 bg-section-warm relative overflow-hidden">
    <div className="absolute bottom-[-10%] left-[20%] w-[350px] h-[350px] rounded-full bg-sage-50/50 blur-[90px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
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
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {methods.map((method, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative p-7 rounded-lg bg-card border border-border shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          >
            {/* Bronze top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent group-hover:via-accent/70 transition-all duration-500" />

            <div className="w-10 h-10 rounded-lg bg-sage-50 border border-sage-100 flex items-center justify-center mb-5 group-hover:bg-sage-100 transition-colors duration-300">
              <method.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {method.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {method.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodSection;
