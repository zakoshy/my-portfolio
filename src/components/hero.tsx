import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-card">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
          Biomedical Engineer & Fullstack Developer
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Bridging the gap between healthcare and technology. I build innovative digital solutions that make a difference. Welcome to my portfolio.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="#projects">
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
