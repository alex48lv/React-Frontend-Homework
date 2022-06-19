import React from "react";
import styled from "styled-components";
import { colors, margins } from "../../theme/theme";

const StyledField = styled.input`
    width: 100%;
    height: 2rem;
    border: 1px solid ${colors.lightBlue};
    margin-bottom: ${margins.md};
    background: ${colors.lightGrey};
    border: 1px solid ${colors.bg};
    border-radius: 5px;
    box-sizing: border-box;
`;

const InputField = ({ className, type, name }, ref) => <StyledField ref={ref} className={className} type={type} name={name} />;

const FieldInput = React.forwardRef(InputField);

export default FieldInput;