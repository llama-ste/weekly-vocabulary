import styled from "styled-components";

const LayoutWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;

  & .inner {
    width: 80%;
  }
`;

const Layout = (props) => {
  return (
    <LayoutWrapper>
      <div className="inner">{props.children}</div>
    </LayoutWrapper>
  );
};

export default Layout;
