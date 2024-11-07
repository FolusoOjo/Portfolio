import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

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

          <Link to="/mainabout">
            <p>About</p>
          </Link>

          <p>Contact</p>

          <span>
            <RxHamburgerMenu />
          </span>
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
  padding: 0 25px;
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

  @media (max-width: 800px) {
    background-color: yellow;
    max-width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin-bottom: 70px;
    padding: 0 40px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  p {
    padding: 0 20px;
    font-family: "Itim", cursive;
    font-weight: 540;
    font-style: normal;
    font-size: 15px;
  }
  span {
    display: none;
  }

  @media (max-width: 800px) {
    background-color: green;
    p {
      display: none;
    }
    span {
      display: block;
    }
  }
`;
