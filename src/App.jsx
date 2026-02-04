//1***********usestate
// import Counter from "./components/UseState/Counter";
// import LiveInput from "./components/UseState/LiveInput";
// import Toggle from "./components/UseState/Toggle";

// function App(){
//   return(
//     <div>
//       {/* This is counter app 
//       <Counter/> */}
//       {/* <LiveInput/> */}
//       <Toggle/>
//     </div>
//   )
// }
// export default App;

//2**************useEffect
// import MountExampe from "./components/UseEffect/Lifecycle"
// import UpdateExample from "./components/UseEffect/Lifecycle"
// import UnmountExample from "./components/UseEffect/Lifecycle"
// import FetchData from "./components/UseEffect/Fetch"
// import EventExample from "./components/UseEffect/Fetch"
// import Timer from "./components/UseEffect/Timer"
// import Countdown from "./components/UseEffect/Timer"
// import DelayMessage from "./components/UseEffect/Timer"
// import StartStopTimer from "./components/UseEffect/Timer"
//  import AutoStopTimer from "./components/UseEffect/Timer"
// function App(){
//   return(
//     <div>
//       {/* <MountExampe/> */}
//     {/* <  UpdateExample/> */}
//      {/* <UnmountExample/> */}
//      {/* <FetchData/> */}
//      {/* <EventExample/> */}
//      {/* <Timer/> */}
//      {/* <Countdown/> */}
//      {/* <DelayMessage/> */}
//      {/* <StartStopTimer/> */}
//      {/* <AutoStopTimer/>
//     </div>
//   )
// }
// export default App  */}





///3***************useContext
// import { ThemeProvider } from "./components/UseContext/Theme";
// import Toggle from "./components/UseContext/Toggle";

// function App(){
//   return(
//     <ThemeProvider>
//       <Toggle/>
//     </ThemeProvider>
//   )
// }
// export default App; 
//..........data passing without props
// import { UserContext } from "./components/UseContext/Theme";
// import Child from "./components/UseContext/Toggle";
// function App(){
//   return(
//     <UserContext.Provider value = "Anjali">
//       <Child/>
//     </UserContext.Provider>
//   )
// }
// export default App; 

//..............Update Context value from a child component
// import { UserProvider } from "./components/UseContext/Theme";
// import Child from "./components/UseContext/Toggle";

// function App (){
//   return(
//     <UserProvider>
//       <Child/>
//     </UserProvider>
//   )
// }
// export default App;


//4**********useReducer
// import Counter from "./components/UseReducer/Counder";

// const App = ()=>{
//   return(
//     <div>
//       <Counter/>
//     </div>
//   )
// }
// export default App; 



//***************usecallback */
// import Parent from "./components/UseCallback/Parent";

// function App(){
//   return(
//     <div>
//       <Parent/>
//     </div>
//   )
// }
// export default App;


///**************useMemo */
import Sumnum from "./components/UseMemo/sum";
function App(){
  return(
    <div>
      <Sumnum/>
    </div>
  )
}
export default App