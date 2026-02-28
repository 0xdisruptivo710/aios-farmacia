import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, UserX, Tag } from "lucide-react";

const painPoints = [
  { icon: TrendingDown, text: "Poucos pedidos por dia e faturamento imprevisível" },
  { icon: Clock, text: "Movimentação irregular — dias bons e dias péssimos" },
  { icon: UserX, text: "Clientes que compram uma vez e nunca mais retornam" },
  { icon: AlertTriangle, text: "Falta de previsibilidade para planejar crescimento" },
  { icon: Tag, text: "Promoções constantes que corroem sua margem" },
];

const PainSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">
          Se sua farmácia depende apenas de indicação médica,{" "}
          <span className="text-primary">você está deixando dinheiro na mesa.</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Esses são os sinais de que sua farmácia precisa de um sistema de captação profissional:
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-4">
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-lg bg-card shadow-card border border-border"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
              <point.icon className="w-5 h-5 text-destructive" />
            </div>
            <p className="text-foreground font-medium pt-1.5">{point.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
