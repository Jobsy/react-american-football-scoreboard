// import React from "react";
import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [downValue, down] = useState(0);
  function downFn() {
    down(downValue + 1);
  }
  const [toGoValue, toGo] = useState(0);
  function toGoFn() {
    toGo(toGoValue + 1);
  }
  const [ballOnValue, ballOn] = useState(0);
  function ballOnFn() {
    ballOn(ballOnValue + 3);
  }
  const [quarterValue, quarter] = useState(0);
  function quarterValueFn() {
    quarter(quarterValue + 3);
  }

  // return (
  //   <div className="bottomRow">
  //     <div className="down">
  //       <h3 className="down__title">Down</h3>
  //       <div className="down__value">3</div>
  //     </div>
  //     <div className="toGo">
  //       <h3 className="toGo__title">To Go</h3>
  //       <div className="toGo__value">7</div>
  //     </div>
  //     <div className="ballOn">
  //       <h3 className="ballOn__title">Ball on</h3>
  //       <div className="ballOn__value">21</div>
  //     </div>
  //     <div className="quarter">
  //       <h3 className="quarter__title">Quarter</h3>
  //       <div className="quarter__value">4</div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downValue}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGoValue}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOnValue}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterValue}</div>
      </div>


      <div className="">
        <button onClick={downFn} className="down__value1">Down</button>
        <button onClick={toGoFn} className="toGo__value1">ToGo</button>
        <button onClick={ballOnFn} className="ballOn__value1">BallOn</button>
        <button onClick={quarterValueFn} className="quarter__value1">Quarter</button>
      </div>
    </div>
  );

};

export default BottomRow;





