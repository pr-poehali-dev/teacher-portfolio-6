import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Педагог высшей категории</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Вдохновляю учиться,{' '}
              <span className="text-primary">развиваться</span> и{' '}
              <span className="text-secondary">творить</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              15+ лет опыта в образовании. Помогаю раскрыть творческий потенциал каждого ученика через инновационные методы обучения и индивидуальный подход.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} className="gap-2">
                <Icon name="Mail" size={20} />
                Связаться со мной
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Посмотреть работы
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Выпускников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Публикаций</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/e5ac4087-8edb-43c6-b71b-3ce19ba911d1.jpg"
              alt="Портфолио педагога"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
