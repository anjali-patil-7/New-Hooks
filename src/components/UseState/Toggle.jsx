// import { useState } from "react";

// function Toggle(){
//     const [isOn, setIsOn] = useState(false)
//     return(
//         <div>
//             <h3>status: {isOn ? "ON" : "OFF"}</h3>
//             <button onClick={()=> setIsOn(prev=> !prev)}>Toggle</button>
//         </div>
//     )
// }
// export default Toggle


import { useState } from "react";

function Toggle(){
    const [dark, setDark] = useState(false)
    return(
        <div style={{background: dark? "#000" : "#fff"}}>
            <button onClick={()=>setDark(!dark)}>Toggle</button>
        </div>
    )
}

export default Toggle