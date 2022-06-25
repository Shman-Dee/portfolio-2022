import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import './css/style.css'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Home from './containers/home'
import About from './containers/about'
import Skills from './containers/skills'
import Resume from './containers/resume'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Navbar from './components/navbar'
import particlesConfig from './helpers/particlesConfig'

function App() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const location = useLocation()
  const renderParticleJsIfCurrentPageIsHomePage = location.pathname === '/'
  console.log(location)

  return (
    <div className="App">
      {renderParticleJsIfCurrentPageIsHomePage && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}

      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/skills" index element={<Skills />} />
        <Route path="/resume" index element={<Resume />} />
        <Route path="/portfolio" index element={<Portfolio />} />
        <Route path="/contact" index element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
