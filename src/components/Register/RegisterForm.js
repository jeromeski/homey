import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'react-bootstrap';
import { BsFormControl } from '../shared';


let RegisterForm = (props) => {
	const { handleSubmit, pristine, submitting, valid, errors } = props;

	return (
		<Form onSubmit={() => handleSubmit()} className='register__form'>
			<Field
				component={BsFormControl}
				placeholder='Username'
				type='text'
				name='username'
				className='register__input'
			/>

			<Field
				name='email'
				type='email'
				component={BsFormControl}
				placeholder='Email'
				className='register__input'
			/>

			<Field
				component={BsFormControl}
				placeholder='Password'
				type='password'
				name='password'
				className='register__input'
			/>

			<Field
				component={BsFormControl}
				placeholder='Confirm Password'
				type='password'
				name='password2'
				className='register__input'
			/>

			<Button variant='custom-3'>Register</Button>
		</Form>
	);
};

RegisterForm = reduxForm({
	// a unique name for the form
	form: 'register'
})(RegisterForm);

export default RegisterForm;
