import { useParams } from "react-router-dom";
import styled from "styled-components";
import Word from "../Word";
import NoWordPage from "./NoWordPage";

const DayWrapper = styled.div`
  margin-bottom: 2rem;
  color: #fff;

  h2 {
    text-shadow: 1px 1px;
  }

  & table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  & table td {
    text-shadow: 1px 1px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    background: rgba(46, 54, 68, 0.03);
    width: 35%;
    height: 70px;
    border: 1px solid transparent;
    text-align: center;
    font-size: 20px;
    overflow-wrap: break-word;
  }

  & table td:first-child {
    width: 10%;
  }

  & table td:nth-child(4) {
    width: 20%;
  }

  & table td:nth-child(3) {
    font-size: 17px;
  }

  & button {
    text-shadow: 1px 1px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    background: rgba(46, 54, 68, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 10px;
    color: #fff;
  }

  & button:hover,
  & table td:nth-child(3) {
    cursor: pointer;
  }

  & .off {
    background-color: #ced4da;
    color: #e9ecef;
  }
`;

const DayPage = () => {
  const params = useParams();

  let storedWord = JSON.parse(localStorage.getItem("json"));

  if (storedWord === null) {
    localStorage.setItem("json", JSON.stringify([]));
    storedWord = [];
  }

  const filterDay = storedWord.filter((word) => {
    return word.day === params.day;
  });

  const word = filterDay.map((word) => {
    return <Word key={word.id} word={word} />;
  });

  const listLen = word.length === 0;

  return (
    <DayWrapper>
      <h2>Day {params.day}</h2>
      {!listLen ? (
        <table>
          <tbody>{word}</tbody>
        </table>
      ) : null}
      {listLen && <NoWordPage />}
    </DayWrapper>
  );
};

export default DayPage;
