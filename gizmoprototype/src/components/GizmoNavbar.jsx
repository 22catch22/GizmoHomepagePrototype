import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Quotebar from "./Quotebar";
function GizmoNavbar()

{
return(
<Navbar id = 'gizmonav'>
   
<Container id = 'navcontainer'>
<Quotebar/>
<Navbar.Brand>
<div id = 'gearandlogo'></div>
    <img id = 'gizmologo' src = '/src/images/gizmologo.png'></img><div id = 'navbartitle'>Gizmo CDA</div>
    <p>When's the Last Time You Did Something for the First Time?</p>
<img id = "spinninggear"src = '/src/images/orangegear.png'></img>
 
</Navbar.Brand>

<div id = 'linkbox'>
 <Nav.Link id ='navlink'href = '/'><h2>Home</h2></Nav.Link>

<Dropdown>
<Dropdown.Toggle variant="success" id = 'dropdownbasic'> 
Join Us
</Dropdown.Toggle>
<Dropdown.Menu>
<Nav.Link href = 'JoinUs'><h2>Become a Member</h2></Nav.Link>
<Nav.Link ><h2>Reserve Equipment</h2></Nav.Link>
</Dropdown.Menu>
</Dropdown>

 
<Dropdown>
<Dropdown.Toggle variant="success" id = 'dropdownbasic'> 
Kids and Teens
</Dropdown.Toggle>
<Dropdown.Menu>

<Nav.Link ><h2>Upcoming Events</h2></Nav.Link>
<Nav.Link ><h2>Empowering Parents</h2></Nav.Link>
</Dropdown.Menu>
</Dropdown>




<Dropdown>
<Dropdown.Toggle variant="success" id = 'dropdownbasic'> 
Upcoming Events
</Dropdown.Toggle>

<Dropdown.Menu>
<Nav.Link href = 'Upcoming'><h2>Upcoming Events</h2></Nav.Link>
<Nav.Link href = 'Ways2give'><h2>Donate</h2></Nav.Link>
</Dropdown.Menu>
</Dropdown>

</div>
</Container>
   


</Navbar>    
)


}
export default GizmoNavbar