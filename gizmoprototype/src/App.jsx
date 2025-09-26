import {Routes, Route, Link} from "react-router"
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Educators from './pages/Educators';
import JoinUs from "./pages/JoinUs";
import OurStory from "./pages/OurStory";
import KidsnTeens from "./pages/KidsnTeens";
import Ways2give from "./pages/Ways2give";
import Upcoming from "./pages/Upcoming";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
 

  return (
    <>
    <div>
      <Routes>
      <Route path = '/' element = {<Homepage/>}/>
   
      <Route path = '/Educators' element = {<Educators/>}/>
      <Route path = '/JoinUs' element = {<JoinUs/>}/>
      <Route path = '/Upcoming' element = {<Upcoming/>}/>
 
      <Route path = '/KidsnTeens' element = {<KidsnTeens/>}/>
      <Route path = '/Ways2give' element = {<Ways2give/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
