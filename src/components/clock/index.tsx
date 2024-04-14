import { useState, useEffect } from "react";
import { Time, getTime, getTimeOfDay, getColor } from "./helper";

function useTime() {
  const [display, setDisplay] = useState<Time[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay(getTime());
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return display;
}

function Clock() {
  const [hours, minutes, seconds, milliseconds] = useTime();
  return (
    <div>
      <h2 className="text-center text-7xl md:text-8xl text-slate-700 text-opacity-25 dark:text-gray-500">
        {getTimeOfDay(hours)}
      </h2>
      <div className="my-12 flex items-end justify-center">
        <div className="text-9xl text-gray-700 dark:text-gray-600">{hours}</div>
        <div className="mb-2 text-6xl text-gray-500 dark:text-gray-500">
          {minutes}
        </div>
        <div className="mb-2 w-11 text-4xl text-gray-300 dark:text-gray-400">
          {seconds}
        </div>
        <div
          className={`w-8 mb-2 text-xl text-gray-400 font-thin ${getColor(
            milliseconds
          )}`}
        >
          {milliseconds}
        </div>
      </div>
    </div>
  );
}
export default Clock;
