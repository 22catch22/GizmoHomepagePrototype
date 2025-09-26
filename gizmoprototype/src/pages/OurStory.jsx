import GizmoNavbar from "../components/GizmoNavbar"
import { Container } from "react-bootstrap"
import StoryCarousel from "../components/StoryCarousel"
import GizmoFooter from "../components/GizmoFooter"
function OurStory(){
return(<div>
       <GizmoNavbar/>
 
    
       <Container id = 'pagecontainer'>
        <div id = 'titlebox'>
   <h1 id = 'title'>Our Story</h1>
   </div>
<div id = 'storybox'>
Founded in 2014 by Barbara and Marty Mueller, Gizmo has been making waves in the community since its inception. They started with 2600 sqft on 4th Street, bringing life to a vision of CDA 2030;  a local  non-profit, community based organization set to guide the creation of a shared vision for the future of the Coeur d’Alene area. 

<p>For the next 3 ½ years, Gizmo created a community through classes, individual mentorship, community events, field trips, summer camps, and membership options, in addition to countless opportunities to build your skills and expertise, access creative tools and resources, and  involve yourself with other makers. Our mission statement is "empowering through doing", and that is what we do!  We have been building creative confidence, curiosity, and community for over nine years now, ​through programs that give people of all ages access to tools, technologies, and mentorship.</p>
 
 
<StoryCarousel/>
<h1 id = 'title'>Expansion</h1>
<div id = 'collegepicbox'><img id = 'collegepic'src = '\src\images\nidahocollegeimage.jpg'></img></div>
<p></p>
​In 2018, North Idaho College generously gave Gizmo 8500 sq feet of space in the Hedlund building to use. Before moving, we surveyed the community to understand what barriers existed to being part of Gizmo.

​What would be entry points for the population who did not feel that they had the aptitude to be makers?

We learned that to have an inclusive environment, we needed to help people know that a makerspace was not limited to just robotics and technology.
​
It needed to include other, more accessible entry points. 
​
And with the help of the college, we expanded what we offered.  
   

       <h1 id = 'title'>Today</h1>

​Today, we offer 11,000 square feet of usable space that hosts a woodshop, machine shop, welding studio, blacksmithing studio, pottery studio, computer lab, gathering space, a lapidary, and more.
​Our emerging media arts lab has VR and green screen capabilities, and our creative arts lab hosts a UV printer, banner printer, textile printer, dye-sublimation printer, long arm quilter, sewing machines, fabric dyeing, felting, leather-working, jewelry-making, stained glass and glass working, and more!
​
​With countless resources, tons of space, and available mentorship on learning new skills, the possibilities really are endless when it comes to creating here at Gizmo.
​

<p>THE BEST WAY TO EXPERIENCE GIZMO IS TO COME VISIT!</p>
    </div>
 
    </Container>
   
</div>
)
}
export default OurStory