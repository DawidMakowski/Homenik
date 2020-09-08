import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { OutcomeContext } from '../../context/OutcomeContext';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { ErrorMessage, StyledForm, InputWrapper } from './OutcomeCreatorStyles';

const OutcomeCreator = () => {
  const { addOutcome } = useContext(OutcomeContext);
  const { register, handleSubmit, errors } = useForm();

  const [title, setTitle] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmitCallback = (data) => {
    const payload = {
      ...data,
      id: uuidv4(),
      date: new Date(),
    };
    addOutcome(payload);
    setTitle('');
    setCost('');
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitCallback)}>
      <Heading>Dodaj swój wydatek</Heading>
      <InputWrapper>
        <Input
          placeholder="Wydatek"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={register({ required: true, maxLength: 15 })}
        />
        <Input
          placeholder="Cena"
          type="text"
          name="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          ref={register({ required: true, pattern: /^\d+$/ })}
        />
      </InputWrapper>

      {errors.title && <ErrorMessage>Niepoprawna nazwa wydatku</ErrorMessage>}
      {errors.cost && <ErrorMessage>Niepoprawna wartość kosztu</ErrorMessage>}
      <Button type="submit">Dodaj</Button>
    </StyledForm>
  );
};

export default OutcomeCreator;
