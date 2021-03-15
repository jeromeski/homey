import React from 'react';
import ListingCard from '../shared/ListingCard';
import { BsDropdown, BsBreadcrumb } from '../shared';

const Listing = (props) => {
	return (
		<div className='listing'>
			<BsBreadcrumb/>
			<h1 className='listing__title'>Listing</h1>
			<hr />
			<div className='listing__sort-container'>
				<div className='listing__sort-left'>
					<h3 className='listing__count'>39 Rentals</h3>
				</div>
				<div className='listing__sort-right'>
					<p>Sort by:</p>
          <BsDropdown />
				</div>
			</div>
			<div className='listing__body'>
				<ListingCard />
			</div>
		</div>
	);
};

export default Listing;
