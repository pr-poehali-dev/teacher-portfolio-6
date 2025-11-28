import Icon from '@/components/ui/icon';

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="GraduationCap" className="text-primary" size={28} />
              <span className="text-lg font-bold">Портфолио педагога</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Вдохновляю учеников на творческое развитие и достижение новых высот в искусстве.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#publications" className="text-muted-foreground hover:text-primary transition-colors">
                  Публикации
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                teacher@example.com
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (900) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                г. Москва
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Портфолио педагога. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
