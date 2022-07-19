// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// // // react toggle

// const App=()=> {
//   var [toggle, setToggle] = useState(true);

//   const changeName = () => {
//     setToggle(!toggle);
//   }
//   return (
//     <div className="App">
//       <h2>{toggle === true ? " sharique " : "suraj"}</h2>
      
//       <Button variant="secondary" onClick={() => changeName()}>Toogle </Button>
//     </div>
//   );
// }

// export default App;

// // react toggle ends 



// let var 
// const app=()=>{
//   var b="fz" 
//   let a="faizan"
// return(
// <div className="app">

//   {a} <br>
//   </br>
//   {b}
// </div>
// )
//  }
//  export default app;

// let var end


// inner outer console

// const App = () => {
//     const outerr = [];
//     var inner = [];
//     let [age, setAge] = useState(22);

//     const inc = () => {
//         inner.push(1)
//         outerr.push(1)
//         setAge(++age);
//         console.log(inner + "inner ")
//         console.log(outerr + "outer")
//     }
//     return (
//         <>{age}
//             <button onClick={() => inc()}>
//                 button
//             </button>
//         </>  
//     )


// }
// export default App;




// calling  data with api


// const App = () => {
    
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         (async () => {
//             const datas = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
//             setData(datas.data);
            
//             console.log(datas.data);
//         })();

//     }, []);

//     return (
//         <>{
//          data.map((value,index) => {
//                 return (
//                     <Card style={{ width: '18rem' }}>
//                     {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//                     <Card.Body>
//                       <Card.Title>Card Title</Card.Title>
//                       <Card.Text>
//                        {value.body}
//                       </Card.Text>
//                       <Card.Text>
//                        {value.email}
//                       </Card.Text>
//                       <Button variant="secondary">Go somewhere</Button>
//                     </Card.Body>
//                   </Card>
//                 )
//             })
//         }
//         </>
//     )


// }
// export default App;