import { useState } from 'react'

import './App.css'

function App() {
  

  const [User, setUser] = useState({
    name :"",
    email:"",
    birthDate:"",
    collegeName :"",
  
    collegeBranch:"",
    collegeYear:"",
    collegePercentage:"",
    collegeCGPA:"",
    mobileNumber :"",
    password:"",
    
  });
  
  const [addUsers , setAddUser] = useState([]);
  const handleClick = ((prev)=>{
    const {name , value} = prev.target;
    setUser({...User , [name] :value})
    // setUser({...User , [prev.target.name] : prev.target.value})
  })
  
  const handleSubmit = ((e)=>{
    // console.log("root");
    
    e.preventDefault();
    setAddUser((prevUser)=>[...prevUser , {...User}]) 
    console.log("submited",addUsers);
    setUser({
      name :"",
      email:"",
      birthDate:"",
      collegeName :"",
      
      collegeBranch:"",
      collegeYear:"",
      collegePercentage:"",
      collegeCGPA:"",
      mobileNumber :"",
      password:"",
      
    })
    
  })
  
 

  const object = [
    { id :"name" , label :"name" , type :"text" , placeholder :"name" },
    { id :"email" , label :"email" , type :"email" , placeholder :"email" },
    { id :"birthDate" , label :"birthDate" , type :"date" , placeholder :"birthDay" },
    // { id :"collegeLocation" , label :"name" , type :"text" , placeholder :"name" },
    { id :"collegeYear" , label :"name" , type :"number" , placeholder :"collegeYear" },
    { id :"collegeBranch" , label :"collegeBranch" , type :"text" , placeholder :"collegeBranch" },
    { id :"collegePercentage" , label :"collegePercentage" , type :"number" , placeholder :"collegePercentage" },
    { id :"collegeCGPA" , label :"collegeCGPA" , type :"mobileNumber" , placeholder :"collegeCGPA" },
    { id :"mobileNumber" , label :"mobileNumber" , type :"number" , placeholder :"mobileNumber" },
    { id :"password" , label :"password" , type :"password" , placeholder :"password" },
  ]

  return (
    <>
      <div className="container" >
        {/* form handling */}

        <form onSubmit={handleSubmit}>


          {
            object.map((object)=>{
              return <div className="">
                <input 
                type={object.type}
                  id={object.id}
                  name={object.id}
                  placeholder={object.placeholder}
                  value={User[object.id]}
                  onChange={handleClick}
                  
                  />
              </div>
            })
          }

        <button type='submit'>submit</button>

        {/* <input
          type="text"
          name="name"
          value={User.name}
          onChange={handleClick}
          placeholder="Enter your name"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="email"
          name="email"
          value={User.email}
          onChange={handleClick}
          placeholder="Enter your email"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="date"
          name="birthDate"
          value={User.birthDate}
          onChange={handleClick}
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="collegeName"
          value={User.collegeName}
          onChange={handleClick}
          placeholder="Enter your college name"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="collegeLocation"
          value={User.collegeLocation}
          onChange={handleClick}
          placeholder="Enter your college location"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="collegeBranch"
          value={User.collegeBranch}
          onChange={handleClick}
          placeholder="Enter your branch"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="number"
          name="collegeYear"
          value={User.collegeYear}
          onChange={handleClick}
          placeholder="Enter your year of study"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="number"
          name="collegePercentage"
          value={User.collegePercentage}
          onChange={handleClick}
          placeholder="Enter your percentage"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="number"
          name="collegeCGPA"
          value={User.collegeCGPA}
          onChange={handleClick}
          placeholder="Enter your CGPA"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="tel"
          name="mobileNumber"
          value={User.mobileNumber}
          onChange={handleClick}
          placeholder="Enter your mobile number"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="password"
          name="password"
          value={User.password}
          onChange={handleClick}
          placeholder="Enter your password"
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        /> */}

      </form>

      </div>
    </>
  )
}

export default App
