import React from "react";
import styled from "styled-components";
import { FormValue, ValueProps } from "../App";

//RiDeleteBin5Line
const DownSpace: React.FC<ValueProps> = ({ fetData, setCount }) => {
  return (
    <Wrapper>
      <DownWrapper>
        {fetData?.map((data) => (
          <DataContent key={data.id}>{data.text}</DataContent>
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

const DataContent = styled.div`
  width: 90%;
  height: 60px;
  font-size: 40px;
  color: black;
  margin: 10px 0px;
  background-color: yellowgreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default DownSpace;
