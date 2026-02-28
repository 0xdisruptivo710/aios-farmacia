import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const problems = [
  "Estratégia de aquisição local estruturada",
  "CRM organizado para acompanhar cada cliente",
  "Estratégia de recompra para fórmulas recorrentes",
  "Remarketing ativo para reativar clientes inativos",
];

const ProblemSection = () => (
  <section className="py-20 lg:py-28 bg-navy text-navy-foreground">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-serif mb-4">
          O problema <span className="text-gradient-gold">não é falta de clientes.</span>
          <br />É falta de sistema.
        </h2>
        <p className="text-navy-foreground/70 text-lg">
          A maioria das farmácias de manipulação não possui os elementos fundamentais para crescer com consistência:
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto grid gap-4 sm:grid-cols-2">
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-3 p-5 rounded-lg bg-navy-foreground/5 border border-navy-foreground/10"
          >
            <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
            <span className="text-navy-foreground/90 font-medium text-sm">{problem}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-10 text-navy-foreground/60 max-w-xl mx-auto"
      >
        Sem essas peças, você continua refém da indicação médica e do acaso. É hora de mudar essa realidade.
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
