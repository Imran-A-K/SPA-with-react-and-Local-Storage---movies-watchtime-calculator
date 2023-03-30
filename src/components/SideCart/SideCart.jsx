import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState(watchTime);

  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getWatchTimeFromStorage = localStorage.getItem("watchTime");
    setTime(getWatchTimeFromStorage);
    const getBreakTime = localStorage.getItem("breakTime");
    if(getBreakTime){
      setBreakTime(getBreakTime);
    }
  }, [watchTime]);

  const handleBreakTime = (bt,event) => {
    localStorage.setItem("breakTime", bt);
    setBreakTime(bt);
    
      event.currentTarget.disabled = true;
      // console.log('button clicked');
    
  };
  const handleComplete = () => {
    toast("Wow so easy !");
  };

  return (
    <div>
      <h1>My Cart</h1>

      <div className="mt-5 text-center">
        <p>total watch time</p>
        <input type="text" value={time} disabled />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      <button
        onClick={(event) => handleBreakTime(15,event)}
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </button>
      <button className="w-25 btn-circle bg-warning btn btn-info">20</button>
      <button className="w-25 btn-circle m-1 bg-danger btn btn-info">25</button>
      <input type="text" value={breakTime} disabled />
      <button onClick={handleComplete} className="mt-5 btn btn-info w-100">
        Complete
      </button>
    </div>
  );
};

export default SideCart;
