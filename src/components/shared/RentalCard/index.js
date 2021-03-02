/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import image from '../../../assets/img/28-450x300.jpg';
import sprites from '../../../assets/img/sprites.svg';
import { DeviceSize } from '../../../responsive/index';

const RentalCard = () => {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	return (
		<div className='card-type-1'>
			<div className='card-type-1__container'>
				<div className='card-type-1__header'>
					<div className='card-type-1__media'>
						<div className='card-type-1__media-thumb'>
							<span className='card-type-1__badge'>FEATURED</span>
							<a className='card-type-1__hover-effect' href='#'>
								<img src={image} alt='Rental Place' />
							</a>
							<div className='card-type-1__media-price'>
								<sup>$</sup>
								<span>525</span>
								<sub>/night</sub>
							</div>
							<div className='card-type-1__media-user-image'>
								<img src='https://randomuser.me/api/portraits/women/85.jpg' alt='User avatar' />
							</div>
						</div>
					</div>
				</div>
				<div className='card-type-1__body'>
					<div className='card-type-1__title-head'>
						<h2>Modern Apartment With Pool</h2>
						<address>984 1st Avenue, New York, NY 10022</address>
					</div>
					<ul className='card-type-1__amenities'>
						<li className='card-type-1__amenities-item'>
							<svg className='card-type-1__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-bed`}></use>
							</svg>
							<span className='card-type-1__amenities-label'>3 {!isMobile && 'Bedrooms'}</span>
						</li>
						<li className='card-type-1__amenities-item'>
							<svg className='card-type-1__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-shower`}></use>
							</svg>
							<span className='card-type-1__amenities-label'>2 {!isMobile && 'Baths'}</span>
						</li>
						<li className='card-type-1__amenities-item'>
							<svg className='card-type-1__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-user`}></use>
							</svg>
							<span className='card-type-1__amenities-label'>6 {!isMobile && 'Guests'}</span>
						</li>
						<li className='card-type-1__amenities-item'>Apartment</li>
					</ul>
					<div className='card-type-1__footer'>
						<div className='card-type-1__footer-left'>
							<ul className='card-type-1__stars'>
								<li className='card-type-1__stars-item'>
									<svg className='card-type-1__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-1__stars-item'>
									<svg className='card-type-1__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-1__stars-item'>
									<svg className='card-type-1__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-1__stars-item'>
									<svg className='card-type-1__star'>
										<use xlinkHref={`${sprites}#icon-star-o`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-1__stars-item'>
									<svg className='card-type-1__star'>
										<use xlinkHref={`${sprites}#icon-star-o`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-1__stars-item'>
									<span>Average</span>
								</li>
							</ul>
						</div>
						<div className='card-type-1__footer-right'>
							<a href='#'>
								<svg className='card-type-1__footer-dots'>
									<use xlinkHref={`${sprites}#icon-ellipsis-v`}></use>{' '}
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RentalCard;
