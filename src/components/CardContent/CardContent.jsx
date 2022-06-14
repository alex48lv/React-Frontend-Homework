import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices, fontSizes, margins, paddings } from "../../theme/theme";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: ${margins.sm} auto;
    width: 17rem;
    height: 20rem;
    background: white;

    ${devices.mobile} {
        
    }
`;

const CardBg = styled.div`
    align-self: stretch;
    height: 55%;
    background: url(${(props) => props && props.image}) center/cover no-repeat;
`;

const CardTitle = styled.h2`
    padding: 0 ${paddings.md};
    font-size: ${fontSizes.md};
    font-weight: 500;
`;

const CardText = styled.div`
    padding: 0 ${paddings.sm};
    font-size: ${fontSizes.xs};
    text-align: center;
    line-height: 1.2;
`;

const CardButton = styled(Link)`
    margin-bottom: ${margins.md};
    font-size: ${fontSizes.xs};
    text-decoration: none;
    text-transform: uppercase;
    color: black;
`;

const CardContent = ({ data }) => {
    const { bg, title, text } = data;
    return (
        <Card>
            <CardBg image={bg} />
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
            <CardButton to="/">Read more</CardButton>
        </Card>
    );
};

export default CardContent;