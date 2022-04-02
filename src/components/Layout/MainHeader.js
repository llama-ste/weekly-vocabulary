import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 25px;
  margin-bottom: 2rem;

  & h1 {
    text-shadow: 1px 1px;
    font-weight: bold;
    margin: 0px;
  }

  & a {
    color: #ffffff;
    text-decoration: none;
  }

  .card {
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
    text-shadow: 1px 1px;
  }
`;

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <h1>
        <Link to="/">Weekly Vocabulary</Link>
      </h1>
      <div>
        <Link className="card" to="/new_word">
          Add Word
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default MainHeader;
