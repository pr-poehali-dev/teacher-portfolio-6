import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const publications = [
  {
    id: 1,
    title: 'Современные методы преподавания изобразительного искусства',
    journal: 'Педагогический вестник',
    date: '2024',
    type: 'Статья',
    link: '#',
  },
  {
    id: 2,
    title: 'Развитие креативности через цифровые технологии',
    journal: 'Инновации в образовании',
    date: '2024',
    type: 'Исследование',
    link: '#',
  },
  {
    id: 3,
    title: 'Интеграция традиционного и современного искусства в школе',
    journal: 'Искусство и образование',
    date: '2023',
    type: 'Статья',
    link: '#',
  },
  {
    id: 4,
    title: 'Методическое пособие по работе с одаренными детьми',
    journal: 'Методист',
    date: '2023',
    type: 'Пособие',
    link: '#',
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-accent to-secondary text-white">
            Научная деятельность
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Публикации и <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">статьи</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Делюсь опытом и исследованиями в области современного образования
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {publications.map((pub) => (
            <Card key={pub.id} className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="border-accent text-accent">
                  {pub.type}
                </Badge>
                <span className="text-sm text-muted-foreground">{pub.date}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">{pub.title}</h3>
              
              <p className="text-muted-foreground mb-4 flex items-center gap-2">
                <Icon name="BookOpen" size={16} />
                {pub.journal}
              </p>
              
              <Button variant="ghost" className="gap-2 hover:text-accent">
                Читать далее
                <Icon name="ExternalLink" size={16} />
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50" />
                <img
                  src="https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/44ac0e0b-591a-4737-8692-4467a94702ad.jpg"
                  alt="Публикации"
                  className="relative w-48 h-48 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">Приглашаю к сотрудничеству</h3>
                <p className="text-muted-foreground mb-4">
                  Открыта для совместных проектов, публикаций и обмена опытом с коллегами из других учебных заведений
                </p>
                <Button className="bg-gradient-to-r from-primary to-accent">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Написать
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
