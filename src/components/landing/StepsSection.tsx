import { motion } from "framer-motion";

const steps = [
{ num: "01", title: "Diagnóstico Estratégico", desc: "Analisamos sua farmácia, região, concorrência e potencial de crescimento." },
{ num: "02", title: "Estruturação das Campanhas", desc: "Criamos campanhas de tráfego pago segmentadas para sua cidade e público." },
{ num: "03", title: "Implantação do CRM", desc: "Organizamos sua base de clientes e configuramos automações de follow-up." },
{ num: "04", title: "Ativação da Base", desc: "Reativamos clientes antigos com campanhas inteligentes de recompra." },
{ num: "05", title: "Otimização Semanal", desc: "Acompanhamento contínuo para maximizar resultados toda semana." }];


const StepsSection = () =>
<section className="py-20 lg:py-28 bg-navy text-navy-foreground">
    <div className="container">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14">

        <h2 className="text-3xl lg:text-4xl font-serif mb-4">
          Como funciona <span className="text-gradient-gold">na prática</span>
        </h2>
        <p className="text-navy-foreground/70 text-lg max-w-xl mx-auto font-light">Um processo claro e estruturado do diagnóstico ao crescimento contínuo.

      </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {steps.map((step, i) =>
      <motion.div
        key={i}
        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="flex items-start gap-6 p-6 rounded-xl bg-navy-foreground/5 border border-navy-foreground/10">

            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-cta-gradient flex items-center justify-center">
              <span className="text-gold-foreground font-bold text-lg">{step.num}</span>
            </div>
            <div>
              <h3 className="font-semibold text-navy-foreground text-lg mb-1">{step.title}</h3>
              <p className="text-navy-foreground/60 text-sm">{step.desc}</p>
            </div>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default StepsSection;