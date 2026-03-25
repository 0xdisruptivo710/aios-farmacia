const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <span className="font-display text-[9px] font-bold text-primary-foreground tracking-wide">
              AIOS
            </span>
          </div>
          <span className="font-display text-lg font-semibold text-foreground tracking-tight">
            AIOS
          </span>
          <div className="h-4 w-px bg-border" />
          <span className="font-body text-xs text-muted-foreground">
            Sistema de Pedidos Previsíveis
          </span>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
