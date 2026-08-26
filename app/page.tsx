import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col justify-between">
      {/* Floating Pill Navigation */}
      <Nav />

      {/* Main Content Sections */}
      <div className="flex-1 w-full">
        {/* Section 1: Work / Hero */}
        <Hero />

        {/* Section 2: Projects */}
        <Projects />

        {/* Section 3: Experience */}
        <Experience />

        {/* Section 4: Education */}
        <Education />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
