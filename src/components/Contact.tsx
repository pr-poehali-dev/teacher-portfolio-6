import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">со мной</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Открыта для сотрудничества, консультаций и новых проектов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">teacher@school.edu</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-accent to-secondary rounded-lg">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-secondary to-primary rounded-lg">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">Школа №1, г. Москва</p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white hover:border-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-accent hover:text-white hover:border-accent">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-secondary hover:text-white hover:border-secondary">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white hover:border-primary">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>

          <Card className="p-8 border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Имя</label>
                <Input placeholder="Ваше имя" className="border-2" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" className="border-2" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea 
                  placeholder="Напишите ваше сообщение..." 
                  className="min-h-[150px] border-2"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90"
                size="lg"
              >
                Отправить сообщение
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
