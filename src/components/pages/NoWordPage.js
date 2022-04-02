import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const NoWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  & a {
    text-shadow: 1px 1px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 15px;
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 8px;
    z-index: 1;
    background: rgba(46, 54, 68, 0.03);
    backdrop-filter: blur(10px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    font-size: 18px;
    background-clip: padding-box;
  }
`;

const NoWordPage = () => {
  const params = useParams();

  return (
    <NoWordWrapper>
      <h2>{params.day}일차 단어가 없습니다.</h2>
      <Link to="/">되돌아가기</Link>
    </NoWordWrapper>
  );
};

export default NoWordPage;
