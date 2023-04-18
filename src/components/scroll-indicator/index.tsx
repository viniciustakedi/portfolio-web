
import { BsFillMouseFill } from "react-icons/bs";

const ScrollIndicator = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <div className="w-1 h-1 rounded-full bg-blue animate-pulse delay-500"></div>
        <div className="w-1 h-1 mt-1 rounded-full bg-blue animate-pulse delay-1000"></div>
        <div className="w-1 h-1 mt-1 mb-1 rounded-full bg-blue animate-pulse delay-500"></div>
      </div>
      <BsFillMouseFill size={22} className="text-blue animate-pulse delay-1000" />
    </div>
  );
}

export default ScrollIndicator;