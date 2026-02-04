//1.......toggle
// import { useContext } from "react";
// import { ThemeContext } from "./Theme";

// const Toggle = ()=>{
//     const context = useContext(ThemeContext)

//     if(!context) return <h2>context not found</h2>
//     const {theme, setTheme} = context

//     return (
//         <div>
//             <h2>Theme : {theme}</h2>
//             <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Toggle</button>
//         </div>
//     )
// }
// export default Toggle ; 

//.........pass a username to a deeply nested component without using props.
// import { useContext } from "react";
// import { UserContext } from "./Theme";

// const Child = ()=>{
//     const name = useContext(UserContext)
//     return <h3>hello {name}</h3>
// }
// export default Child;


//.............Update Context value from a child component
import { useContext } from "react";
import { UserContext } from "./Theme";

const Child = ()=>{
    const {name, setName} = useContext(UserContext)
     return(
        <div>
            <h3>hello {name}</h3>
            <button onClick={()=>setName("react developer")}>change name</button>
        </div>
     )
}
export default Child;
