import { motion } from "framer-motion";
import { DollarSign, ArrowRight } from "lucide-react";

const ValueSection = () =>
<section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">
            Faça as contas: <span className="text-primary text-4xl">o retorno é inevitável</span>
          </h2>
        </div>

        <div className="bg-card rounded-2xl shadow-elevated border border-border p-8 lg:p-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Um cliente recorrente vale milhares por ano</h3>
                <p className="text-muted-foreground text-sm">
                  Um único cliente de manipulação pode gastar de R$ 200 a R$ 800 por mês em fórmulas. Em 12 meses, isso significa de <strong className="text-foreground">R$ 2.400 a R$ 9.600</strong> por cliente.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Se o sistema trouxer apenas 10 novos clientes recorrentes por mês...</h3>
                <p className="text-muted-foreground text-sm">
                  Estamos falando de um potencial de <strong className="text-foreground">R$ 24.000 a R$ 96.000</strong> em faturamento anual adicional. O investimento se paga já nas primeiras semanas.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-border" />

            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Investimento mensal</p>
              <p className="text-4xl font-serif text-primary font-bold">R$ 3.500</p>
              <p className="text-sm text-muted-foreground mt-2">
                Menos que o lucro de <strong className="text-foreground">5 clientes recorrentes</strong> por mês.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;


export default ValueSection;