import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValue, ValueProps } from "../App";
import { AiOutlineCheck } from "react-icons/ai";

const TopSpace = ({ fetData, setFetData, setCount }: ValueProps) => {
  const { register, handleSubmit } = useForm<FormValue>();
  let dataItem = {};
  const submitFunc = (data: FormValue) => {
    setCount(Date.now());
    if (localStorage.getItem("text") !== null) {
      var original = JSON.parse(localStorage.getItem("text") || "");
    }

    dataItem = {
      ...data,
      id: fetData.length + 1,
      checkHover: false,
      checkUpdate: false,
    };
    let newText = [dataItem];
    if (original) {
      newText = [dataItem, ...original];
    }

    localStorage.setItem("text", JSON.stringify(newText));
  };

  return (
    <Wrapper>
      <TodoTitle>React + TypeScript TodoList</TodoTitle>
      <TopContents onSubmit={handleSubmit(submitFunc)}>
        <WriteInput {...register("text")} placeholder="할일을 입력해주세요!" />
        <Btn>
          <AiOutlineCheck />
        </Btn>
      </TopContents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
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
  color: white;
`;
const TopContents = styled.form`
  width: 30%;
  height: 80px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const WriteInput = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
`;

const Btn = styled.button`
  font-size: 35px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
`;

export default TopSpace;
