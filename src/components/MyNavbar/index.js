/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/img/homey-logo.png';
import sprites from '../../assets/img/sprites.svg';
import { DeviceSize } from '../../responsive/index';
import MyMenuToggle from './MenuToggle';
import MobileNavLinks from './MobileNavLinks';
import Navlinks from './MyNavlinks';

const MyNavbar = () => {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	return (
		<div className='mynavbar'>
			<div className='mynavbar__container'>
				<div className='mynavbar__logo'>
					<img src={logo} alt='Logo' />
				</div>
				<div className='mynavbar__search'>
					<input className='mynavbar__search-input' type='search' placeholder='Search here...' />
					<button className='mynavbar__search-button'>
						<svg className='mynavbar__search-icon'>
							<use xlinkHref={`${sprites}#icon-search`}></use>
						</svg>
					</button>
				</div>
				{!isMobile && <Navlinks />}
				{isMobile && <MyMenuToggle />}
			</div>
			{isMobile && <MobileNavLinks />}
		</div>
	);
};

export default MyNavbar;
