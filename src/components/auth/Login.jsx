
import styled from "styled-components";
import { colors, margins, paddings } from "../../theme/theme";
import FormTitle from "../form/FormTitle";
import InputField from "../form/InputField";
import SubmitButton from "../buttons/SubmitButton";
import InputLabel from "../form/InputLabel";
import { useForm } from "react-hook-form";
import React from "react";

const FormFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: ${paddings.sm} 0 ${paddings.sm};
`;

const FormSwitchText = styled.div`
    color: ${colors.darkBlue};
`;

const ForgotPasswordText = styled(FormSwitchText)`
    margin-top: -${margins.sm};
`;

const Login = ({ formChangeHandler }) => {
    const { register, handleSubmit, setValue } = useForm();

    return (
        <form onSubmit={handleSubmit()}>
            <FormTitle>Log in</FormTitle>
            <InputLabel for="email">Email</InputLabel>
            <InputField type="text" name="email" onChange={e => setValue("email", e.target.value)} />
            <InputLabel for="password">Password</InputLabel>
            <InputField type="password" name="password" onChange={e => setValue("password", e.target.value)} />
            <ForgotPasswordText onClick={() => formChangeHandler("forgot")}>
                Forgot password?
            </ForgotPasswordText>
            <SubmitButton>Sign up</SubmitButton>
            <FormFooter>
                <FormSwitchText onClick={() => formChangeHandler("register")}>
                    Don't have an account? Join now
                </FormSwitchText>
            </FormFooter>
        </form>
    );
};

export default Login;