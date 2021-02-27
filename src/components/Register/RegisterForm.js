import React from 'react';
import { Button, Form, FormCheck, FormControl, FormText } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

let RegisterForm = (props) => {
	const { handleSubmit } = props;

	const ReduxFormControl = ({ input, meta, ...props }) => {
		return <FormControl {...props} {...input} />;
	};
	const ReduxFormCheckbox = ({ input, meta, ...props }) => {
		return <FormCheck {...props} {...input} />;
	};

	return (
		<Form>
			<Field component={ReduxFormControl} placeholder='Username or Email' type='text' />;
			<Field component={ReduxFormControl} placeholder='Password' type='password' />;
			<Field component={ReduxFormCheckbox} type='checkbox' label='Remember me' />
			<Button variant='primary'>Login</Button>
		</Form>
	);
};

RegisterForm = reduxForm({
	// a unique name for the form
	form: 'register'
})(RegisterForm);

export default RegisterForm;
