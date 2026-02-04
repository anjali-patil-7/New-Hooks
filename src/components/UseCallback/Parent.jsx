// import { useState, useCallback } from "react";
// import Button from "./Button";

// const Parent = () => {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(c => c + 1);
//   }, []);

//   console.log("Parent rendered");

//   return (
//     <>
//       <h3>{count}</h3>
//       <Button onClick={increment} />
//     </>
//   );
// };

// export default Parent;