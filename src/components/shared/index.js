import React from 'react';
import { Form } from 'react-bootstrap';

export const BsFormControl = ({ input, type, meta: { touched, error, warning }, ...props }) => {
	return <Form.Control {...props} type={type} {...input} />;
};

export const BsCheckbox = ({ input, type, meta: { touched, error, warning }, ...props }) => {
	return <input {...props} type={type} {...input} />;
};

export const BsSelect = ({ input, type, meta }) => (
	<Form.Control as='select' custom>
		<option>1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
	</Form.Control>
);