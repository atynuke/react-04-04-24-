import { useEffect, useState } from "react";
import "./App.css";
import Master from './components/HocComponents/Master'
import Child from './components/HocComponents/Child'


const App  =() =>{
  

  const HOC = Master(Child);
  return (
    <>
      <p> This is App.jsx</p>
      <HOC/>
    </>
  );
}

export default App;




































// import Card from "./components/Card";


// const [result, setResult] = useState([]);

//   useEffect(() => {
//     fectchData();
//   }, []);

//   const fectchData = async () => {
//     try {
//       let resp = await fetch(
//         "https://660e65346ddfa2943b36a466.mockapi.io/batchb"
//       );
//       let userData = await resp.json();
//       console.log(userData);
//       setResult(userData);
//       // setResult((prevState)=>{[...prevState, ...userData]})
//     } catch {
//       (err) => {
//         return console.log(err);
//       };
//     }
//   }
//     return (
//       <>
//         <h1>this is useEffect fetch Data</h1>
//         {result.length}

//     loading ? <p style={{textAlign:"center"}}>please wait, loading.....</p>:
//     <div style={{display: "flex", gap: "70px"}}>
//   {
//   result.map((user)=>{
//   return(
//   <Card key ={user.id} name={user.name} gender= {user.gender} email={user.email} image={user.avatar}/>
//   )}
//   )
//   }
// </div>
// </>)
// }
