import About from "./components/about/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <main className="bg-black text-[#EDEDED] w-full h-full">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default App;