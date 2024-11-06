import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Flex>
        <Link to="/">
          <h6>FolusoOjo</h6>
        </Link>

        <Info>
          <Link to="/projects">
            <p>Work</p>
          </Link>

          <Link to="/about">
            <p>About</p>
          </Link>

          <p>Contact</p>
        </Info>
      </Flex>
    </>
  );
}
export default Header;

const Flex = styled.div`
  display: flex;
  background-color: hotpink;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  h6 {
    font-family: "Itim", cursive;
    font-weight: 540;
    font-style: normal;
    font-size: 15px;
  }

  @media (max-screen: 900px) {
    background-color: skyblue;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 2px solid chartreuse; */
  width: 20%;
  align-items: center;
`;
