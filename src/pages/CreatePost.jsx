import React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import SubmitButton from '../components/buttons/SubmitButton';
import FormTitle from '../components/form/FormTitle';
import InputField from '../components/form/InputField';
import InputLabel from '../components/form/InputLabel';
import { colors, devices, margins, paddings } from '../theme/theme';

const FormCreate = styled.div`
    width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 8rem auto;
    padding: ${paddings.md};
    background: white;
    border-radius: 3%;
`;

const TextField = styled.textarea`
    width: 100%;
    border: 1px solid ${colors.lightBlue};
    margin-bottom: ${margins.md};
    background: lightgrey;
    border: 1px solid #2f3236;
    border-radius: 5px;
    box-sizing: border-box;
`;

const CreatePost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <FormCreate onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Create a post</FormTitle>
            <InputLabel for="title">Title</InputLabel>
            <InputField type="text" name="title" {...register("Text", { required: true, max: 60, min: 1 })} />
            <InputLabel for="text">Enter your text here</InputLabel>
            <TextField rows="5" name="text" {...register("Text", { required: true, max: 255, min: 1 })} />
            <SubmitButton>Send</SubmitButton>
        </FormCreate>
    );
}

export default CreatePost;