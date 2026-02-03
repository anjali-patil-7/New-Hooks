//1........component did mount-Run some code only when the component loads.
// import { useEffect } from "react";

// const MountExampe = ()=>{
//     useEffect(()=>{
//         console.log("component Mounted")
//     },[])
//     return(
//         <div>
//             <h3>check console</h3>
//         </div>
//     )
// }
// export default MountExampe

//2..........compoenent did update-Run logic only when a state value changes.
// import { useState, useEffect } from "react";

// const UpdateExample = ()=>{
//     const [count, setCount] = useState(0)

//     useEffect(()=>{
//         console.log("count updated:", count)
//     }, [count])

//     return (
//         <div>
//             <button onClick={()=>setCount(count + 1)}>Count:{count}</button>
//         </div>
//     )
// }
// export default UpdateExample



//3..............component will unmount-Cleanup logic when component is removed.
// import { useState, useEffect } from "react";
//  const UnmountExample = ()=>{
//     useEffect(()=>{
//         console.log("Mounted")
        
//         return()=>{
//             console.log("unmounted")
//         }
//     },[])
//     return (
//         <div>
//             <h3>Unmount me</h3>
//         </div>
//     )
//  }
//  export default UnmountExample