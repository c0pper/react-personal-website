import TopBar from './components/TopBar'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import styles from './style'

const App = () => (
  <div className="w-full overflow-hidden relative">
    <TopBar />
    {/* <Hero sectionColor="dark-section-bg" /> */}
    <About sectionColor="light-section-bg" />
    <Skills sectionColor="dark-section-bg" />
    <Resume sectionColor="light-section-bg" />
    <Projects sectionColor="dark-section-bg" />
    <Testimonials sectionColor="light-section-bg" />
    <Footer />
  </div>
)

export default App
