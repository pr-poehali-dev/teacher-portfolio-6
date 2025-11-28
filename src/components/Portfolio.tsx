import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const categories = ['Все работы', 'Живопись', 'Графика', 'Скульптура', 'Цифровое искусство'];

const works = [
  {
    id: 1,
    title: 'Городской пейзаж',
    student: 'Анна Иванова, 10 класс',
    category: 'Живопись',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/b8812b3f-123b-4977-934b-923ea9e34dee.jpg',
    award: 'Диплом I степени',
  },
  {
    id: 2,
    title: 'Абстрактная композиция',
    student: 'Петр Сидоров, 9 класс',
    category: 'Цифровое искусство',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/b8812b3f-123b-4977-934b-923ea9e34dee.jpg',
  },
  {
    id: 3,
    title: 'Портрет',
    student: 'Мария Петрова, 11 класс',
    category: 'Графика',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/b8812b3f-123b-4977-934b-923ea9e34dee.jpg',
    award: 'Лауреат конкурса',
  },
  {
    id: 4,
    title: 'Натюрморт',
    student: 'Иван Козлов, 8 класс',
    category: 'Живопись',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/b8812b3f-123b-4977-934b-923ea9e34dee.jpg',
  },
  {
    id: 5,
    title: 'Фантазия',
    student: 'Ольга Смирнова, 10 класс',
    category: 'Скульптура',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/b8812b3f-123b-4977-934b-923ea9e34dee.jpg',
  },
  {
    id: 6,
    title: 'Природа',
    student: 'Алексей Волков, 9 класс',
    category: 'Графика',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/b8812b3f-123b-4977-934b-923ea9e34dee.jpg',
    award: 'Диплом II степени',
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все работы');

  const filteredWorks = selectedCategory === 'Все работы'
    ? works
    : works.filter(work => work.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white">
            Портфолио
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Работы <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">учеников</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Творческие достижения и успехи моих талантливых учеников
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-gradient-to-r from-primary to-accent' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <Card key={work.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2">
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {work.award && (
                  <Badge className="absolute top-4 right-4 bg-secondary">
                    <Icon name="Award" size={16} className="mr-1" />
                    {work.award}
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-muted-foreground mb-3">{work.student}</p>
                <Badge variant="outline" className="border-primary text-primary">
                  {work.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
