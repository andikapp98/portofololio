import {
  Navbar,
  Hero,
  Skills,
  Projects,
  Contact,
  SnakeSection,
  Footer,
} from "@/components";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SnakeSection />
      <Footer />
    </main>
  );
}
