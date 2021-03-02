/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import image from '../../../assets/img/28-450x300.jpg';
import sprites from '../../../assets/img/sprites.svg';
import { DeviceSize } from '../../../responsive/index';

const ListingCard = () => {
	const isMedium = useMediaQuery({ maxWidth: DeviceSize.tablet });
	return (
		<div className='card-type-2'>
			<div className='card-type-2__container'>
				<div className='card-type-2__header'>
					<div className='card-type-2__media'>
						<div className='card-type-2__media-thumb'>
							<span className='card-type-2__badge'>FEATURED</span>
							<a className='card-type-2__hover-effect' href='#'>
								<img src={image} alt='Rental Place' />
							</a>
							<div className='card-type-2__media-price'>
								<sup>$</sup>
								<span>525</span>
								<sub>/night</sub>
							</div>
							<div className='card-type-2__media-user-image'>
								<img src='https://randomuser.me/api/portraits/women/85.jpg' alt='User avatar' />
								<div>
									<span>Hosted by</span>
									<span>Emily Gilbert</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='card-type-2__body'>
					<div className='card-type-2__title-head'>
						<h2>Modern Apartment With Pool</h2>
						<address>984 1st Avenue, New York, NY 10022</address>
					</div>
					<ul className='card-type-2__amenities'>
						<li className='card-type-2__amenities-item'>
							<svg className='card-type-2__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-bed`}></use>
							</svg>
							<span className='card-type-2__amenities-label'>3 {!isMedium && 'Bedrooms'}</span>
						</li>
						<li className='card-type-2__amenities-item'>
							<svg className='card-type-2__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-shower`}></use>
							</svg>
							<span className='card-type-2__amenities-label'>2 {!isMedium && 'Baths'}</span>
						</li>
						<li className='card-type-2__amenities-item'>
							<svg className='card-type-2__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-user`}></use>
							</svg>
							<span className='card-type-2__amenities-label'>6 {!isMedium && 'Guests'}</span>
						</li>
						<li className='card-type-2__amenities-item'>Apartment</li>
					</ul>
					<div className='card-type-2__footer'>
						<div className='card-type-2__footer-left'>
							<ul className='card-type-2__stars'>
								<li className='card-type-2__stars-item'>
									<svg className='card-type-2__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-2__stars-item'>
									<svg className='card-type-2__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-2__stars-item'>
									<svg className='card-type-2__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-2__stars-item'>
									<svg className='card-type-2__star'>
										<use xlinkHref={`${sprites}#icon-star-o`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-2__stars-item'>
									<svg className='card-type-2__star'>
										<use xlinkHref={`${sprites}#icon-star-o`}></use>{' '}
									</svg>
								</li>
								<li className='card-type-2__stars-item'>Average</li>
							</ul>
						</div>
						<div className='card-type-2__footer-right'>
							<a href='#'>
								<svg className='card-type-2__footer-dots'>
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

export default ListingCard;
