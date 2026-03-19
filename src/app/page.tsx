import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Accomplishments from "@/components/Accomplishments";
import Specializations from "@/components/Specializations";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Accomplishments />
      <Specializations />
      <Contact />
    </main>
  );
}
