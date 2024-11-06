import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

function Contact() {
  return (
    <Container>
      <Wrapper>


        <Text>
          <h3>LET&apos;S CONNECT</h3>

          <div>
            <p>Say hello at folusoojo96@gmail.com</p>
            <p>
              For more info, here&apos;s my <span>resume</span>
            </p>
          </div>

          <Icons>
            <FaLinkedinIn />
            <FaGithub />
            <FaXTwitter />
            <BsInstagram />
          </Icons>
        </Text>


        <Form>
          <form action="">
            <label htmlFor="name">Name:</label>
            <input type="text" />
          </form>

          <form action="">
            <label htmlFor="email">Email:</label>
            <input type="email" />
          </form>

          <form action="">
            <label htmlFor="subject">Subject:</label>
            <input type="text" />
          </form>

          <form action="">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message"></textarea>
          </form>
        </Form>

        
      </Wrapper>
    </Container>
  );
}
export default Contact;

const Container = styled.div`
  background-color: yellow;
  min-height: calc(100vh - 70px);
  max-width: 1300px;
  margin: auto;
`;
const Wrapper = styled.div`
  background-color: red;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  width: 85%;
  padding-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Text = styled.div`
  border: 2px solid darkblue;
  width: 50%;
  text-align: center;

  h3 {
    font-size: 35px;
    padding: 15px 0;
  }
  div {
    /* border: 1px solid green; */
    text-align: start;
    width: 50%;
    margin: 0 auto;

    p {
      padding: 5px 0;
    }
  }
`;

const Icons = styled.div`
  border: 2px solid darkolivegreen;
  width: 2px;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
`;
const Form = styled.div`
  border: 2px solid yellow;
  width: 40%;

  label {
    display: block;
    font-size: 15px;
    padding: 5px 0;
  }
  input {
    width: 58%;
    height: 30px;
    outline: transparent;
    /* border: transparent; */
    border: 1px solid black;
  }
  textarea {
    resize: none;
    height: 70px;
    width: 255px;
    border: 1px solid black;
  }
`;
