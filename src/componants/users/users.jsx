import react, { useState } from "react"


function Users(){


const [users,setusers]    =useState([
 {name:"ahmed",email:"ahmed@gmail.com",isActive:true},
 {name:"fared",email:"fareda@gmail.com",isActive:false},
 {name:"mada",email:"mada@gmail.com",isActive:false},
 {name:"lolo",email:"lolo@gmail.com",isActive:true},
 {name:"ozoo",email:"ozoo@gmail.com",isActive:true},

])
const [isauthenticated,setauth]=useState(false)

    return<>
   {(isauthenticated)? <ul>
  {users.map(function(item, index){
    return <li key={index}>{item.name}</li>
  })} 
    </ul>:<p></p>}
    
    
    
</>
}
export default Users;