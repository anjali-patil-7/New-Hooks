//1............toggle
// import { createContext, useState } from "react";

// export const ThemeContext = createContext(null);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };



//2...............Pass a username to a deeply nested component without using props.
// import { createContext } from "react";

// export const UserContext = createContext()


//3..............Update Context value from a child component
import {  createContext, useState } from "react";

export const UserContext = createContext()
export const UserProvider = ({children })=>{
    const [name, setName] = useState("Anjali")

    return(
        <UserContext.Provider value = {{name, setName}}>
            {children }
        </UserContext.Provider>
    )
}