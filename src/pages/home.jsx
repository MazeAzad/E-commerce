import styled from "styled-components";
import Hero from "../components/hero";
import FeaturedProducts from "../components/featuredProducts";
import Services from "../components/services";
import Contact from "../components/contact";
const HomeWrapper = styled.section`
     padding:0;
     margin:0;
`;
const Home = () => {
    return (
        <HomeWrapper>
            <Hero />
            <FeaturedProducts />
            <Services />
            <Contact />
        </HomeWrapper>
    )
}
export default Home;