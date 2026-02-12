import GizmoNavbar from "../components/GizmoNavbar";
import { useRef } from "react";
import { Container } from "react-bootstrap"
import Quotebar from "../components/Quotebar"
import GizmoFooter from "../components/GizmoFooter";
import { useState } from "react";
import {Nav} from 'react-bootstrap'
import { Navbar } from "react-bootstrap";

 
function Homepage(){


const facts = useRef(null);
const [isVisible, setisVisible] = useState(false);

const [formData, setFormData] = useState({

  name: "",
  email: "",
  address: "",
  city: "",
  phone: "",
  comment: ""
});

/*This function updates the form data as the user types into the form fields */ 
const handleChange = (e) => {
 setFormData({
   ...formData,
   [e.target.id]: e.target.value,
 });
}

/*This function shows the popup box when the user clicks the submit button */
async function showIt(e) {
e.preventDefault();
const data = Object.values(formData);
if (data.includes(""))
{

alert("Please fill out all fields before submitting the form.");
 
}
else{
var x = document .getElementById("popupbox");
var y = document.getElementById("pagecontainer");
x.style.visibility = "visible";
y.style.filter = "brightness(50%)";
}}
/*This resets the form */
async function clearIt() {
 setFormData({
  name: "",
  email: "",
  address: "",
  city: "",
  phone: "",
  comment: ""
 });
}
/*This hides the popup box when the user clicks the close button */
async function hideIt() {
  var x = document.getElementById("popupbox");
  var y = document.getElementById("pagecontainer");
  var z = document.getElementById("contactform");
  y.style.visibility = "hidden";
 z.style.filter = "brightness(100%)";
 
clearIt();

}

return(
  <>
 
<div>
   <Container id = 'containerbox'>
    <GizmoNavbar/>
    <Container id = 'welcome'>
     <h2 id = "welcome-text">    <Quotebar/>Welcome to the Homepage of 
  Coeur d'Alene's best (and only) MakerSpace!
    </h2>
 <img id = "hero-image"src = '../src/images/gizmo1.jpg'></img>
 <div id = "homepage-button-box">
    <button class = "homepagebutton" onClick ={()=> scrollTo(0,1200)}>What is Gizmo?</button>
    <button class ="homepagebutton" onClick ={()=> scrollTo(0,3200)}>Activities</button>
    <button class ="homepagebutton"onClick ={()=> scrollTo(0,4490)}>Contact Us</button>
</div>
  </Container>
    <Container id = 'pagecontainer'> 
   
    

 
 


 <Container id = 'aboutus'>
  <section id = 'aboutussection'>
    <img id = "gizmo-pic" src = '../src/images/gizmophoto.jpg'></img>
    <div id = 'gearbox1'><img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img>
    <img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img></div>
    <div id = 'titlebox'>
   <h1 id = 'title2'ref = {facts} ><p><b>What is Gizmo?</b></p></h1> 
   </div>

   
<div id = 'storybox'>
 Gizmo is a place where dreams come to life; a multi-media workshop where community members can unleash their creativity. We have all sorts of small and large-scale machines that might not fit within your home: bandsaws, lasers, lathes, potterywheels, 3D printers, you name it, we probably have it!


<p></p>Founded in 2014 by Barbara and Marty Mueller, Gizmo started with 2600 sqft on 4th Street, bringing life to a vision of CDA 2030;  a local  non-profit, community based organization set to guide the creation of a shared vision for the future of the Coeur d’Alene area. 

<p>Over the next 3 ½ years, Gizmo created a community through classes, individual mentorship, community events, field trips, summer camps, and membership options, in addition to countless opportunities to build your skills and expertise, access creative tools and resources, and  involve yourself with other makers. Our mission statement is "empowering through doing", and that is what we do!  We have been building creative confidence, curiosity, and community for over nine years now, ​through programs that give people of all ages access to tools, technologies, and mentorship.</p>


<p></p>
<img id = "gizmopic" src = '../src/images/gizmopic.jpg'></img>
<br></br>
​In 2018, North Idaho College generously gave Gizmo 8500 sq feet of space in the Hedlund building to use.And with the help of the college, we expanded what we offered.  
Today, we offer 11,000 square feet of usable space that hosts a woodshop, machine shop, welding studio, blacksmithing studio, pottery studio, computer lab, gathering space, a lapidary, and more.
​Our emerging media arts lab has VR and green screen capabilities, and our creative arts lab hosts a UV printer, banner printer, textile printer, dye-sublimation printer, long arm quilter, sewing machines, fabric dyeing, felting, leather-working, jewelry-making, stained glass and glass working, and more!
​​With countless resources, tons of space, and available mentorship on learning new skills, the possibilities really are endless when it comes to creating here at Gizmo.
​

<p>But don't take our word for it. Come to Gizmo and see for yourself.</p><p>THE BEST WAY TO EXPERIENCE GIZMO IS TO COME VISIT!</p>
    </div>
    </section>
  

 </Container>
 <div id = 'activity-title'>What can you do at Gizmo?</div>
<Container id = 'activitybox'>

 
<div id="activitycard1" class = 'activitycard'>
 

    <div id="card__content">
    <p id="card__title">Card Title</p>
    <p id="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>

<div id="activitycard2" class = 'activitycard'>
  
  <div id="card__content">
    <p id="card__title">Card Title</p>
    <p id="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
<div id="activitycard3"class = 'activitycard'>
  <div id="card__content">
    <p id="card__title">Card Title</p>
    <p id="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
<div id="activitycard4"class = 'activitycard'>
  <div id="card__content">
    <p id="card__title">Card Title</p>
    <p id="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
<div id="activitycard5"class = 'activitycard'>
  <div id="card__content">
    <p id="card__title">Card Title</p>
    <p id="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
<div id="activitycard6"class = 'activitycard'>
  <div id="card__content">
    <p id="card__title">Card Title</p>
    <p id="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
 
</div>
  

</Container> 
 <Container id = 'contactus'>
  <div id = 'gearbox'><img id = 'geardivider'src = '../src/images/orangegear.png'></img>
<img id = 'geardivider'src = '../src/images/orangegear.png'></img>
 <img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img>
 <img id = 'geardivider'src = '../src/images/orangegear.png'></img></div>
<div id = 'contacthead'> 
 <h1 id = "contact-title"><strong>We Would LOVE to hear from You!</strong></h1>

<div id = 'subtitle'> 
    <p>Fill out this Contact Form and we will get back to you</p>
    <p>OR</p>
    <p>Want to become a Volunteer or a Board Member? Fill this out and let us know!</p>
</div>
</div>

<div >
<Container id = 'contact-container'> 
    <form id = 'contactform'>
      <div id = 'form-input'>
        <p><label for = 'name'>Name</label></p>
       <p><input type = 'text' id = 'name'
       autoComplete="name"
        value = {formData.name}
        onChange={handleChange}
       ></input></p>
       </div>
        <div id = 'form-input'> 
        <p> <label for = 'email'>Email</label></p>
        <p><input type = 'email' id = 'email' autoComplete = "off" value = {formData.email} onChange={handleChange}></input></p>
        </div>
         <div id = 'form-input'>
         <p><label for = 'address'>Address</label></p>
        <p><input required type = 'text' id = 'address' autoComplete="off" value = {formData.address} onChange={handleChange}></input></p>
        </div>
         <div id = 'form-input'>
         <p><label for = 'city'>City</label></p>
        <p><input required type = 'text' id = 'city' autoComplete="off" value = {formData.city} onChange={handleChange}></input></p>
        </div>
        <div id = 'form-input'>
        <p><label for = 'phone' id = "phone-label">Phone #</label></p>
        <input required type = "text" id = 'phone' autoComplete="off" value = {formData.phone} onChange={handleChange}></input>
        </div>
        <div id = 'form-input'>
        <p><label for = 'comment'>Comment</label></p>
        <textarea rows = "4" cols = '50' id = 'comment' required value = {formData.comment} onChange={handleChange}></textarea>
        </div>
 

   
        <button id = "contact-button" class = 'homepagebutton'onClick={showIt}>Submit</button>
        
     
           
    </form>
    </Container>
</div>
 </Container>
 
 <Container id = 'donateandsponser'>

 

<div id = "sponser-box">

  <h1 id = "sponser-text">Special Thanks to Our Sponsors!
  </h1>

  <div id = 'sponser-logos'><img  id = "spon-logo"src="../src/images/sponser1.png"></img><img id = "spon-logo"src="../src/images/sponser2.jpg"></img><img id = "spon-logo"src = "../src/images/sponser3.jpeg"></img></div>
</div>
</Container>
  
</Container>
  <div id = "popupbox">
          <div>Thank you for your submission!</div>
          <p><b>Name:</b> <i>{formData.name}</i></p>
          <p><b>Email:</b> <i>{formData.email}</i></p>
          <p><b>Address:</b> <i>{formData.address}</i></p>
          <p><b>City:</b> <i>{formData.city}</i></p>
          <p><b>Phone:</b> <i>{formData.phone}</i></p>
          <p><b>Comment:</b> <i>{formData.comment}</i></p>
          <button id = "close-button"onClick={hideIt}>Close</button>
        </div>
<footer id = "footerbox">
  <GizmoFooter/>

  <div id = 'footer2gearandlogo'>  <img id = 'footer2gizmologo' src = '/src/images/gizmologo.png'></img> <img id = "footer2spinninggear"src = '/src/images/orangegear.png'></img>

<div id = 'links'>
 

  
<Navbar id = "footlinks">
  <h2 id = "footlinks-title"><b>Quick Links</b></h2>
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

</>
)
}
export default Homepage