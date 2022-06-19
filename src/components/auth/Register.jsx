import styled from "styled-components";
import { colors, fontSizes, margins, paddings } from "../../theme/theme";
import FormTitle from "../form/FormTitle";
import InputField from "../form/InputField";
import SubmitButton from "../buttons/SubmitButton";
import { useForm } from "react-hook-form";
import InputLabel from "../form/InputLabel";
import React from "react";

const AuthInputField = styled(InputField)`
    margin-bottom: ${margins.xs};
`;

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
    font-size: ${fontSizes.xs};
`;

const ForgotPasswordText = styled(FormSwitchText)`
    margin-top: -${margins.sm};
`;

const Register = ({ formChangeHandler }) => {
    const { register, handleSubmit, setValue, getValues } = useForm();
    const onSubmit = data => console.log(data);
    /*
    React.useEffect(() => {
        register("firstName", { required: true, maxLength: 20 });
        register("lastName", { maxLength: 20 });
        register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i });
        register("password", { required: true, minLength: 5, maxLength: 20 });
        register("confirmPassword", { required: true, validate: (value) => value === getValues("password") });
    }, []);*/

    return/* (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Registration</FormTitle>
            <InputLabel for="firstName">Name</InputLabel>
            <AuthInputField type="text" name="firstName" onChange={e => setValue("firstName", e.target.value)} />
            <InputLabel for="lastName">Lastname</InputLabel>
            <AuthInputField type="text" name="lastName" onChange={e => setValue("lastName", e.target.value)} />
            <InputLabel for="email">Email</InputLabel>
            <AuthInputField type="text" name="email" onChange={e => setValue("email", e.target.value)} />
            <InputLabel for="password">Password</InputLabel>
            <AuthInputField type="password" name="password" onChange={e => setValue("password", e.target.value)} />
            <InputLabel for="confirmPassword">Confirm your password</InputLabel>
            <AuthInputField type="password" name="confirmPassword" onChange={e => setValue("confirmPassword", e.target.value)} />
            <SubmitButton>Sign up</SubmitButton>
            <FormFooter>
                <FormSwitchText onClick={() => formChangeHandler("login")}>
                    Already have an account? Sign in
                </FormSwitchText>
            </FormFooter>
        </form>
    );*/
}; 


export default Register;