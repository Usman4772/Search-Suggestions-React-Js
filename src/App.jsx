import { useEffect } from "react"
import { useState } from "react"
import "./autocomplete.css"


const URL="https://jsonplaceholder.typicode.com/users"

function App() {
  const [value,setValue]=useState("")
  const [users,setUsers]=useState([])
  const [filteredUsers,setFilteredUsers]=useState([])
  const [addClass,setAddClass]=useState(false)
  function handleSearch(e){
    setValue(e.target.value)
  }
 async function getUsers(){
  const res=await fetch(URL)
  const data=await res.json()
  setUsers(data)

  }
  function filterUsers(){
    const newUser=users.filter(user=>user.username.toLowerCase().includes(value.toLocaleLowerCase()))
   setFilteredUsers(newUser)

  }
  function handleSetText(user){
    setValue(user)

  }
  useEffect(()=>{
getUsers()
  },[])
  useEffect(()=>{
    if(value!==""){
      filterUsers()
      setAddClass(true)
    }else{
      setAddClass(false)
      setFilteredUsers([])
    }
    
  },[value])

return(
  <div className="main">
  <div className="inputWrapper flex">
  <input type="text" value={value} onChange={handleSearch} placeholder="Search Here"/>
  </div>
<ul className={addClass>0?"searched_results":"ul"}>
  {filteredUsers && filteredUsers.length>0?filteredUsers.map((user,i)=>{
return <li key={i} onClick={()=>handleSetText(user.username)} className="result">{user.username}</li>


  }):null}

  
  </ul>
  
  </div>
)
  
}

export default App
