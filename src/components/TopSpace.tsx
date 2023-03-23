import React, { useEffect } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValue, ValueProps } from "../App";
import { initialState } from "../components/Data";

interface FetchCount {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const TopSpace = ({
  fetData,
  setCount,
  lengthCount,
  setLengthCount,
}: ValueProps) => {
  const { register, handleSubmit } = useForm<FormValue>();
  console.log(initialState.length);

  let lea = {};
  const submitFunc = (data: FormValue) => {
    console.log(data);
    setCount(Date.now());
    if (localStorage.getItem("text") !== null) {
      var original = JSON.parse(localStorage.getItem("text") || "");
    }
    if (lengthCount == 3) {
      lea = { ...data, id: lengthCount + 1 };
      setLengthCount(lengthCount + 2);
    } else {
      lea = { ...data, id: lengthCount };
      setLengthCount(lengthCount + 1);
    }
    let newText = [lea];
    console.log(newText);
    if (original) {
      newText = [lea, ...original];
    }
    localStorage.setItem("text", JSON.stringify(newText));
  };

  return (
    <Wrapper>
      <TodoTitle>React + TypeScript TodoList</TodoTitle>
      <TopContents onSubmit={handleSubmit(submitFunc)}>
        <WriteInput {...register("text")} placeholder="할일을 입력해주세요!" />
        <Btn>버튼</Btn>
      </TopContents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid blue;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoTitle = styled.div`
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 30px;
`;
const TopContents = styled.form`
  width: 30%;
  height: 80px;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

const WriteInput = styled.input`
  width: 80%;
  height: 40px;
`;

const Btn = styled.button``;

export default TopSpace;
