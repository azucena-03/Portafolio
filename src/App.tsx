import AboutMe from "./sections/AboutMe"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Merque from "./sections/Merque"
import Projects from "./sections/Projects"

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Merque />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
