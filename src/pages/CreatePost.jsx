import * as React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import SubmitButton from '../components/buttons/SubmitButton';
import FormTitle from '../components/form/FormTitle';
import InputField from '../components/form/InputField';
import InputLabel from '../components/form/InputLabel';
import { colors, margins, paddings } from '../theme/theme';

const FormCreate = styled.form`
    width: 300px;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 8rem auto;
    padding: ${paddings.md};
    background: ${colors.white};
    border-radius: 5px;
`;

const TextField = styled.textarea`
    width: 100%;
    border: 1px solid ${colors.lightBlue};
    margin-bottom: ${margins.xs};
    background: ${colors.lightGrey};
    border: 1px solid ${colors.bg};
    border-radius: 5px;
    box-sizing: border-box;
`;

export default function CreatePost() {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = data => console.log(data);
  
    React.useEffect(() => {
      register("title", { required: true });
      register("text");
    }, []);

    return (
        <FormCreate onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Create a post</FormTitle>
            <InputLabel for="title">Title</InputLabel>
            <InputField type="text" name="title" onChange={e => setValue("title", e.target.value)} />
            <InputLabel for="text">Enter your text here</InputLabel>
            <TextField id="text" rows="5" name="text" onChange={e => setValue("text", e.target.value)} />
            <SubmitButton>Send</SubmitButton>
        </FormCreate>
    );
}