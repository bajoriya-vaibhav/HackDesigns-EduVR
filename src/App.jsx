import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Progress from './Pages/Progress'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/progress' element={<Progress/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
