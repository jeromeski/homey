/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import image from '../../../assets/img/28-450x300.jpg';
import sprites from '../../../assets/img/sprites.svg';
import { DeviceSize } from '../../../responsive/index';

const RentalCard = () => {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	return (
		<div className='mycard'>
			<div className='mycard__container'>
				<div className='mycard__header'>
					<div className='mycard__media'>
						<div className='mycard__media-thumb'>
							<span className='mycard__badge'>FEATURED</span>
							<a className='mycard__hover-effect' href='#'>
								<img src={image} alt='Rental Place' />
							</a>
							<div className='mycard__media-price'>
								<sup>$</sup>
								<span>525</span>
								<sub>/night</sub>
							</div>
							<div className='mycard__media-user-image'>
								<img src='https://randomuser.me/api/portraits/women/85.jpg' alt='User avatar' />
							</div>
						</div>
					</div>
				</div>
				<div className='mycard__body'>
					<div className='mycard__title-head'>
						<h2>Modern Apartment With Pool</h2>
						<address>984 1st Avenue, New York, NY 10022</address>
					</div>
					<ul className='mycard__amenities'>
						<li className='mycard__amenities-item'>
							<svg className='mycard__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-bed`}></use>
							</svg>
							<span className='mycard__amenities-label'>3 {!isMobile && 'Bedrooms'}</span>
						</li>
						<li className='mycard__amenities-item'>
							<svg className='mycard__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-shower`}></use>
							</svg>
							<span className='mycard__amenities-label'>2 {!isMobile && 'Baths'}</span>
						</li>
						<li className='mycard__amenities-item'>
							<svg className='mycard__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-user`}></use>
							</svg>
							<span className='mycard__amenities-label'>6 {!isMobile && 'Guests'}</span>
						</li>
						<li className='mycard__amenities-item'>Apartment</li>
					</ul>
					<div className='mycard__footer'>
						<div className='mycard__footer-left'>
							<ul className='mycard__stars'>
								<li className='mycard__stars-item'>
									<svg className='mycard__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='mycard__stars-item'>
									<svg className='mycard__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='mycard__stars-item'>
									<svg className='mycard__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='mycard__stars-item'>
									<svg className='mycard__star'>
										<use xlinkHref={`${sprites}#icon-star-o`}></use>{' '}
									</svg>
								</li>
								<li className='mycard__stars-item'>
									<svg className='mycard__star'>
										<use xlinkHref={`${sprites}#icon-star-o`}></use>{' '}
									</svg>
								</li>
								<li className='mycard__stars-item'>Average</li>
							</ul>
						</div>
						<div className='mycard__footer-right'>
							<a href='#'>
								<svg className='mycard__footer-dots'>
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
