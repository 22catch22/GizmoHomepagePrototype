import {Container}from 'react-bootstrap'
import quotes from '../data/quotes.json'

export default function Quotebar(){

const min = 0;
const max = quotes.length
const randomid = Math.floor(Math.random() * (max - min)) + min;

let z = JSON.stringify(quotes[randomid])

return(
<Container id = "inspirequotes">
 
<i><b>{z.replace(/[""]/g, '')}</b></i>
</Container>

)




}