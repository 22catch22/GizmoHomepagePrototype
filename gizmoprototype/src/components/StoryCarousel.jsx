import { Carousel } from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap"
export default function storyCarousel(){


 return (
    <>
    <div id = "CarouselContainer">

 <Container id = 'imagecontainer'>

    <Carousel fade ><Carousel.Item>
    <img class = "d-block w-100" id = 'image1' height = '100%' src = "\src\images\gizmostoryimage1.jpg"/>

      </Carousel.Item>
      <Carousel.Item>
      <img class = "d-block w-100" id = 'image2'src = "\src\images\gizmostoryimage2.jpg"></img>
    
      </Carousel.Item>
      <Carousel.Item>
      <img class = "d-block w-100" id = 'image3'src = "\src\images\gizmostoryimage3.jpg"></img>
      </Carousel.Item>
    
    </Carousel>
 </Container>
 </div>
    </>
  );





}