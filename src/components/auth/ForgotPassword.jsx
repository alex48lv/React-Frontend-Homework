import FormTitle from "../form/FormTitle";
import FieldInput from "../form/InputField";
import SubmitButton from "../buttons/SubmitButton";
import styled from "styled-components";
import { colors, margins, paddings } from "../../theme/theme";
import InputLabel from "../form/InputLabel";
import { useForm } from "react-hook-form";
import React from "react";

const AuthInputField = styled(FieldInput)`
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
`;

const ForgotPassword = ({ formChangeHandler }) => {
    const defaultValues = { email: ForgotPassword.email };
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Reset Password</FormTitle>
            <InputLabel for="email">Email</InputLabel>
            <AuthInputField type="email" name="email" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
            <SubmitButton>Submit</SubmitButton>
            <FormFooter>
                <FormSwitchText onClick={() => formChangeHandler("register")}>
                    Don't have an account? Join now
                </FormSwitchText>
            </FormFooter>
        </form>
    );
};

export default ForgotPassword;