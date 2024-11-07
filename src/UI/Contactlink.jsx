import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import styled from "styled-components";

function Contactlink({ linked, linkgit, linktweet, linkmail }) {
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
        <a href={linkmail} target="_blank">
          <IoMdMail />
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
