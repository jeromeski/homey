import React from 'react';
import { Field, reduxForm } from 'redux-form';

let LoginForm = (props) => {
	const { handleSubmit } = props;
	return <div></div>;
};

LoginForm = reduxForm({
	// a unique name for the form
	form: 'login'
})(LoginForm);

export default LoginForm;
