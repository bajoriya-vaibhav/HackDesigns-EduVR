import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Progress from './Pages/Progress'
import Intropg1 from './Pages/Intropg1'
import About from './Pages/About'
import VR from './Pages/VR'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/vr' element={<VR/>} />
          <Route path='/intro' element={<Intropg1/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/progress' element={<Progress/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
