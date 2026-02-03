// import { useEffect, useState } from "react";

// const FetchData = ()=>{
//     const [data,setData] = useState([])

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res=>res.json())
//         .then(result=>setData(result))
//     },[])

//     return(
//         <ul>
//             {data.map(user=>(
//                 <li key={user.id}>{user.name}</li>
//             ))}
//         </ul>
//     )
// }

// export default FetchData; 


//....Add and remove event listener properly 
// Add listener on mount => Remove listener on unmount=>Prevent memory leaks

// import { useEffect } from "react";

// const EventExample = ()=>{
//     useEffect(()=>{
//         const handleRize = ()=>{
//             console.log("window resized")
//         }
//         window.addEventListener("resize",handleRize)
//         return ()=>{
//             window.removeEventListener("resize", handleRize)
//         }
//     },[])
//     return <h3>resize the window</h3>
// }
// export default EventExample; 