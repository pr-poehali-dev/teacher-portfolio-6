import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-medium">
                Учитель года 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Вдохновляем <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                будущее
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Создаю пространство для творческого развития и самовыражения учеников через искусство и современные технологии
            </p>
            
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Посмотреть работы
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">учеников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">наград</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-30" />
            <img
              src="https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/575b77bd-235a-47f0-a1f7-a7acb291d63e.jpg"
              alt="Портфолио учителя"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

