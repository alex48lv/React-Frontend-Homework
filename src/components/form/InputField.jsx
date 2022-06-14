import styled from "styled-components";
import { colors, margins } from "../../theme/theme";

const StyledField = styled.input`
    width: 100%;
    height: 2rem;
    border: 1px solid ${colors.lightBlue};
    margin-bottom: ${margins.md};
    background: lightgrey;
    border: 1px solid #2f3236;
    border-radius: 5px;
    box-sizing: border-box;
`;

const InputField = ({ type, name, placeholder }) => <StyledField type={type} name={name} placeholder={placeholder} />;

export default InputField;