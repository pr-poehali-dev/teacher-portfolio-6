import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;