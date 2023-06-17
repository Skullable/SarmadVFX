import './app.scss'
import Topbar from "./Topbar"
import Footer from "./footer"
import Home from "./home"
import About from './About'

function App() {

  return (
    <div className="app">
     <Topbar/>
     <Home/>
     <About/>
     <Footer/>
    </div>
  )
}

export default App
