import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--canvas)] font-[family-name:var(--font-body)] text-[var(--ink)]">
      <TopNav
        brand="Emil Manninen"
        links={navLinks}
        secondary={{ label: "Contact", href: "#contact" }}
        primary={{ label: "Download CV", href: "#contact" }}
      />

      <main className="max-w-[var(--container-max)] mx-auto px-[30px]">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
