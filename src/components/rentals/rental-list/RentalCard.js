/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import image from '../../../assets/img/28-450x300.jpg';
import sprites from '../../../assets/img/sprites.svg';
import { DeviceSize } from '../../../responsive/index';

const RentalCard = () => {

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	return (
		<div className='card'>
			<div className='card__container'>
				<div className='card__header'>
					<div className='card__media'>
						<div className='card__media-thumb'>
							<span className='card__badge'>FEATURED</span>
							<a className='card__hover-effect' href='#'>
								<img src={image} alt='Rental Place' />
							</a>
							<div className='card__media-price'>
								<sup>$</sup>
								<span>525</span>
								<sub>/night</sub>
							</div>
							<div className='card__media-user-image'>
								<img src='https://randomuser.me/api/portraits/women/85.jpg' alt='User avatar' />
							</div>
						</div>
					</div>
				</div>
				<div className='card__body'>
					<div className='card__title-head'>
						<h2>Modern Apartment With Pool</h2>
						<address>984 1st Avenue, New York, NY 10022</address>
					</div>
					<ul className='card__amenities'>
						<li className='card__amenities-item'>
							<svg className='card__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-bed`}></use>
							</svg>
							<span className='card__amenities-label'>3 {!isMobile && 'Bedrooms'}</span>
						</li>
						<li className='card__amenities-item'>
							<svg className='card__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-shower`}></use>
							</svg>
							<span className='card__amenities-label'>2 {!isMobile && 'Baths'}</span>
						</li>
						<li className='card__amenities-item'>
							<svg className='card__amenities-icon'>
								<use xlinkHref={`${sprites}#icon-user`}></use>
							</svg>
							<span className='card__amenities-label'>6 {!isMobile && 'Guests'}</span>
						</li>
						<li className='card__amenities-item'>Apartment</li>
					</ul>
					<div className='card__footer'>
						<div className='card__footer-left'>
							<ul className='card__stars'>
								<li className='card__stars-item'>
									<svg className='card__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='card__stars-item'>
									<svg className='card__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='card__stars-item'>
									<svg className='card__star'>
										<use xlinkHref={`${sprites}#icon-star`}></use>{' '}
									</svg>
								</li>
								<li className='card__stars-item'>
									<svg className='card__star'>
										<use xlinkHref={`${sprites}#icon-star-o`}></use>{' '}
									</svg>
								</li>
								<li className='card__stars-item'>
									<svg className='card__star'>
										<use xlinkHref={`${sprites}#icon-star-o`}></use>{' '}
									</svg>
								</li>
								<li className='card__stars-item'>Average</li>
							</ul>
						</div>
						<div className='card__footer-right'>
							<a href='#'>
								<svg className='card__footer-dots'>
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
