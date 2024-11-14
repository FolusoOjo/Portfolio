import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react"
import Sidebar from "../Pages/SideBar";

function Header() {
  const scrollToSection = (idPassed) => {
    const Section = document.getElementById(idPassed);
    Section?.scrollIntoView({ behavior: "smooth" });
    console.log("I have been clicked");
  };

  const [toggle, setToggle] = useState(false)
  const navigation = () => {

    setToggle(!toggle)
    console.log(toggle);
    

   
    // setToggle(false);
  };

  return (
    <>
      <Flex>
        <h6>FolusoOjo</h6>

        <Info>
          <Link to="/">
            <p>Home</p>
          </Link>

          <Link
            to="#"
            onClick={() => {
              scrollToSection("project");
            }}
          >
            <p>Work</p>
          </Link>

          <Link
            to="#"
            onClick={() => {
              scrollToSection("mainabout");
            }}
          >
            <p>About</p>
          </Link>

          <Link
            to="#"
            onClick={() => {
              scrollToSection("contact");
            }}
          >
            <p>Contact</p>
          </Link>

          <span>
            <RxHamburgerMenu onClick={navigation} />
          </span>
        </Info>
      </Flex>

      {toggle && <Sidebar/>}
    </>
  );
}
export default Header;

const Flex = styled.div`
  display: flex;
  background-color: black;
  color: white;
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
    color: white;

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
    color: white;
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
