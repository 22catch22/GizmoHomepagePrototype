import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import {NavLink}from "react-bootstrap";
import {DropdownButton} from "react-bootstrap";
import Quotebar from "./Quotebar";
function GizmoNavbar()
/*This function creates the navigation bar for the Gizmo CDA website */
{
return(

<Navbar id = 'gizmonav'>
   
<Container id = 'navcontainer' className="navcar-container" fluid>
    
<Navbar.Brand>
<div id = 'gearandlogo'>  <img id = 'gizmologo' src = '/src/images/gizmologo.png'></img> 
<img id = "spinninggear"src = '/src/images/orangegear.png'></img>
</div>
  <div class = 'navbartitle'>
<div id = 'title'>Gizmo CDA

<p><div id = 'motto'><i>When's the Last Time You Did Something for the First Time?</i></div></p>
</div>
</div>
<a id = "home-link" href = "/"></a>
</Navbar.Brand>
<DropdownButton  id = 'd-downmobilebutton' title="Menu"> 
<Dropdown.Menu id ='d-downmobilemenu'>
<Dropdown.Item href="/">Home</Dropdown.Item>
<Dropdown.Item href="/JoinUs">Join Us</Dropdown.Item>
<Dropdown.Item href="/Ways2give">Donate</Dropdown.Item>
<Dropdown.Item href="/KidsEvents">Kids and Teens Events</Dropdown.Item>
<Dropdown.Item href="/Upcoming">Upcoming Events</Dropdown.Item>
</Dropdown.Menu>
</DropdownButton>
 
<div id = 'linkbox'>  
 <div id ='navlink'><a id = "navbar-home-link" href = "/">Home</a></div>

<Dropdown>
<Dropdown.Toggle variant="success" id = 'dropdownbasic'> 
Join Us
</Dropdown.Toggle>
<Dropdown.Menu>
<Nav.Link href = 'JoinUs'><h2>Become a Member</h2></Nav.Link>
<NavLink href = 'Ways2give'><h2>Donate</h2></NavLink>
</Dropdown.Menu>
</Dropdown>

 
<Dropdown>
<Dropdown.Toggle variant="success" id = 'dropdownbasic'> 
Kids and Teens
</Dropdown.Toggle>

<Dropdown.Menu>
<Nav.Link href = "KidsEvents"><h2>Kids and Teens Events</h2></Nav.Link>
</Dropdown.Menu>
</Dropdown>

<Dropdown>
<Dropdown.Toggle variant="success" id = 'dropdownbasic'> 
 Events
</Dropdown.Toggle>

<Dropdown.Menu>
<NavLink href = 'Upcoming'><h2>Upcoming Events</h2></NavLink>
</Dropdown.Menu>
</Dropdown>

</div>
</Container>
   

</Navbar>    
)


}
export default GizmoNavbar