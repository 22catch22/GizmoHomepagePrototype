import { Carousel } from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap"
export default function photoCarousel(){


 return (
    <>
    <div id = "CarouselContainer">

 <Container id = 'imagecontainer'>

    <Carousel fade id = "photocarousel"><Carousel.Item id = 'photobox'>
    <img class = "d-block w-500" id = 'image1' height = '100%' src = "\src\images\gizmo1.jpg"/>
   <Carousel.Caption id = 'textbox'> <div id ='gizmotext'>Become a Member
      <p>11,000 sq feet of magic, five days a week.</p><button id = 'carouselbutton'>Sign me Up!</button></div>
      </Carousel.Caption>
  
      </Carousel.Item>
      <Carousel.Item id = 'photobox'>
      <img id = 'image2'src = '\src\images\gizmo2.jpg'></img>
         <Carousel.Caption id = 'textbox'> <div id ='gizmotext'>Take a Class <p>Join us for classes, both single sessions and multi-week advetnrues. No membership required!</p><button id = 'carouselbutton'>Show Me!</button></div>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id = 'photobox'>
      <img id = 'image3'src = '\src\images\gizmo3.jpg'></img>
         <Carousel.Caption id = 'textbox'> <div id ='gizmotext'> Learn a Tool!
         <p>Book a Mentor Hour and recieve personal training today!</p><button id = 'carouselbutton'>Tell Me More!</button></div>
      </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
 </Container>
 </div>
    </>
  );





}