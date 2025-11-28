import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Publication {
  id: number;
  title: string;
  description: string;
  date: string;
  type: string;
  link: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Инновационные методы развития творческого мышления',
    description: 'Статья о современных подходах к развитию креативности у школьников через художественное образование.',
    date: 'Октябрь 2024',
    type: 'Статья',
    link: '#'
  },
  {
    id: 2,
    title: 'Цифровые технологии в преподавании искусства',
    description: 'Исследование эффективности использования цифровых инструментов в художественном образовании.',
    date: 'Сентябрь 2024',
    type: 'Исследование',
    link: '#'
  },
  {
    id: 3,
    title: 'Индивидуальный подход в творческом развитии',
    description: 'Методические рекомендации по работе с учениками разного уровня подготовки.',
    date: 'Июль 2024',
    type: 'Методичка',
    link: '#'
  },
  {
    id: 4,
    title: 'Психология детского творчества',
    description: 'Анализ психологических аспектов творческого процесса у детей и подростков.',
    date: 'Май 2024',
    type: 'Статья',
    link: '#'
  }
];

export const Publications = () => {
  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Публикации и <span className="text-primary">статьи</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Делюсь опытом и исследованиями в области педагогики и художественного образования.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {publications.map((pub) => (
            <Card key={pub.id} className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-secondary/20 text-secondary rounded-full">
                      {pub.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{pub.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {pub.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto gap-2">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
