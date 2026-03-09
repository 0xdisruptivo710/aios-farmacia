import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const CTASection = () => (
  <section
    id="cta-final"
    className="py-28 lg:py-36 bg-section-dark relative overflow-hidden"
  >
    {/* Decorative organic shapes */}
    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sage-600/20 blur-[120px]" />
    <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-bronze-700/10 blur-[100px]" />

    {/* Thin ornamental line */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-3 origin-center"
    >
      <div className="h-px w-16 bg-sage-500/30" />
      <div className="w-1.5 h-1.5 rounded-full bg-bronze-400/40" />
      <div className="h-px w-16 bg-sage-500/30" />
    </motion.div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center"
      >
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

        <motion.a
          href="https://wa.me/351961342444?text=Ol%C3%A1%21%20Quero%20solicitar%20meu%20diagn%C3%B3stico%20estrat%C3%A9gico%20gratuito%20para%20a%20minha%20farm%C3%A1cia%20de%20manipula%C3%A7%C3%A3o."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center gap-3 bg-accent text-accent-foreground font-body font-medium px-10 py-4 rounded-full text-[15px] tracking-wide shadow-lifted hover:bg-bronze-600 transition-all duration-500"
        >
          Solicitar Diagnóstico Gratuito
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>

        {/* Urgency markers */}
        <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-sage-300/60" />
            <span className="font-body text-sm text-sage-300/60">
              Vagas limitadas por região
            </span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-sage-400/30" />
          <div className="flex items-center gap-2.5">
            <Clock className="w-3.5 h-3.5 text-sage-300/60" />
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
      </motion.div>
    </div>
  </section>
);

export default CTASection;
