import React, { Component } from 'react';
import Slider from 'react-slick';
import RentalCard from '../../shared/RentalCard';

const PrevArrow = ({ onClick }) => (
	<button className='featured-slick-prev' onClick={onClick}>
		<div>PREV</div>
	</button>
);

const NextArrow = ({ onClick }) => (
	<button className='featured-slick-next' onClick={onClick}>
		<div>NEXT</div>
	</button>
);

class FeaturedList extends Component {
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
			appendArrows: '.featured-module-slider',
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
			<div className='featured'>
				<h2 className='featured__title'>Our Featured Homes</h2>
				<p className='featured__subtitle'>Hand-picked selection of quality places</p>
				<div className='featured__module-slider'>
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

export default FeaturedList;
