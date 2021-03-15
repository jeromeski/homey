/* eslint-disable react-hooks/exhaustive-deps */
import { TimelineLite, Elastic } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions';


const showMobileLinks = (timeline, mobile, mobileLink) => {
	timeline
		.set(mobile.current, { height: 0, opacity: '0', visibility: 'hidden' })
		.set(mobileLink.current, { opacity: 0, visibility: 'hidden' })
		.to(
			mobile.current,
			1,
			{ height: 'auto', opacity: 1, visibility: 'visible', ease: Elastic.easeOut },
			0.1
		)
		.to(mobileLink.current, 0.1, { opacity: 1, visibility: 'visible' }, 0.1)
		.play();
	return timeline;
};

const hideMobileLinks = (timeline, mobile, mobileLink) => {
	timeline
		.set(mobile.current, { height: 'auto', opacity: 1, visibility: 'visible' })
		.to(mobileLink.current, 0.1, { opacity: 0 })
		.to(mobile.current, 0.1, { height: 0, opacity: 0, visibility: 'hidden' }, 0.1)
		.play();
	return timeline;
};




const MobileNavLinks = (props) => {
	const { isOpen, dispatch } = props;
	const timeline = new TimelineLite({ pause: true });
	const mobile = useRef(null);
	const mobileLi = useRef(null);

	const initNavLinks = (timeline, mobile, mobileLink) => {
		if (isOpen) {
			showMobileLinks(timeline, mobile, mobileLink);
		} else {
			hideMobileLinks(timeline, mobile, mobileLink);
		}
	};

	const handleCloseMenu = () => {
		hideMobileLinks();
		if (isOpen) {
			dispatch(actions.toggleMenu(false));
		}
	};

	useEffect(() => {
		initNavLinks(timeline, mobile, mobileLi);
	}, [isOpen, timeline, mobile, mobileLi]);

	return (
		<ul ref={mobile} className='mynavbar__mobile'>
			<li ref={mobileLi} className='mynavbar__mobile-item'>
				<NavLink exact activeClassName='active' to='/' onClick={handleCloseMenu}>
					Home
				</NavLink>
			</li>
			<li ref={mobileLi} className='mynavbar__mobile-item'>
				<NavLink exact activeClassName='active' to='/listing' onClick={handleCloseMenu}>
					Listing
				</NavLink>
			</li>
			<li ref={mobileLi} className='mynavbar__mobile-item'>
				<NavLink exact activeClassName='active' to='/login' onClick={handleCloseMenu}>
					Login
				</NavLink>
			</li>
			<li ref={mobileLi} className='mynavbar__mobile-item'>
				<NavLink exact activeClassName='active' to='/register' onClick={handleCloseMenu}>
					Register
				</NavLink>
			</li>
		</ul>
	);
};

const mapStateToProps = (state) => {
	return {
		isOpen: state.isOpen
	};
};

export default connect(mapStateToProps)(MobileNavLinks);
