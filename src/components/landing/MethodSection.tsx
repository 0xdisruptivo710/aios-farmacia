import { motion } from "framer-motion";
import { Target, MessageSquare, Database, Layers, RotateCcw, Zap } from "lucide-react";

const steps = [
  { icon: Target, title: "Aquisição Local", desc: "Tráfego pago segmentado para atrair clientes da sua região diretamente para sua farmácia." },
  { icon: MessageSquare, title: "WhatsApp Comercial", desc: "Estruturação completa do seu canal de atendimento para converter e reter." },
  { icon: Database, title: "CRM Inteligente", desc: "Cada cliente rastreado, cada fórmula registrada, cada oportunidade aproveitada." },
  { icon: Layers, title: "Segmentação por Fórmula", desc: "Comunicação personalizada para cada tipo de manipulado e perfil de cliente." },
  { icon: RotateCcw, title: "Automação de Recompra", desc: "Lembretes automáticos quando a fórmula está acabando. Recompra no piloto automático." },
  { icon: Zap, title: "Remarketing Inteligente", desc: "Alcançamos quem visitou, quem comprou e quem parou — e trazemos todos de volta." },
];

const MethodSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          Metodologia Exclusiva
        </div>
        <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">
          Sistema de <span className="text-gradient-gold">Pedidos Previsíveis™</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Um método completo, desenvolvido exclusivamente para farmácias de manipulação que querem crescer com consistência.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card shadow-card border border-border group hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodSection;
