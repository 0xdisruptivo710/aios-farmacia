import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-20 lg:py-28 bg-teal-light">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">
          Nossa Garantia de <span className="text-primary">Implementação Total</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Garantimos a implementação completa de todo o sistema — campanhas, CRM, automações e acompanhamento estratégico semanal. Se em 30 dias você sentir que não recebeu tudo o que foi prometido, devolvemos 100% do seu investimento.
        </p>
        <p className="text-foreground font-semibold">
          Sem letras miúdas. Sem burocracia. Sem risco para você.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
