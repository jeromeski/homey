import React from 'react';
import { NavLink } from 'react-router-dom';
import sprites from '../../assets/img/sprites.svg';

const MyNavlinks = () => {
	return (
		<div className='mynavbar__user-area'>
			<ul className='mynavbar__links-wrap'>
				<li className='mynavbar__links-item'>
					<NavLink exact activeClassName='active' to='/'>
						Home
					</NavLink>
				</li>
				<li className='mynavbar__links-item'>
					<NavLink exact activeClassName='active' to='/listing'>
						Listing
					</NavLink>
				</li>
			</ul>
			<ul className='mynavbar__auth-wrap'>
				<li className='mynavbar__auth-item'>
					<NavLink exact activeClassName='active' to='/login'>
						Login
					</NavLink>
				</li>
				<li>
					<svg className='mynavbar__auth-icon'>
						<use xlinkHref={`${sprites}#icon-circle-thin`}></use>
					</svg>
				</li>
				<li className='mynavbar__auth-item'>
					<NavLink exact activeClassName='active' to='/register'>
						Register
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default MyNavlinks;
