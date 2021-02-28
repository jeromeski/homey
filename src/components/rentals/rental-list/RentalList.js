import React, { Component } from 'react';
import Slider from 'react-slick';
import RentalCard from './RentalCard';

const PrevArrow = ({ onClick }) => (
	<button className='rentals-slick-prev' onClick={onClick}>
		<div>PREV</div>
	</button>
);

const NextArrow = ({ onClick }) => (
	<button className='rentals-slick-next' onClick={onClick}>
		<div>NEXT</div>
	</button>
);

class RentalList extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: false,
			adaptiveHeight: true,
			lazyLoad: 'ondemand',
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			initialSlide: 0,
			arrows: true,
			appendArrows: '.rentals-module-slider',
			prevArrow: <PrevArrow />,
			nextArrow: <NextArrow />,
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
				<div className='rentals-module-slider'>
					<Slider {...settings}>
						<RentalCard />
						<RentalCard />
						<RentalCard />
						<RentalCard />
						<RentalCard />
						<RentalCard />
					</Slider>
				</div>
			</div>
		);
	}
}

export default RentalList;
