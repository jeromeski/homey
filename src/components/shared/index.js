import React from 'react';
import { Form } from 'react-bootstrap';

export const BsFormControl = ({ input, type, meta: { touched, error, warning }, ...props }) => {
	return <Form.Control {...props} type={type} {...input} />;
};

export const BsCheckbox = ({ input, type, meta: { touched, error, warning }, ...props }) => {
	return <Form.Check {...props} type={type} {...input} />;
};
