import React, { useState } from "react";
import styled from "styled-components";
import { FormValue, ValueProps } from "../App";
import Contents from "../components/Contents";

//RiDeleteBin5Line
const DownSpace: React.FC<ValueProps> = ({ fetData, setFetData }) => {
  const updateFunc = (text: FormValue) => {
    let updateFilter = fetData.filter((el) => el.checkUpdate === true);
    let indexData = fetData.findIndex((data) => data.id === updateFilter[0].id);
    if (indexData === 0) {
      setFetData([
        {
          ...text,
          id: updateFilter[0].id,
          checkHover: updateFilter[0].checkHover,
          checkUpdate: !updateFilter[0].checkUpdate,
        },
        ...fetData.slice(indexData + 1, fetData.length),
      ]);
      localStorage.setItem(
        "text",
        JSON.stringify([
          {
            ...text,
            id: updateFilter[0].id,
            checkHover: updateFilter[0].checkHover,
            checkUpdate: !updateFilter[0].checkUpdate,
          },
          ...fetData.slice(indexData + 1, fetData.length),
        ])
      );
    } else {
      setFetData([
        ...fetData.slice(0, indexData),
        {
          ...text,
          id: updateFilter[0].id,
          checkHover: updateFilter[0].checkHover,
          checkUpdate: !updateFilter[0].checkUpdate,
        },
        ...fetData.slice(indexData + 1, fetData.length),
      ]);
      localStorage.setItem(
        "text",
        JSON.stringify([
          ...fetData.slice(0, indexData),
          {
            ...text,
            id: updateFilter[0].id,
            checkHover: updateFilter[0].checkHover,
            checkUpdate: !updateFilter[0].checkUpdate,
          },
          ...fetData.slice(indexData + 1, fetData.length),
        ])
      );
    }
  };
  const updateStateFunc = (id: number) => {
    let filterFetData = fetData.filter((el) => el.id === id);
    let indexData = fetData.findIndex(
      (data) => data.id === filterFetData[0].id
    );
    if (indexData === 0) {
      setFetData([
        {
          id: filterFetData[0].id,
          text: filterFetData[0].text,
          checkHover: filterFetData[0].checkHover,
          checkUpdate: !filterFetData[0].checkUpdate,
        },
        ...fetData.slice(indexData + 1, fetData.length),
      ]);
    } else {
      setFetData([
        ...fetData.slice(0, indexData),
        {
          id: filterFetData[0].id,
          text: filterFetData[0].text,
          checkHover: filterFetData[0].checkHover,
          checkUpdate: !filterFetData[0].checkUpdate,
        },
        ...fetData.slice(indexData + 1, fetData.length),
      ]);
    }
  };
  const deleteFunc = (id: number) => {
    setFetData(fetData.filter((el) => el.id !== id));
    localStorage.setItem(
      "text",
      JSON.stringify(fetData.filter((el) => el.id !== id))
    );
  };
  const overFunc = (item: number, e: any) => {
    e.preventDefault();
    let filterData = fetData.filter((el) => el.id === item);
    let indexData = fetData.findIndex((data) => data.id === filterData[0].id);
    if (indexData === 0) {
      setFetData([
        {
          id: filterData[0].id,
          text: filterData[0].text,
          checkHover: !filterData[0].checkHover,
          checkUpdate: filterData[0].checkUpdate,
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
          checkUpdate: filterData[0].checkUpdate,
        },

        ...fetData.slice(indexData + 1, fetData.length),
      ]);
    }
    // setFetData()
  };
  const leaveFunc = (item: number, e: any) => {
    e.preventDefault();
    let filterData = fetData.filter((el) => el.id === item);
    let indexData = fetData.findIndex((data) => data.id === filterData[0].id);
    if (indexData === 0) {
      setFetData([
        // ...fetData.slice(indexData, indexData + 1),
        {
          id: filterData[0].id,
          text: filterData[0].text,
          checkHover: !filterData[0].checkHover,
          checkUpdate: filterData[0].checkUpdate,
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
          checkUpdate: filterData[0].checkUpdate,
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
            checkUpdate={data.checkUpdate}
            deleteFunc={deleteFunc}
            overFunc={overFunc}
            leaveFunc={leaveFunc}
            updateStateFunc={updateStateFunc}
            updateFunc={updateFunc}
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
  background-color: #dfdfdf;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    background: linear-gradient(
      45deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000
    );
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    animation: steam 20s linear infinite;
  }

  @keyframes steam {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  .block:after {
    filter: blur(50px);
  }
`;

export default DownSpace;
