import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="cta-final" className="py-20 lg:py-28 bg-hero-gradient text-navy-foreground">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl lg:text-5xl font-serif mb-6">
          Sua farmácia pode ser a próxima a crescer com{" "}
          <span className="text-gradient-gold">previsibilidade</span>
        </h2>
        <p className="text-navy-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Solicite seu diagnóstico estratégico gratuito e descubra como o Sistema de Pedidos Previsíveis™ pode transformar o faturamento da sua farmácia.
        </p>

        <motion.a
          href="https://wa.me/5500000000000?text=Olá! Quero solicitar meu diagnóstico estratégico gratuito."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-cta-gradient text-gold-foreground font-bold px-10 py-5 rounded-xl text-lg shadow-cta animate-pulse-glow"
        >
          Solicitar Diagnóstico Estratégico Gratuito
          <ArrowRight className="w-5 h-5" />
        </motion.a>

        {/* Urgency elements */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center text-navy-foreground/60">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-gold" />
            <span>Vagas limitadas por região</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-gold" />
            <span>Atendemos apenas 1 farmácia por bairro</span>
          </div>
        </div>

        <p className="mt-6 text-sm text-navy-foreground/50 max-w-md mx-auto">
          Para garantir exclusividade e evitar conflitos de mercado, trabalhamos com um número limitado de farmácias por região. Verifique se sua área ainda está disponível.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
