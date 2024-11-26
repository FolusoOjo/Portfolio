import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// {linkResume, linked, linkGit}

function Buttons({ linkResume, linked, linkGit }) {
  return (
    <>
      <Button>
        <Download>
          <a href={linkResume}>DOWNLOAD RESUME</a>
        </Download>
        <Image>
          <a href={linked}>
            <FaLinkedin />
          </a>
        </Image>
        <Image>
          <a href={linkGit}>
            <FaGithub />
          </a>
        </Image>
      </Button>
    </>
  );
}
export default Buttons;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  /* button {
    border: 2px solid red;
    text-align: center;
    padding: 10px;
    border-radius: 25px;
  } */
`;
const Download = styled.button`
  border-radius: 20px;
  outline: none;
  border-color: transparent;
  padding: 10px;
  b a {
    color: black;
    text-decoration: none;
  }
`;
const Image = styled.button`
  border: 2px solid transparent;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  /* background-color: #724e91; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  outline: none;
  /* border-color: none; */
  background-color: transparent;
  margin: 0 5px;
  font-size: 13px;
`;
