import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const navigation = () => {
    // setToggle(false);
  };

  const scrollToSection = (idPassed) => {
    const Section = document.getElementById(idPassed);
    Section?.scrollIntoView({ behavior: "smooth" });

    dissapear("sideBar")
  };

  const dissapear = (myId) => {
    const diss = document.getElementById(myId)
    diss.style.display = "none";
  }
 
  return (
    <Container id='sideBar'>
      <Link
        to="#"
        onClick={() => {
          scrollToSection("home");
        }}
      >
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
          scrollToSection("about");
        }}
      >
        <p> About</p>
      </Link>

      <Link
        to="#"
        onClick={() => {
          scrollToSection("contact");
        }}
      >
        <p>Contact</p>
      </Link>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: black;
  height: 100vh;
  color: white;
  font-size: 25px;
  margin-top: 70px;
  padding-top: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  p {
    padding: 10px 0;
    text-align: center;

    color: white;
  }
`;
