import React from "react";
// import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeValue);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col justify-center items-center p-[15%]">
        <h1 className="flex p-5 text-3xl">INCREMENT/DECREMENT COUNTER APP</h1>
        <div className="flex p-4  ">
          <button
            className="bg-red-400 rounded h-11 w-11 "
            onClick={() => dispatch(decNumber())}
          >
            -
          </button>
          <div className="flex justify-center items-center mx-10 font-bold">
            {myState}
          </div>
          <button
            className="bg-red-400 rounded h-11 w-11"
            onClick={() => dispatch(incNumber())}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
