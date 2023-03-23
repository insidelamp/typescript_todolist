import React, { useState, useEffect } from "react";
import TopSpace from "./components/TopSpace";
import DownSpace from "./components/DownSpace";
import styled from "styled-components";
import { initialState } from "./components/Data";

// export interface FormValue {
//   id: number;
//   text: string;
// }

export interface FormValue {
  id: number;
  text: string;
}

export interface ValueProps {
  fetData: FormValue[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
  lengthCount: number;
  setLengthCount: React.Dispatch<React.SetStateAction<number>>;
}

function App() {
  const [fetData, setFetData] = useState(initialState);
  const [count, setCount] = useState<number>(0);
  const [lengthCount, setLengthCount] = useState<number>(initialState.length);
  let fetchData = initialState;
  useEffect(() => {
    if (localStorage.getItem("text") !== null) {
      let storageArray = JSON.parse(localStorage.getItem("text") || "");
      setFetData([...storageArray, ...fetchData]);
    }
  }, [count]);
  return (
    <Wrapper>
      <TopSpace
        fetData={fetData}
        setCount={setCount}
        lengthCount={lengthCount}
        setLengthCount={setLengthCount}
      />
      <DownSpace
        fetData={fetData}
        setCount={setCount}
        lengthCount={lengthCount}
        setLengthCount={setLengthCount}
      />
      <A />
      <A className="rightTop" />
      <A className="leftDown" />
      <A className="rightDown" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const A = styled.div`
  width: 50%;
  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;
  background: linear-gradient(135deg, #03045e, #caf0f8);
  &.rightTop {
    width: 50%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 50%;
    background: linear-gradient(225deg, #03045e, #caf0f8);
  }
  &.leftDown {
    width: 50%;
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 0;
    background: linear-gradient(45deg, #03045e, #caf0f8);
  }
  &.rightDown {
    width: 50%;
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    background: linear-gradient(315deg, #03045e, #caf0f8);
  }
`;

export default App;
