import React from 'react';
import { Link } from 'react-router-dom';
import { Form, DropdownButton, Dropdown, Breadcrumb } from 'react-bootstrap';
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export const BsFormControl = ({ input, type, meta: { touched, error, warning }, ...props }) => {
	return <Form.Control {...props} type={type} {...input} />;
};

export const BsCheckbox = ({ input, type, meta: { touched, error, warning }, ...props }) => {
	return <input {...props} type={type} {...input} />;
};

export const BsSelect = ({ input, type, meta }) => (
	<Form.Control as='select' custom>
		<option>Default Order</option>
		<option>Price (Low to High)</option>
		<option>Price (High to Low)</option>
		<option>Rating</option>
		<option>Featured First</option>
		<option>Date Old to New</option>
		<option>Date New to Old</option>
	</Form.Control>
);

export const BsDropdown = () => (
	<DropdownButton
		variant={'custom__dropdown'}
		menuAlign='right'
		title='Default Order'
		id='dropdown-menu-align-right'>
		<Dropdown.Item as='li' eventKey='1'>
			Default Order
		</Dropdown.Item>
		<Dropdown.Item as='li' eventKey='2'>
			Price (Low to High)
		</Dropdown.Item>
		<Dropdown.Item as='li' eventKey='3'>
			Price (High to Low)
		</Dropdown.Item>
		<Dropdown.Item as='li' eventKey='4'>
			Rating
		</Dropdown.Item>
		<Dropdown.Item as='li' eventKey='4'>
			Featured First
		</Dropdown.Item>
		<Dropdown.Item as='li' eventKey='4'>
			Date Old to New
		</Dropdown.Item>
		<Dropdown.Item as='li' eventKey='4'>
			Date New to Old
		</Dropdown.Item>
	</DropdownButton>
);

export const BsBreadcrumb = () => {
	return (
		<Breadcrumb className='listing__breadcrumb'>
			<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/home' }}>
				Home
			</Breadcrumb.Item>
			<Breadcrumb.Item active>Listing</Breadcrumb.Item>
		</Breadcrumb>
	);
};


