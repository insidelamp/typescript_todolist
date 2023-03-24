import React, { useState } from "react";
import { FormValue, ValueProps } from "../App";
import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";

interface ContentType {
  id: number;
  text: string;
  checkHover: boolean;
  deleteFunc: (id: number) => void;
  overFunc: (id: number) => void;
  leaveFunc: (id: number) => void;
}

const Contents: React.FC<ContentType> = ({
  id,
  text,
  checkHover,
  deleteFunc,
  leaveFunc,
  overFunc,
}) => {
  return (
    <Wrapper
      key={id}
      onMouseOver={() => overFunc(id)}
      onMouseLeave={() => leaveFunc(id)}
      checkHover={checkHover}
    >
      <Content> {text}</Content>
      <Btn className="hoverDisplay">
        <RiDeleteBin5Line onClick={() => deleteFunc(id)} />
      </Btn>
    </Wrapper>
  );
};
interface PropsStyled {
  checkHover: boolean;
}
const Wrapper = styled.div<PropsStyled>`
  width: 90%;
  height: 60px;
  font-size: 40px;
  color: black;
  margin: 10px 0px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .hoverDisplay {
    display: ${(props) => (props.checkHover ? "contents" : "none")};
  }
`;
const Content = styled.div`
  width: 90%;
`;

const Btn = styled.button`
  width: 10%;
  height: 100%;
  font-size: 30px;
  background-color: transparent;
  border: none;
`;

export default Contents;
