import AboutMe from './AboutMe'
import './App.css'
import Contact from './Contact'
import Experience from './Experience'
import './index.css'
import Profile from './Profile'
import Projects from './Projects'

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Profile/>
    </div>
  )
}

export default App
 