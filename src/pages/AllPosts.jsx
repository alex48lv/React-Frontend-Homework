import Cards from "../data/data";
import H1Header from "../components/text/H1Header";
import CardContainer from "../components/CardContainer/CardContainer";
import LearnMoreBtn from "../components/buttons/LearnMoreBtn";
import CardContent from "../components/CardContent/CardContent";
import styled from "styled-components";
import { devices } from "../theme/theme";

const AllCardContainer = styled(CardContainer)`
    ${devices.laptop} {
        flex-wrap: wrap;
    }
`;


const AllPosts = () => {

    return (
        <>
            <H1Header>All Posts</H1Header>
            <AllCardContainer>
                {Cards.map((card) => {
                    return <CardContent key={card.id} data={card} />;
                })}
            </AllCardContainer>
            <LearnMoreBtn>Learn more</LearnMoreBtn>
        </>
    )
};

export default AllPosts;