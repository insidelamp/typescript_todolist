import React, { useState } from "react";
import styled from "styled-components";
import { ValueProps } from "../App";
import Contents from "../components/Contents";

//RiDeleteBin5Line
const DownSpace: React.FC<ValueProps> = ({ fetData, setFetData }) => {
  const deleteFunc = (id: number) => {
    setFetData(fetData.filter((el) => el.id !== id));
  };
  console.log(fetData);
  const overFunc = (item: number) => {
    let filterData = fetData.filter((el) => el.id === item);
    let indexData = fetData.findIndex((data) => data.id === filterData[0].id);
    if (indexData === 0) {
      setFetData([
        // ...fetData.slice(indexData, indexData + 1),
        {
          id: filterData[0].id,
          text: filterData[0].text,
          checkHover: !filterData[0].checkHover,
        },
        ...fetData.slice(indexData + 1, fetData.length),
      ]);
    } else {
      setFetData([
        ...fetData.slice(0, indexData),
        {
          id: filterData[0].id,
          text: filterData[0].text,
          checkHover: !filterData[0].checkHover,
        },
        ...fetData.slice(indexData + 1, fetData.length),
      ]);
    }
    // setFetData()
  };
  const leaveFunc = (item: number) => {
    let filterData = fetData.filter((el) => el.id === item);
    let indexData = fetData.findIndex((data) => data.id === filterData[0].id);
    if (indexData === 0) {
      setFetData([
        // ...fetData.slice(indexData, indexData + 1),
        {
          id: filterData[0].id,
          text: filterData[0].text,
          checkHover: !filterData[0].checkHover,
        },
        ...fetData.slice(indexData + 1, fetData.length),
      ]);
    } else {
      setFetData([
        ...fetData.slice(0, indexData),
        {
          id: filterData[0].id,
          text: filterData[0].text,
          checkHover: !filterData[0].checkHover,
        },
        ...fetData.slice(indexData + 1, fetData.length),
      ]);
    }
    // setFetData()
  };

  return (
    <Wrapper>
      <DownWrapper>
        {fetData?.map((data) => (
          <Contents
            key={data.id}
            id={data.id}
            text={data.text}
            checkHover={data.checkHover}
            deleteFunc={deleteFunc}
            overFunc={overFunc}
            leaveFunc={leaveFunc}
          />
        ))}
      </DownWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
`;
const DownWrapper = styled.div`
  width: 600px;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid black;
  background-color: #dfdfdf;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default DownSpace;
