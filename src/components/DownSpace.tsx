import React from "react";
import styled from "styled-components";
import { FormValue, ValueProps } from "../App";

//RiDeleteBin5Line
const DownSpace: React.FC<ValueProps> = ({ fetData, setCount }) => {
  return (
    <Wrapper>
      {fetData?.map((data) => (
        <DataContent key={data.id}>{data.text}</DataContent>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid red;
  z-index: 2;
  position: relative;
`;

const DataContent = styled.div`
  font-size: 40px;
  color: white;
  margin: 10px 0px;
`;
export default DownSpace;
