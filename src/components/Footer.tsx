const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Портфолио учителя
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Вдохновляем и развиваем таланты через творчество и современное образование
          </p>
          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
