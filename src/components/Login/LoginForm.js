/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'react-bootstrap';
import { BsFormControl, BsCheckbox } from '../shared';

let LoginForm = (props) => {
	const { handleSubmit, pristine, submitting, valid, errors } = props;

	return (
		<Form onSubmit={() => handleSubmit()} className='login__form'>
			<div>
				<Field
					component={BsFormControl}
					placeholder='Username or Email'
					type='text'
					name='username'
					className='login__input'
				/>

				<Field
					component={BsFormControl}
					placeholder='Password'
					type='password'
					name='password'
					className='login__input'
				/>
			</div>

			<div className='login__checkbox-container'>
				<div className='login__checkbox-inner'>
					<Field
						component={BsCheckbox}
						type='checkbox'
						name='checkbox'
						className='login__checkbox'
					/>
					<label>Remember Me</label>
				</div>
				<div className='login__forgot-inner'>
					<a className='login__forgot-link' href='#'>
						Forgot Password?
					</a>
				</div>
			</div>

			<Button variant='custom-3'>Login</Button>
		</Form>
	);
};

LoginForm = reduxForm({
	// a unique name for the form
	form: 'login'
})(LoginForm);

export default LoginForm;
