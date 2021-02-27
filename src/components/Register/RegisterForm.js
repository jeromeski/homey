import React from 'react';
import { Button, Form, FormCheck } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

const BsFormControl = ({ input, type, meta: { touched, error, warning }, ...props }) => {
	return <Form.Control {...props} type={type} {...input} />;
};

const BsCheckbox = ({ input, type, meta: { touched, error, warning }, ...props }) => {
	return <Form.Check {...props} type={type} {...input} />;
};

let RegisterForm = (props) => {
	const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props;

	

	return (
		<Form onSubmit={() => handleSubmit()}>
			<Field
				component={BsFormControl}
				placeholder='Username'
				type='text'
				name='username'
				autoComplete='off'
			/>

			<Field name='email' type='email' component={BsFormControl} placeholder='Email' />

			<Field component={BsFormControl} placeholder='Password' type='password' name='password' />

			<Field
				component={BsFormControl}
				placeholder='Confirm Password'
				type='password'
				name='password2'
			/>

			<Field
				component={BsCheckbox}
        name='checkbox'
				label='Remember Me'
				type='checkbox'
			/>
			<Button variant='primary'>Register</Button>
		</Form>
	);
};

RegisterForm = reduxForm({
	// a unique name for the form
	form: 'register'
})(RegisterForm);

export default RegisterForm;
