import React, { useEffect } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValue {
  id: number;
  text: string;
}
const fetdata = [
  { id: 1, text: "react" },
  { id: 2, text: "typescript" },
  { id: 3, text: "javascript" },
];
console.log(fetdata);
function TopSpace() {
  const { register, handleSubmit } = useForm<FormValue>();

  const submitFunc = (data: FormValue) => {
    fetdata.push({ id: 3, text: data.text });
  };

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify([...fetdata]));
  }, []);
  return (
    <Wrapper>
      <TodoTitle>React + TypeScript TodoList</TodoTitle>
      <TopContents onSubmit={handleSubmit(submitFunc)}>
        <WriteInput {...register("text")} placeholder="할일을 입력해주세요!" />
        <Btn>버튼</Btn>
      </TopContents>
    </Wrapper>
  );
}

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
