import Header from '@/components/header';
import Hero from '@/components/hero';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
