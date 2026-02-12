import GizmoNavbar from "../components/GizmoNavbar"
import { Container } from "react-bootstrap"
import {useState} from 'react'
import {Nav} from 'react-bootstrap'
import { Navbar } from "react-bootstrap";
import 'reactjs-popup/dist/index.css';
function JoinUs(){

const [formData2, setFormData2] = useState({

name: "",
email: "",
phone: "",
membership: ""

});

/*This function updates the form data as the user types into the form fields */
const handleChange = (e) => {
 setFormData2({
  ...formData2,
   [e.target.id]: e.target.value,
   
 });
  console.log(formData2)
}
  
/*This function shows the popup box when the user clicks the submit button */
 async function showIt(e) {
    e.preventDefault();
    const data = Object.values(formData2);
    if (data.includes(""))
      {alert("Please fill out all fields before submitting the form.");}
    else{
        var x = document .getElementById("popupbox2");
        var y = document.getElementById("pagecontainer2");
        x.style.visibility = "visible";
        y.style.filter = "brightness(50%)";
        }
}
/*This hides the popup box when the user clicks the close button */
async function hideIt() {
    var y = document .getElementById("popupbox2");
    var z = document.getElementById("pagecontainer2");
    y.style.visibility = "hidden";
    z.style.filter = "brightness(100%)";
}

return(
<>
<GizmoNavbar/>
<Container id = 'Containerbox'>
<div>
<Container id = 'pagecontainer2'>
<Container id = "join-us-pic-container">
<img id = 'joinuspic' src = '../src/images/gizmo-join-pic.jpg'></img>
<div id= 'joinus-title'>MEMBERSHIP AT GIZMO</div>
</Container>
<div id = 'join-us-text'>
<h2><b>Why Should I Join Gizmo?</b></h2>
Memberships at Gizmo are a low-cost alternative to purchasing the tools and equipment to make the things you love! 
<p>Members at Gizmo have access to our incredible collection of tools, equipment, workspace, computers, software and more. They also have access to free training opportunities and member meet-ups.
<p>It's also a great way to support our organization's work and ensure the makerspace remains accessible to the greater Coeur d'Alene community. You can invest in a local non-profit and also enjoy some unique perks!</p>
<p></p>
<h2><b>What kind of Options do I Have?</b></h2>
We offer a variety of membership options at different price points, depending on how much tool time you need and whether you are an individual, family or small business. Check out our pricing below.
</p>
<p><button id = "join-button">See equipment available to members.(Coming Soon!)</button></p>
<p> Please note -- all tools require certification by a staff member or authorized volunteer prior to independent use.</p>
<p><button id = "join-button">Schedule an appointment for certification(Coming Soon!)</button></p>
<p>So what are you waiting for? Sign up and start Making!</p>
<form id = "signup-form">
<p></p>
<label for = "name" id = "name-label">Name:       </label>
<input type="text" id="name" name="name" onChange={handleChange} required />
<p></p>
<label for = "email" id = "email-label" >Email      </label>
<input type="email" id="email" name="email" onChange={handleChange} required />
<p></p>
<label for = "phone" id = "phone-label" >Phone Number   </label>
<input type="tel" id="phone" name="phone" onChange={handleChange} required/>
<p></p>
<label for = "membership" id = "membership-label">Membership      </label>
<select id="membership" name="membership" onChange={handleChange} required> 
<p></p>
<option value="student" required>Student</option>
<option value="tinker" required>Tinker</option>
<option value="maker" required>Maker</option>
<option value="pro" required>Pro (Single)</option>
<option value="family" required>Family</option>
<option value="corporate" required>Corporate (2-3 people)</option>
</select>
<br />
<button id="submit-button"  onClick={showIt}>Submit</button>
 </form>
<div id ='tablebox'>
<table >
<tbody> 
 
<th>Membership type</th>
<th>Tool Time Hours per Month</th>
<th>Monthly Cost</th>
<th>One Time Annual Commitment</th>

 
<tr>
<td>Student</td>
<td>8</td>
<td>$36</td>
<td>$345</td>
</tr>
<tr>
<td>Tinker</td>
<td>8</td>
<td>$48</td>
<td>$460</td>
</tr>
<tr>
<td>Maker</td>
<td>20</td>
<td>$68</td>
<td>$653</td>
</tr>
<tr>
<td>Pro (Single)</td>
<td>Unlimited</td>
<td>$110</td>
<td>$1056</td>
</tr>
<tr>
<td>Family</td>
<td>40</td>
<td>$108</td>
<td>$1037</td>
</tr>
<tr>
<td>Corporate (2-3 people)</td>
<td>Unlimited</td>
<td>$200</td>
<td>$1920</td>
</tr>
</tbody>
</table>
</div>
</div>

</Container>
<div id = "popupbox2">
<div>Thank you for your submission!</div>
<p><b>Name:</b> <i>{formData2.name}</i></p>
<p><b>Email:</b> <i>{formData2.email}</i></p>
<p><b>Address:</b> <i>{formData2.phone}</i></p>
<p><b>Membership:</b> <i>{formData2.membership}</i></p>

<button id = "close-button"onClick={hideIt}>Close</button>
</div>

<div id = "popupbox">
<div>Welcome to Gizmo!</div>
 
<button onClick={hideIt}>Close</button>
</div>


</div>
/*-- Footer --*/
<footer id = "footerbox2">
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
</>
)
}
export default JoinUs