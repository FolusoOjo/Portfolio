import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import styled from "styled-components";

function Contactlink({ linked, linkgit, linktweet, linkig }) {
  return (
    <>
      <Icons>
        <a href={linked} target="_blank">
          <FaLinkedinIn />
        </a>
        <a href={linkgit} target="_blank">
          <FaGithub />
        </a>
        <a href={linktweet} target="_blank">
          <FaXTwitter />
        </a>
        <a href={linkig} target="_blank">
          <BsInstagram />
        </a>
      </Icons>
    </>
  );
}
export default Contactlink;

const Icons = styled.div`
  /* border: 2px solid darkolivegreen; */
  padding-top: 10px;
  width: 2px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
`;
