import styled from "styled-components";
import Card from "../UI/Card";
import ipProject from "../assets/ipProject.jpg";
import addToCart from "../assets/addToCart.png";
import countriesApi from "../assets/countriesApi.jpg";
import kudaClone from "../assets/kudaClone.png";
import nussWebsite from "../assets/nussWebsite.png";
import htmlImg from "../assets/html.png";
import facebook from "../assets/facebook.png";

function Projects() {
  return (
    <>
      <Container>
        <Wrapper>
          <Flex>
            <Text>
              <p>
                Here are some projects that demonstrate my skills in frontend
                development, from responsive design and interactive user
                experiences to efficient code and modern design techniques.
              </p>
            </Text>
          </Flex>

          <Card
            Images={kudaClone}
            Title="Replica of Kuda"
            description="I created a replica of the Kuda website, focusing on routing and styling with styled-components. This project helped me gain hands-on experience in building smooth navigation flows and maintaining consistent, responsive design through styled-component integration."
            Year="November, 2024."
            Role="Front-End Developer"
          />

          <Card
            Images={ipProject}
            Title="IP Address Tracker"
            description="Partnered with a colleague to build a responsive website that pinpoints your location using IP Geolocation. This site is accessible on all devices and provides accurate location information from anywhere globally, combining design and functionality to offer seamless user experience."
            Year="October, 2024."
            Role="Front-End Developer"
            link="https://folusoojo.github.io/ip-address-tracker/"
            gitLink="https://github.com/FolusoOjo/ip-address-tracker.git"
          />

          <Card
            Images={countriesApi}
            Title="COUNTRIES API"
            description="Fetched data from an API to display comprehensive information on countries and regions worldwide. The site dynamically shows each country’s population, currency, and capital, providing users with an interactive and informative view of global data."
            Year="September, 2024."
            Role="Front-End Developer"
            link="https://folusoojo.github.io/rest-countries-api/"
            gitLink="https://github.com/FolusoOjo/rest-countries-api.git"
          />

          <Card
            Images={addToCart}
            Title="Add To Cart Functionality"
            description="I developed a replica of an eCommerce website that enables customers to browse products, add multiple items to their cart, and proceed to checkout. This project focuses on enhancing the shopping experience with user-friendly navigation, smooth cart functionality, and responsive design across devices, making it easy for users to shop seamlessly."
            Year="October, 2024."
            Role="Front-End Developer"
            link="https://folusoojo.github.io/add-to-cart/"
            gitLink="https://github.com/FolusoOjo/add-to-cart.git"
          />

          <Card
            Images={nussWebsite}
            Title="Nuss Luxury Resort"
            description="I developed a multi-page website for a luxury resort using only HTML and CSS, providing visitors with an elegant experience to explore the resort's offerings and amenities. The website features easy navigation across different pages, offering information about the resort while enabling users to make bookings directly for their stay."
            Year="2022"
            Role="Front-End Developer"
            link="https://folusoojo.github.io/nussWebsite/"
            gitLink="https://github.com/FolusoOjo/nussWebsite.git"
          />

          <Card
            Images={facebook}
            Title="Facebook Clone"
            description="Using my foundational knowledge of HTML and CSS, I created a replica of the Facebook webpage. This project was one of my first, helping me build a strong base in structuring layouts and styling as I explored the fundamentals of frontend development."
            Year="2022"
            Role="Front-End Developer"
            link="https://folusoojo.github.io/FacebookClone/"
            gitLink="https://github.com/FolusoOjo/FacebookClone.git"
          />

          <Card
            Images={htmlImg}
            Title="HTML"
            description="This project marks my initial venture into HTML. Through creating this page, I developed a foundational understanding of HTML structure, tags, and basic styling, setting the groundwork for more advanced web development skills."
            Year="2022"
            Role="Front-End Developer"
            link="https://folusoojo.github.io/stutern-html/"
            gitLink="https://github.com/FolusoOjo/stutern-html.git"
          />
        </Wrapper>
      </Container>
    </>
  );
}
export default Projects;
const Container = styled.div`
  /* background-color: darkmagenta; */
  min-height: calc(100vh - 70px);
  max-width: 1280px;
  margin: auto;
`;
const Wrapper = styled.div`
  /* background-color: coral; */
  margin: 0 auto;
  margin-top: 70px;
  width: 85%;

  /* margin: auto; */
  /* display: flex; */
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.div`
  /* border: 2px dotted darkblue; */
  width: 60%;
  display: flex;
  align-items: center;

  p {
    width: 80%;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
  }

  @media (max-width: 800px) {
    min-width: 100%;
    border: 2px solid rebeccapurple;
    /* background-color: red; */
    p {
      min-width: 100%;
      padding: 10px;
      border: 2px solid red;
      font-size: 15px;
      font-weight: 400;
    }
  }
`;
