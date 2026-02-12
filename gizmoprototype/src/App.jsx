import {Routes, Route, Link} from "react-router"
import Homepage from './pages/Homepage';
 
import JoinUs from "./pages/JoinUs";
import KidsEvents from "./pages/KidsEvents";
 
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
    <Route path = '/KidsEvents' element = {<KidsEvents/>}/>

      <Route path = '/JoinUs' element = {<JoinUs/>}/>
      <Route path = '/Upcoming' element = {<Upcoming/>}/>
 
      <Route path = '/Ways2give' element = {<Ways2give/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
