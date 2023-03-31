import React from 'react';
import './styles/ContactUs.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Full name is a required field!'),
  email: yup.string().required('Email is a required field!').email('Email is not valid!'),
  telephone: yup
    .string()
    .required('Telephone is a required field!')
    .matches(/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/, 'Phone number must match the form 233 00 000 0000'),
  message: yup.string().required('Please input your message!'),
});

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const formSubmit = (data) => {
    console.table(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <fieldset>
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="John Doe" name="name" {...register('name')} />
          <span className="error-message">{errors.name?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="text@email.com" name="email" {...register('email')} />
          <span className="error-message">{errors.email?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="telephone">Telephone</label>
          <input type="tel" placeholder="233 00 000 0000" name="telephone" {...register('telephone')} />
          <span className="error-message">{errors.telephone?.message}</span>
        </div>
        <div className="field message">
          <label htmlFor="message">Message</label>
          <input type="textfield" name="message" {...register('message')} />
          <span className="error-message">{errors.message?.message}</span>
        </div>
        <button className="reserve-btn" type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
