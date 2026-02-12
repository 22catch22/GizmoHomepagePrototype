import GizmoNavbar from "../components/GizmoNavbar"
import { Container } from "react-bootstrap"
import { Card} from 'react-bootstrap'
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
/*This function creates the Upcoming Events page */
function Upcoming(){
return(<div>
<GizmoNavbar/>
<Container id = 'pagecontainer4'> 
<div id = "upcoming-events">
<div id = "upcoming-events-title">UpComing Events</div></div>
<Container id = 'eventbox'>
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>
Lorem ipsum dolor sit amet</ Card>
< Card id ='event'>   <img id = 'bluegear' src = "../src/images/adultevents.jpg"></img> nibh. </ Card>
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh.<p>Date: 02/21</p> </ Card>
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh.<p>Date: 02/21</p></ Card>
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh.<p>Date: 02/21</p> </ Card>
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card>
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card>
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card>
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh.<p>Date: 02/21</p></ Card >

< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh.<p>Date: 02/21</p></ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh.<p>Date: 02/21</p></ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh.<p>Date: 02/21</p> </ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh.<p>Date: 02/21</p> </ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card >

< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card>
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card >
< Card id ='event'><img id = 'bluegear' src = "../src/images/adultevents.jpg"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ipsum nibh. <p>Date: 02/21</p></ Card>
</Container>
<footer id = "footerbox4">
<div id = 'footer2gearandlogo'>  <img id = 'footer2gizmologo' src = '/src/images/gizmologo.png'></img> <img id = "footer2spinninggear"src = '/src/images/orangegear.png'></img>
<div id = 'links'>
<Navbar id = "footlinks">
<Nav.Link id = 'footlink' href = '/'>Home</Nav.Link>
<Nav.Link id = 'footlink' href = '/'>Become a Member</Nav.Link>
<Nav.Link id = 'footlink' href = '/'>Reserve Equipment</Nav.Link>
<Nav.Link id = 'footlink' href = '/'>Kids and Teens</Nav.Link>
</Navbar>
</div>
</div>
<div id = "hours">
<h2 id = "hours-title"><b>Hours of Operation</b></h2>
<div id = "hours-list">
<p><b>Tuesday - Thursday</b></p>
<p>1:00 pm - 9:00 pm</p>
<p></p>
<p><b>Friday - Saturday</b></p>
<p>10:00 am - 5:00 am</p>
<p></p>
<p><b>Sundays and Mondays</b></p>
<p>Closed</p>
</div>
</div>

 </footer>
 </Container>
 </div>

)
}
export default Upcoming