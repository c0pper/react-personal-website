import TopBar from './components/TopBar'
import Footer from './components/Footer.jsx'
import About from './sections/About'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import GoToTopButton from './components/GoToTopButton'

const App = () => (
  <div className="w-full overflow-hidden relative">
    <TopBar />
    <About sectionColor="light-section-bg" />
    <Skills sectionColor="dark-section-bg" />
    <Projects sectionColor="dark-section-bg" />
    <Resume sectionColor="light-section-bg" />
    <Testimonials sectionColor="light-section-bg" />
    <Footer />
    <GoToTopButton />
  </div>
)

export default App
