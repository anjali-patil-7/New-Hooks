//1..............Create a timer that increases count every second.
//setInterval inside useEffect ---Update state every second---Cleanup interval on unmount

// import { useState, useEffect } from "react";

// const Timer = ()=>{
//     const [count , setCount] = useState(0)

//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setCount(prev=>prev + 1)
//         },1000);

//         return()=>clearInterval(interval)
//     },[])

//     return <h3>Timer: {count}</h3>
// }
// export default Timer

//........Create a countdown timer from 10 to 0.
// import { useEffect, useState } from "react";

// const Countdown = () => {
//   const [time, setTime] = useState(10);

//   useEffect(() => {
//     if (time === 0) return;

//     const interval = setInterval(() => {
//       setTime(prev => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [time]);

//   return <h3>Countdown: {time}</h3>;
// };

// export default Countdown;


//.............Show a message after 3 seconds.
// import { useEffect, useState } from "react";

// const DelayMessage = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShow(true);
//     }, 3000);

//     return () => clearTimeout(timeout);
//   }, []);

//   return <h3>{show ? "Hello after 3 seconds" : "Waiting..."}</h3>;
// };

// export default DelayMessage;


//...............Create a timer with Start and Stop buttons.
// import { useEffect, useState } from "react";

// const StartStopTimer = () => {
//   const [count, setCount] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     if (!running) return;

//     const interval = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [running]);

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={() => setRunning(true)}>Start</button>
//       <button onClick={() => setRunning(false)}>Stop</button>
//     </div>
//   );
// };

// export default StartStopTimer;

//................Stop timer automatically after 5 seconds.
import { useEffect, useState } from "react";

const AutoStopTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time === 5) return;

    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <h3>Time: {time}</h3>;
};

export default AutoStopTimer;
