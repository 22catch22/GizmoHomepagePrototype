import GizmoNavbar from "../components/GizmoNavbar"
import { Container } from "react-bootstrap"
function Contact(){
return(
    <div>
 <GizmoNavbar/>
<Container id = 'pagecontainer'>
<div id = 'contacthead'><h1><strong>We Would LOVE to hear from You!</strong></h1>
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
        <button id = 'formbutton'type="submit">Submit</button>
    </form>
</div>
</Container>
    </div>
)
}
export default Contact