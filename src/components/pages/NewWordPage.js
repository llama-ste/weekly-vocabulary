import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.form`
  width: 100%;
  color: #fff;

  & div {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
  }

  & label {
    margin-bottom: 7px;
    font-weight: bold;
  }

  & input,
  & select {
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 0.8rem 1rem;
    font-size: 16px;
  }

  button {
    color: #fff;
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 10px;
    background: rgba(46, 54, 68, 0.03);
    backdrop-filter: blur(10px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    background-clip: padding-box;
    text-shadow: 1px 1px;
  }

  button:hover {
    cursor: pointer;
  }
`;

const NewWordPage = () => {
  const navigate = useNavigate();
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEng = engRef.current.value;
    const enteredKor = korRef.current.value;
    const enteredDay = dayRef.current.value;

    if (enteredEng && enteredKor && enteredDay) {
      const existWord = JSON.parse(localStorage.getItem("json"));
      let updatedWord;

      if (!existWord) {
        updatedWord = [
          {
            id: Math.random(),
            eng: engRef.current.value,
            kor: korRef.current.value,
            day: dayRef.current.value,
            isDone: false,
          },
        ];
      } else {
        updatedWord = [
          ...existWord,
          {
            id: Math.random(),
            eng: engRef.current.value,
            kor: korRef.current.value,
            day: dayRef.current.value,
            isDone: false,
          },
        ];
      }

      localStorage.setItem("json", JSON.stringify(updatedWord));
      alert("저장이 완료 되었습니다!");
      navigate(`/day/${enteredDay}`);
    } else {
      alert("모든값을 입력해주세요!");
    }
  };

  return (
    <FormWrapper onSubmit={submitHandler}>
      <div>
        <label>English</label>
        <input ref={engRef} type="text" />
      </div>
      <div>
        <label>Korean</label>
        <input ref={korRef} type="text" />
      </div>
      <div>
        <label>Day</label>
        <select ref={dayRef}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
      </div>
      <button>저장</button>
    </FormWrapper>
  );
};

export default NewWordPage;
