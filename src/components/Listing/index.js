import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form } from 'redux-form';
import { BsSelect } from '../shared';
import ListingCard from '../shared/ListingCard';

const Listing = () => {
	return (
		<div className='listing'>
			<Breadcrumb>
				<Breadcrumb.Item>
					<Link to='/'>Home</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item active>Listing</Breadcrumb.Item>
			</Breadcrumb>
			<h1 className='listing__title'>Listing</h1>
			<hr />
			<div className='listing__sort-container'>
				<div className='listing__sort-left'>
					<h3 className='listing__count'>39 found</h3>
				</div>
				<div className='listing__sort-right'>
					<strong>Sort by</strong>
					<BsSelect />
				</div>
			</div>
			<div className='listing__body'>
				<ListingCard />
			</div>
		</div>
	);
};

export default Listing;
