import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 40px;

  & a {
    text-shadow: 1px 1px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 20px;
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 8px;
    z-index: 1;
    background: rgba(46, 54, 68, 0.03);
    backdrop-filter: blur(10px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    background-clip: padding-box;
  }
`;

const AdviceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 3rem;
  color: #fff;
  text-shadow: 1px 1px;
`;

const DayList = () => {
  const [loaded, setLoaded] = useState(false);
  const [advice, setAdvice] = useState();

  useEffect(() => {
    const adviceApi = async () => {
      const data = await (
        await fetch("https://api.adviceslip.com/advice")
      ).json();

      setAdvice(data.slip.advice);
      setLoaded(true);
    };

    adviceApi();
  }, []);

  const day = [1, 2, 3, 4, 5, 6, 7].map((day) => {
    return (
      <li key={day}>
        <Link to={`/day/${day}`}>Day {day}</Link>
      </li>
    );
  });
  return (
    <>
      <List>{day}</List>
      <AdviceWrapper>
        <h2>Today's Advice</h2>
        <h3>{loaded ? advice : "Loading..."}</h3>
      </AdviceWrapper>
    </>
  );
};

export default DayList;
