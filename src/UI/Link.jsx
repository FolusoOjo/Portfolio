

function Link({ link, gitLink }) {
  return (
    <>
      <Flex>
        <div>
          <a href={link}>Live Demo</a>
          <MdArrowOutward />
        </div>
        <div>
          <a href={gitLink}>See on Github</a>
          <FaGithub />
        </div>
      </Flex>
    </>
  );
}

export default Link;

const Flex = styled.div`
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
