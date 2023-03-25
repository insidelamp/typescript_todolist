import React, { useState } from "react";
import { FormValue } from "../App";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

interface ContentType {
  id: number;
  text: string;
  checkHover: boolean;
  checkUpdate: boolean;
  deleteFunc: (id: number) => void;
  overFunc: (id: number, e: any) => void;
  leaveFunc: (id: number, e: any) => void;
  updateStateFunc: (id: number) => void;
  updateFunc: any;
}

const Contents: React.FC<ContentType> = ({
  id,
  text,
  checkHover,
  checkUpdate,
  deleteFunc,
  leaveFunc,
  overFunc,
  updateStateFunc,
  updateFunc,
}) => {
  const { register, handleSubmit } = useForm<FormValue>();
  return (
    <Wrapper
      key={id}
      onMouseEnter={(e) => overFunc(id, e)}
      onMouseLeave={(e) => leaveFunc(id, e)}
      checkHover={checkHover}
    >
      {checkUpdate ? (
        <FormInput onSubmit={handleSubmit(updateFunc)}>
          <InputContent defaultValue={text} {...register("text")} />
          <Btn>
            <AiOutlineCheck />
          </Btn>
        </FormInput>
      ) : (
        <FormInput>
          <Content> {text}</Content>
          {checkHover ? (
            <>
              <Btn className="hoverDisplay">
                <FaPencilAlt onClick={() => updateStateFunc(id)} />
              </Btn>
              <Btn className="hoverDisplay">
                <RiDeleteBin5Line onClick={() => deleteFunc(id)} />
              </Btn>
            </>
          ) : (
            ""
          )}
        </FormInput>
      )}
    </Wrapper>
  );
};
interface PropsStyled {
  checkHover: boolean;
}
const Wrapper = styled.div<PropsStyled>`
  width: 80%;
  height: 60px;
  color: black;
  margin: 10px 0px;
  background-color: white;
  padding: 0px 20px;
  & > .hoverDisplay {
    display: ${(props) => (props.checkHover ? "contents" : "none")};
  }
`;

const FormInput = styled.form`
  width: 100%;
  height: 60px;
  font-size: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  width: 70%;
  padding-left: 20px;
`;

const InputContent = styled.input`
  width: 73%;
  height: 60%;
  font-size: 30px;
`;

const Btn = styled.button`
  width: 10%;
  height: 80%;
  margin: auto 0px;
  font-size: 30px;
  background-color: transparent;
`;

export default Contents;
