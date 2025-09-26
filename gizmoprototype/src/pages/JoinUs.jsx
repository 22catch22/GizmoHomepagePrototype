import GizmoNavbar from "../components/GizmoNavbar"
import { Container } from "react-bootstrap"
function JoinUs(){
return(<>
    <GizmoNavbar/>
    <div>
<Container id = 'pagecontainer'>
  MEMBERSHIP AT GIZMO
Memberships at Gizmo are a low-cost alternative to purchasing the tools and equipment to make the things you love! Members at Gizmo have access to our incredible collection of tools, equipment, workspace, computers, software and more. They also have access to free training opportunities and member meet-ups

Membership is also a great way to support our organization's work and ensure the makerspace remains an accessible resource for the greater Coeur d'Alene community. You can invest in a local non-profit and also enjoy some unique perks for you!

We offer a variety of membership options at different price points, depending on how much tool time you need and whether you are an individual, family or small business. Check out our pricing below.

To see a full list of equipment available to members at Gizmo, click here. Please note -- all tools require certification by a staff member or authorized volunteer prior to independent use. To learn how to schedule an appointment for certification, click here.


<div id ='tablebox'>
<table>
<tr>
<th>Membership type</th>
<th>Tool Time Hours per Month</th>
<th>Monthly Cost</th>
<th>One Time Annual Commitment</th>

</tr>
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
</table>


</div>

</Container>
</div>

 

</>
)
}
export default JoinUs