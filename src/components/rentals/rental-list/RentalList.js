import React, { Component } from 'react';
import Slider from 'react-slick';
import RentalCard from './RentalCard';

class RentalList extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			initialSlide: 0,
			arrows: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<div className='rentals'>
				<h2 className='rentals__title'>Our Featured Homes</h2>
				<p className='rentals__subtitle'>Hand-picked selection of quality places</p>
				<Slider {...settings}>
					<RentalCard />
					<RentalCard />
					<RentalCard />
					<RentalCard />
					<RentalCard />
					<RentalCard />
				</Slider>
			</div>
		);
	}
}

export default RentalList;
