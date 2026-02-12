import GizmoNavbar from "../components/GizmoNavbar"
import { useState } from "react"
import { Container } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import GizmoFooter from "../components/GizmoFooter"
/*This function creates the Ways to Give page */

function Ways2give(){

const radioOptions = document.getElementsByName('formoptions');
const [formData3, setFormData3] = useState({
donation: ""
});

/*This function updates the form data as the user types into the form fields */
const handleChange = (e) => {
 setFormData3({
   ...formData3,
   [e.target.id]: e.target.value,
 });
}
 

/*This function shows the popup box when the user clicks the submit button */
async function showIt(e) {
e.preventDefault();
checkit();
var x = document .getElementById("popupbox3");
var y = document.getElementById("pagecontainer3");
x.style.visibility = "visible";
y.style.filter = "brightness(50%)";
}
/*This ensures that the user selects a donation level before submitting*/
function checkit(){
for (const button of radioOptions){
  if (button.checked){
    showIt(); 
    return button.value;
  } else {
    console.log("Please select a donation level before proceeding.");
    return null;
  }   
}
return null;
}


return(
<div>
<GizmoNavbar/>
<Container id = 'pagecontainer3'> 
<img src="../src/images/donatepic.jpg" id = "donate-pic"alt = "it takes a village image"></img>
<h2 id = 'fuel-the-spark'>Fuel the spark!</h2>
<div id = "donation-text">Your gift can send a kid into a hands-on class where curiosity leads and confidence follows. Scholarships remove the barrier so every child—no matter their family’s budget—can grab a tool, learn a skill, and light up with “look what I made!”

<br/>
Whether you give $10, $100, $1000, or more, every dollar keeps the gears turning and strengthens our community. Together, we will empower makers of all ages to create, learn, and grow! 
 

</div>
<h2 id = "donate-head">Donation Level: Choose Your Impact</h2>
<form id = 'donate-form'><div id = "donation-select" name = "donation-select">
<input type = "radio" id="formoption1" name = 'formoptions' required onChange={handleChange}></input>
INSPIRE - $ 25.00: A little goes a long way! Your gift buys the materials for a young maker’s first project.
<br/>
<input type = "radio" id="formoption2" name = 'formoptions' required onChange={handleChange}></input>
IGNITE - $ 50.00: Light up a student’s path to discovery with a partial scholarship to a skill-building class.
<br/>
<input type = "radio" id="formoption3" name = 'formoptions' required onChange={handleChange}></input>
EQUIP - $ 100.00: Keeps our tools in action, from laser cutters to sewing machines.
<br/>
<input type = "radio" id="formoption4" name = 'formoptions' required onChange={handleChange}></input>
CREATE - $ 150.00: Gives students the chance to attend a multi-week workshop and bring their ideas to life.
<br/>
<input type = "radio" id="formoption5" name = 'formoptions' required onChange={handleChange}></input>
SUSTAIN - $ 200.00: Helps us maintain our vibrant maker space and ensure our equipment stays operational.
<br/>
<input type = "radio" id="formoption6" name = 'formoptions' required onChange={handleChange}></input>
TRANSFORM - $ 500.00: Funds mentorship opportunities to guide makers as they develop their creative confidence.
<br/>
<input type = "radio" id="formoption7" name = 'formoptions' required onChange={handleChange}></input>
INNOVATE - $ 1,000.00: Supports innovation in our maker space by funding critical tool upgrades.
<br/>
<input type = "radio" id="formoption8" name = 'formoptions' required onChange={handleChange}></input>
EMPOWER - $ 2,500.00: Empower the entire maker community by supporting full scholarships and new programs.

</div>

<br/>
<button type="submit" id = "donate-button2" onClick = {showIt}>Donate</button>
</form>
</Container>
<div id = "popupbox3">
<div>Thank you for your Donation! </div>
<a id = "return-button" href = "./" target="./">Close</a>
</div>
<footer id = "footerbox3">
<GizmoFooter/>
<div id = 'footer2gearandlogo'>  <img id = 'footer2gizmologo' src = '/src/images/gizmologo.png'></img> <img id = "footer2spinninggear"src = '/src/images/orangegear.png'></img>
<div id = 'links'>
<Navbar id = "footlinks">
<Nav.Link id = 'footlink' href = '/'>Home</Nav.Link>
<Nav.Link id = 'footlink' href = '/JoinUs'>Become a Member</Nav.Link>
<Nav.Link id = 'footlink' href = '/UpcomingEvents'>Upcoming Events</Nav.Link>
<Nav.Link id = 'footlink' href = '/KidsEvents'>Kids and Teens</Nav.Link>
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
</div>
)
}
export default Ways2give