import styled from "styled-components";
import { Link } from "react-router-dom";

const EmptyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  & a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
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

  h5 {
    margin: 5px;
  }
`;

const EmptyPage = () => {
  return (
    <EmptyPageWrapper>
      <h1>Empty Page!</h1>
      <Link to="/">
        <h5>되돌아가기</h5>
      </Link>
    </EmptyPageWrapper>
  );
};

export default EmptyPage;
