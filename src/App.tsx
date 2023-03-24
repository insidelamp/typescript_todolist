import React, { useState, useEffect } from "react";
import TopSpace from "./pages/TopSpace";
import DownSpace from "./pages/DownSpace";
import styled from "styled-components";

export interface FormValue {
  id: number;
  text: string;
  checkHover: boolean;
}

export interface ValueProps {
  fetData: FormValue[];
  setFetData: any;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function App() {
  const [fetData, setFetData] = useState([]);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    if (localStorage.getItem("text") !== null) {
      let fetchData = JSON.parse(localStorage.getItem("text") || "");
      console.log(fetchData);
      setFetData(fetchData);
    }
  }, [count]);

  return (
    <Wrapper>
      <TopSpace fetData={fetData} setFetData={setFetData} setCount={setCount} />
      <DownSpace
        fetData={fetData}
        setFetData={setFetData}
        setCount={setCount}
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
