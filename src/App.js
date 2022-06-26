import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import './css/style.scss'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Home from './containers/Home'
import About from './containers/About'
import Skills from './containers/Skills'
import Resume from './containers/Resume'
import Portfolio from './containers/Portfolio'
import Contact from './containers/Contact'
import Navbar from './components/Navbar'
import Theme from './components/Theme'
import particlesConfig from './helpers/particlesConfig'

function App() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const location = useLocation()
  const renderParticleJsIfCurrentPageIsHomePage = location.pathname === '/'

  return (
    <div className="App">
      {renderParticleJsIfCurrentPageIsHomePage && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>

      <div className="App__main-content-wrapper">
        <Theme />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/skills" index element={<Skills />} />
          <Route path="/resume" index element={<Resume />} />
          <Route path="/portfolio" index element={<Portfolio />} />
          <Route path="/contact" index element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
