import {Container}from 'react-bootstrap'
import quotes from '../data/quotes.json'


/*This function creates a quote bar that displays a random inspirational quote from the quotes.json file */


export default function Quotebar(){

const min = 0;
const max = quotes.length
const randomid = Math.floor(Math.random() * (max - min)) + min;

let z = JSON.stringify(quotes[randomid])

return(
<Container id = "inspirequotes">
<div id ='quote-box'>
/*This displays the randomly selected quote in italics and bold */
<i><b>{z.replace(/[""]/g, '')}</b></i>
</div>
</Container>
)
}