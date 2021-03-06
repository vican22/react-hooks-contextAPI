import { useState } from "react";
import createUseContext from "constate";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return { count, increment, decrement };
};

export const useCounterContext = createUseContext(useCounter);
