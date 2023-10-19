import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./Actions";

const App = () => {
  const state = useSelector((stat) => stat.changeTheNumber);   //to read the data from the store
  const dispatch = useDispatch();                              //to display the data from the store

  return (
    <>
      <div className="container">
        <h1>Increment/ Decrement counter using React Redux</h1>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => {
              dispatch(decNumber());
            }}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            className="quantity_input"
            value={state}
            type="text"
            onChange={() => {}}
          />
          <a
            className="quantity_plus"
            title="Increment"
            onClick={() => {
              dispatch(incNumber(2));
            }}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
