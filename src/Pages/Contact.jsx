import styled from "styled-components";
import Contactlink from "../UI/Contactlink";

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

          <Contactlink
            linked="https://www.linkedin.com/in/folusoojo"
            linkgit="https://github.com/FolusoOjo"
            linkig="https://www.instagram.com/torhbah/"
            linktweet="https://x.com/torhbah"
          />
        </Text>

        <Form>
          <form action="">
            <p>
              <label htmlFor="name">Name:</label>
              <input type="text" />
            </p>
          </form>

          <form action="">
            <p>
              <label htmlFor="email">Email:</label>
              <input type="email" />
            </p>
          </form>

          <form action="">
            <p>
              <label htmlFor="subject">Subject:</label>
              <input type="text" />
            </p>
          </form>

          <form action="">
            <p>
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message"></textarea>
            </p>
          </form>

          <button>SUBMIT</button>
        </Form>
      </Wrapper>
    </Container>
  );
}
export default Contact;

const Container = styled.div`
  /* background-color: yellow; */
  min-height: calc(100vh - 70px);
  max-width: 1300px;
  margin: auto;
`;

const Wrapper = styled.div`
  /* background-color: red; */
  margin: 0 auto;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  width: 85%;
  padding-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 800px) {
    border: 2px solid cornflowerblue;
    display: block;
    margin: 0 auto;
  }
`;

const Text = styled.div`
  /* border: 2px solid darkblue; */
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

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Form = styled.div`
  /* border: 2px solid yellow; */
  width: 40%;

  label {
    display: block;
    font-size: 15px;
    padding: 5px 0;
  }
  input {
    width: 80%;
    height: 30px;
    outline: transparent;
    /* border: transparent; */
    border: 1px solid black;
  }
  textarea {
    resize: none;
    height: 150px;
    width: 80%;
    border: 1px solid black;
  }
  button {
    margin-top: 20px;
    width: 90px;
    height: 45px;
    outline: transparent;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: darkblue;
  }

  @media (max-width: 800px) {
    width: 100%;
    p {
      text-align: center;
    }
    button {
      text-align: center;
      /* width: 100%; */
    }
  }
`;
