import  {useState,useEffect} from "react";

const useDelay = (value, timeout) => {
  const [delayValue, setDelayValue] = useState(value);
  useEffect(() => {
    
    const op = setTimeout(() => {
      setDelayValue(value);
    },  timeout);
    return () => {
      clearTimeout(op);
    };
  }, [value, timeout]); 
  return delayValue;
};
export default  useDelay;