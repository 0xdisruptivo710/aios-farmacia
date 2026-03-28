import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { sendWebhook } from "@/lib/webhook";

interface FormData {
  nome: string;
  telefone: string;
  farmacia: string;
  cidade: string;
}

const FormSection = () => {
  const [form, setForm] = useState<FormData>({
    nome: "",
    telefone: "",
    farmacia: "",
    cidade: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.telefone) return;

    setStatus("sending");

    try {
      sendWebhook("form_submit", "form_section", {
        nome: form.nome,
        telefone: form.telefone,
        farmacia: form.farmacia,
        cidade: form.cidade,
      });

      // Small delay for UX
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="formulario">
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-sage-50/60 blur-[90px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-bronze-50/40 blur-[80px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <BlurFade>
            <div>
              <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-primary mb-5">
                Diagnóstico Gratuito
              </span>
              <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-6 leading-[1.15]">
                Solicite sua{" "}
                <span className="text-primary italic">análise estratégica</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg font-light mb-8 leading-relaxed">
                Preencha o formulário e nossa equipa entrará em contacto para
                fazer um diagnóstico completo da sua farmácia — sem compromisso.
              </p>

              <div className="space-y-4">
                {[
                  "Análise de mercado da sua região",
                  "Potencial de crescimento estimado",
                  "Estratégia personalizada para sua farmácia",
                  "Sem compromisso e 100% gratuito",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(156 25% 23%)" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-body text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="mt-10 rounded-2xl overflow-hidden shadow-soft hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                  alt="Profissional de saúde em consulta estratégica"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </BlurFade>

          {/* Right: Form */}
          <BlurFade delay={0.2}>
            <MagicCard gradientColor="rgba(77, 122, 100, 0.15)">
              <div className="p-8 lg:p-10">
                {status === "success" ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      Recebemos seu pedido!
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                      Nossa equipa entrará em contacto em até 24h para agendar
                      seu diagnóstico estratégico gratuito.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                        Preencha seus dados
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        Campos com * são obrigatórios
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          htmlFor="nome"
                          className="block font-body text-sm font-medium text-foreground mb-2"
                        >
                          Nome completo *
                        </label>
                        <input
                          id="nome"
                          name="nome"
                          type="text"
                          required
                          value={form.nome}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="telefone"
                          className="block font-body text-sm font-medium text-foreground mb-2"
                        >
                          Telefone / WhatsApp *
                        </label>
                        <input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          required
                          value={form.telefone}
                          onChange={handleChange}
                          placeholder="+55 (11) 99999-9999"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="farmacia"
                          className="block font-body text-sm font-medium text-foreground mb-2"
                        >
                          Nome da farmácia
                        </label>
                        <input
                          id="farmacia"
                          name="farmacia"
                          type="text"
                          value={form.farmacia}
                          onChange={handleChange}
                          placeholder="Farmácia Exemplo"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cidade"
                          className="block font-body text-sm font-medium text-foreground mb-2"
                        >
                          Cidade
                        </label>
                        <input
                          id="cidade"
                          name="cidade"
                          type="text"
                          value={form.cidade}
                          onChange={handleChange}
                          placeholder="São Paulo, SP"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-body font-medium text-[15px] py-3.5 hover:bg-sage-800 disabled:opacity-60 transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            Solicitar Diagnóstico Gratuito
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="font-body text-[11px] text-muted-foreground/60 text-center leading-relaxed">
                        Ao enviar, você concorda em ser contactado pela equipa AIOS.
                        Seus dados estão protegidos e não serão compartilhados.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
