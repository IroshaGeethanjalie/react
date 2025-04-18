import { useState } from 'react'
 import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const a = 100;

//   const fName = "Irosha";
//   const mName = "Geethanjalie";
//   const lName = "Hewawitharane";
//   const Age = "25";
//   const Country = "Sri Lanka";

//   const getFullName = (f,m,s) =>{

//     return `${f} ${m} ${s}`;

//   }

//   const arr = ["apple","banana"];

//   const lang = <ul>
//     <li>html</li>
//     <li>css</li>
//     <li>javascript</li>
//   </ul>

//   const proj = {
//     fristName : "iresh",
//     age : "26"
//   }

//   return (
//     <>
//       <div className="cont">
//         <h1>React App</h1>
//         <p>arithmatic operations {20*20}% for jsx</p>
//         <p>calling a variable {a}</p>
//         <p>write a statment {a>50 ? "Greater" : "Lesser"}</p>
        
      

   
//         <h1>Employee details</h1>
//         <p>Full Name : {fName} {mName} {lName} </p>
//         <p>Age : {Age}</p>
//         <p>Country : {Country}</p>
//         <p>full name by function : {getFullName("irosha","geethanjalie","hewawitharane")}</p>
//         <p>{fName} likes to eat {arr[0]}</p>
//         {lang}
//         <p>my husbunds' name is {proj.fristName} and he is {proj.age}</p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import Footercontent from './Components/FooterContent/Footercontent'

function App() {
  return (
    <>
      <div id="wrapper">
       
        <HeaderContent/>
        <BodyContent/>
        <Footercontent/>
        
      </div>
   
    </>
  )
}

export default App
