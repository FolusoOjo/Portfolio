import styled from "styled-components";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
// import { TbBackground } from "react-icons/tb";

function Card({ Images, Title, description, year, Year, Role, link, gitLink }) {
  return (
    <>
      <Main>
        <Imagediv>
          <div>
            <img src={Images} alt="" />
          </div>
        </Imagediv>

        <Text>
          <div>
            <Titled>
              <h4>{Title}</h4>
              <p>{description}</p>
            </Titled>

            <ProjectText>
              <h5>Project Info</h5>

              <hr />

              <div>
                <span>Year</span>
                <span>{Year}</span>
              </div>

              <hr />

              <div>
                <span>Role</span>
                <span>{Role}</span>
              </div>

              <hr />

              <Flexed>
                <div>
                  <a href={link}>Live Demo</a>
                  <MdArrowOutward />
                </div>
                <div>
                  <a href={gitLink}>See on Github</a>
                  <FaGithub />
                </div>
              </Flexed>
            </ProjectText>
          </div>
        </Text>
      </Main>
    </>
  );
}
export default Card;
const Main = styled.div`
  /* background-color: red; */
  margin: 50px auto;
  margin-top: 20px;
  /* width: 85%; */
  /* margin: auto; */
  /* padding: 0 50px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    /* border: 3px solid green; */
    width: 50%;
    /* background-color: aliceblue; */
  }
`;
const Text = styled.div`
  border: 2px solid green;
  margin: 5px 0;
  padding-left: 5px;

  div {
    width: 90%;
    color: white;

    h4 {
      font-size: 20px;
      padding: 5px 0;
    }
    p {
      font-size: 15px;
      padding: 5px 0;
      width: 103%;
      line-height: 1.3;
    }
  }
`;

const ProjectText = styled.div`
  /* background-color: green; */
  padding: 10px 0;
  padding-left: 5px;

  h5 {
    color: white;
    font-size: 17px;
    padding-bottom: 5px;
    /* border-bottom: 1px solid black; */
  }

  div {
    color: white;
    padding: 5px 0;
    /* border-bottom: 1px solid black; */
    display: flex;
    justify-content: space-between;
  }

  hr {
    background-color: white;
    width: 98%;
    margin: 5px auto;
    outline: transparent;
    border-color: transparent;
  }
`;
const Titled = styled.div`
  /* background-color: skyblue; */
`;
const Imagediv = styled.div`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 30px; */
  width: 50%;
  div {
    background-color: brown;
    width: 80%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 290px;
      border-radius: 10px;
      text-align: center;
    }
  }
`;
const Flexed = styled.div`
  display: flex;
  align-items: flex-start;
  color: white;
  margin-top: 5px;
  cursor: pointer;
  font-size: 17px;

  div {
    /* background-color: yellow; */
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
      margin-right: 5px;
      text-decoration: none;
    }
  }
`;
