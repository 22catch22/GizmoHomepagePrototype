import GizmoNavbar from "../components/GizmoNavbar";
import { useRef } from "react";
import StoryCarousel from "../components/StoryCarousel"
import { Container, NavLink } from "react-bootstrap"
import PhotoCarousel from "../components/photoCarousel"
import Quotebar from "../components/Quotebar"
import GizmoFooter from "../components/GizmoFooter";
import { useState } from "react";
import {Nav} from 'react-bootstrap'
import { Navbar } from "react-bootstrap";
import ReactCardFlip from 'react-card-flip'
import { Card } from "react-bootstrap"
function Homepage(){


 
const [isFlipped, setIsFlipped] = useState(false);

const activities = useRef(null)
const contact = useRef(null);
const facts = useRef(null);

const scroll= (elementRef) => {window.scrollTo({top:elementRef.current.offsetTop, behavior:'smooth' })}


return(
  <>
 
<div>
   <Container id = 'containerbox'>
    <GizmoNavbar/>

    
    <Container id = 'pagecontainer'> 
      
   <div id = 'welcome'><h2>Welcome to the Homepage of 
 Coeur d'Alene's best (and only) MakerSpace!</h2>
  <div id = "subtitle"></div>
  
  <button class = "homepagebutton" onClick ={()=> scrollTo(0,1200)}>What is Gizmo?</button>
    <button class ="homepagebutton">Donate!</button>

<button class ="homepagebutton"onClick ={()=> scrollTo(0,3500)}>Contact Us</button>
  </div>
  
<img id = 'heroimage' src = "\src\images\gizmo1.jpg"></img>



 <Container id = 'aboutus'>
   <div id = 'gearbox1'><img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img>
 <img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img></div>
     <div id = 'titlebox'>
   <h1 id = 'title'ref = {facts} >What is Gizmo?</h1>
   </div>
<div id = 'storybox'>
 Gizmo a place where dreams come to life; a multi-media workshop where community members can unleash their creativity and bring their visions to life. We have all sorts of small and large-scale machines that might not fit within your home: bandsaws, lasers, lathes, potterywheels, 3D printers, you name it, we probably have it!


<p></p>Founded in 2014 by Barbara and Marty Mueller, Gizmo started with 2600 sqft on 4th Street, bringing life to a vision of CDA 2030;  a local  non-profit, community based organization set to guide the creation of a shared vision for the future of the Coeur d’Alene area. 

<p>Over the next 3 ½ years, Gizmo created a community through classes, individual mentorship, community events, field trips, summer camps, and membership options, in addition to countless opportunities to build your skills and expertise, access creative tools and resources, and  involve yourself with other makers. Our mission statement is "empowering through doing", and that is what we do!  We have been building creative confidence, curiosity, and community for over nine years now, ​through programs that give people of all ages access to tools, technologies, and mentorship.</p>
  <p>A taste of what you can make at Gizmo!</p>
  <StoryCarousel/>
<p></p>
​In 2018, North Idaho College generously gave Gizmo 8500 sq feet of space in the Hedlund building to use.And with the help of the college, we expanded what we offered.  
Today, we offer 11,000 square feet of usable space that hosts a woodshop, machine shop, welding studio, blacksmithing studio, pottery studio, computer lab, gathering space, a lapidary, and more.
​Our emerging media arts lab has VR and green screen capabilities, and our creative arts lab hosts a UV printer, banner printer, textile printer, dye-sublimation printer, long arm quilter, sewing machines, fabric dyeing, felting, leather-working, jewelry-making, stained glass and glass working, and more!
​​With countless resources, tons of space, and available mentorship on learning new skills, the possibilities really are endless when it comes to creating here at Gizmo.
​

<p>But don't take our word for it. Come to Gizmo and see for yourself. <p>THE BEST WAY TO EXPERIENCE GIZMO IS TO COME VISIT!</p></p>
    </div>
 
  

 </Container>
 <h2>What can you do at Gizmo?</h2>
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
 <div id="activitycard7"class = 'activitycard'>
  <div id="card__content">
    <p id="card__title">Card Title</p>
    <p id="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
<div id="activitycard8"class = 'activitycard'>
  <div id="card__content">
    <p id="card__title">Card Title</p>
    <p id="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
<div id="activitycard9"class = 'activitycard'>
  <div id="card__content">
    <p id="card__title">Card Title</p>
    <p id="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
</Container> 

<div id = 'contacthead'> <div id = 'gearbox'><img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img>
 <img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img><img id = 'geardivider'src = '../src/images/orangegear.png'></img></div><h1><strong>We Would LOVE to hear from You!</strong></h1>

<div id = 'subtitle'>We will never share your personal info, just upcoming classes and events

    <p>Fill out this Contact Form and we will get back to you</p>
    <p>OR</p>
    <p>Want to become a Volunteer or a Board Member? Fill this out and let us know!</p>
</div>

</div>


<div id = 'contactform'>

    <form>
        <p><label for = 'name'>Name</label></p>
       <p><input type = 'text' id = 'name'></input></p>
        <p> <label for = 'email'>email</label></p>
        <p><input type = 'email' id = 'email'></input></p>
         <p><label for = 'name'>address</label></p>
        <p><input type = 'text' id = 'address'></input></p>
         <p><label for = 'city'>City</label></p>
        <p><input type = 'text' id = 'city'></input></p>
        <p><label for = 'phone'>Phone Number</label></p>
        <p><input type = 'text' id = 'phone'></input></p>
        <p><label for = 'comment'>Comment</label></p>
        <p><textarea rows = "4" cols = '50' id = 'Comment'></textarea></p>
        <button class = 'homepagebutton'type="submit">Submit</button>
    </form>
</div>
<div id = "donatebox">
   <div id = 'gearbox'><img id = 'geardivider'src = '../src/images/orangegear.png'></img>
   <img id = 'geardivider'src = '../src/images/orangegear.png'></img>
   <img id = 'geardivider'src = '../src/images/orangegear.png'></img></div>
 <h2> Creativity needs cash! Help us by donating today!</h2>
<img id = 'donatepic'src = '../src/images/donateimage.png'></img>

</div>
<footer><Container id = "footercontainer">

  <div id = 'links'>
<p>Quick Links</p>
<Navbar id = "footlinks"></Navbar>
<Nav.Link id = 'navlinks' href = '/'>Home</Nav.Link>
<Nav.Link id = 'navlinks' href = '/'>Become a Member</Nav.Link>
<Nav.Link id = 'navlinks' href = '/'>Reserve Equipment</Nav.Link>
<Nav.Link id = 'navlinks' href = '/'>Kids and Teens</Nav.Link>
</div>
<div id = "directions">
<h2>Stop By Today!</h2>
<p>Find us at:</p>
<p>283 Hubbard Ave Suite 102</p>
<p>Hedlund Building, North Idaho College Campus</p>
<p>Coeur d'Alene, Id 83814</p>

<p>Send snail mail to us at:</p>
<p>1000 W Garden Ave</p>
<p>Coeur d'Alene, ID 83814</p>
</div>
<div id = "hours">
<h2><b>Hours of Operation</b></h2>
<p><b>Tuesday - Thursday</b></p>
<p>1:00 pm - 9:00 pm</p>
<p></p>
<p><b>Friday - Saturday</b></p>
<p>10:00 am - 5:00 am</p>
<p></p>
<p><b>Sundays and Mondays</b></p>
<p>Closed</p>




</div>
</Container></footer>
</Container>



 
</Container>
</div>


 
 
</>
)
}
export default Homepage