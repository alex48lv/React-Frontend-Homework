import CardContainer from "../components/CardContainer/CardContainer";
import CardContent from "../components/CardContent/CardContent";
import Cards from "../data/data";
import LearnMoreBtn from "../components/buttons/LearnMoreBtn";
import H1Header from "../components/text/H1Header";

const getCardContent = () => {
    return Cards.slice(0, 3);
};

const Home = () => {
    const postData = getCardContent();

    return (
        <>
            <H1Header>Blog Posts</H1Header>
            <CardContainer>
                {postData.map((card) => {
                    return <CardContent key={card.id} data={card} />;
                })}
            </CardContainer>
            <LearnMoreBtn>Learn more</LearnMoreBtn>
        </>
    )
};

export default Home;