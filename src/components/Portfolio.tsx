import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type Category = 'all' | 'drawing' | 'painting' | 'sculpture' | 'digital';

interface Work {
  id: number;
  title: string;
  student: string;
  category: Category;
  image: string;
  year: string;
}

const works: Work[] = [
  {
    id: 1,
    title: 'Осенний пейзаж',
    student: 'Анна М., 8 класс',
    category: 'painting',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/4bae2b2c-e13f-432c-afc2-42dad9e86a1b.jpg',
    year: '2024'
  },
  {
    id: 2,
    title: 'Портрет в технике гризайль',
    student: 'Дмитрий К., 10 класс',
    category: 'drawing',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/67ff614c-9edf-4777-90c8-7bcaf4e75acb.jpg',
    year: '2024'
  },
  {
    id: 3,
    title: 'Абстрактная композиция',
    student: 'Мария С., 9 класс',
    category: 'digital',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/4bae2b2c-e13f-432c-afc2-42dad9e86a1b.jpg',
    year: '2023'
  },
  {
    id: 4,
    title: 'Натюрморт с фруктами',
    student: 'Елена В., 7 класс',
    category: 'painting',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/67ff614c-9edf-4777-90c8-7bcaf4e75acb.jpg',
    year: '2023'
  },
  {
    id: 5,
    title: 'Городской скетч',
    student: 'Иван П., 11 класс',
    category: 'drawing',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/4bae2b2c-e13f-432c-afc2-42dad9e86a1b.jpg',
    year: '2024'
  },
  {
    id: 6,
    title: 'Скульптурная композиция',
    student: 'Ольга Т., 9 класс',
    category: 'sculpture',
    image: 'https://cdn.poehali.dev/projects/4a709841-d94e-4fa2-9b9f-d6b9ffd56fb9/files/67ff614c-9edf-4777-90c8-7bcaf4e75acb.jpg',
    year: '2023'
  }
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { id: 'all' as Category, label: 'Все работы' },
    { id: 'drawing' as Category, label: 'Рисунок' },
    { id: 'painting' as Category, label: 'Живопись' },
    { id: 'sculpture' as Category, label: 'Скульптура' },
    { id: 'digital' as Category, label: 'Цифровое искусство' }
  ];

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Портфолио <span className="text-primary">работ учеников</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Лучшие творческие проекты моих учеников. Каждая работа отражает индивидуальный подход и творческое развитие.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => (
            <Card key={work.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                    <p className="text-sm text-gray-200">{work.student}</p>
                    <p className="text-xs text-gray-300 mt-1">{work.year}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
