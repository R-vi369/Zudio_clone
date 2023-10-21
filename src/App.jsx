import Header from './components/Header'
import Hero from "./components/Hero"
import Zstories from "./Pages/Zstories"
import Zudio from './Pages/Zudio'
import ZudioNearYou from './Pages/ZudioNearYou'
import Zworld from './Pages/Zworld'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
const App = () => {
  return (
  <>
  
  <div className="w-full h-screen text-white bg-black">
 


  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="Zstories" element={<Zstories/>}/>
      <Route path="Zudio" element={<Zudio/>}/>
      <Route path="ZudioNearYou" element={<ZudioNearYou/>}/>
      <Route path="Zworld" element={<Zworld/>}/>

    </Routes>
  </Router>
  </div>
  </>
  )
}

export default App