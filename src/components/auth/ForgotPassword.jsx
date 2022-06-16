
import { object, string } from "yup";
import FormTitle from "../form/FormTitle";
import InputField from "../form/InputField";
import SubmitButton from "../buttons/SubmitButton";
import styled from "styled-components";
import { colors, margins, paddings } from "../../theme/theme";
import InputLabel from "../form/InputLabel";
import { useForm } from "react-hook-form";

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
`;

const ForgotPassword = ({ formChangeHandler }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: ''
        }
    });

    return (
        <form onSubmit={handleSubmit(console.log)}>
            <FormTitle>Reset Password</FormTitle>
            <InputLabel for="email">Email</InputLabel>
            <AuthInputField type="text" name="email" {...register("email", { required: true })} />
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