
import { useMemo } from "react";

function Sumnum() {
  const numbers = [1, 2, 3, 4];

  const sum = useMemo(() => {
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  return <h2>Sum: {sum}</h2>;
}

export default Sumnum;
