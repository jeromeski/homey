/* eslint-disable react-hooks/exhaustive-deps */
import { TimelineMax, Elastic } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { NavLink } from 'react-router-dom';

const MobileNavLinks = (props) => {
	const { isOpen } = props;
	const [menuOpen] = useState(null);

	const timeline = new TimelineMax({ pause: true });
	const mobile = useRef(null);
	const mobileLink = useRef(null);

	const showMobileLinks = () => {
		timeline
			.set(mobile.current, { height: 0, opacity: '0' })
			.set(mobileLink.current, { opacity: 0 })
			.to(mobile.current, 1, { height: 'auto', opacity: 1, ease: Elastic.easeOut }, 0.1)
			.to(mobileLink.current, 0.1, { opacity: 1 }, 0.1)
			.play();
		return timeline;
	};

	const hideMobileLinks = () => {
		timeline
			.set(mobile.current, { height: 'auto', opacity: 1 })
			.to(mobileLink.current, 0.1, { opacity: 0 })
			.to(mobile.current, 0.1, { height: 0, opacity: 0 }, 0.1)
			.play();
		return timeline;
	};

	const handleCloseMenu = () => {
		hideMobileLinks();
		if (isOpen) {
			props.dispatch(actions.toggleMenu(false));
		}
	};

	useEffect(() => {
		if (isOpen) {
			showMobileLinks();
		} else {
			hideMobileLinks();
		}
	}, [isOpen, timeline, menuOpen, showMobileLinks, hideMobileLinks]);

	return (
		<ul ref={mobile} className='navbar__mobile'>
			<li ref={mobileLink} className='navbar__mobile-item'>
				<NavLink exact activeClassName='active' to='/' onClick={handleCloseMenu}>
					Home
				</NavLink>
			</li>
			<li ref={mobileLink} className='navbar__mobile-item'>
				<NavLink exact activeClassName='active' to='/login' onClick={handleCloseMenu}>
					Login
				</NavLink>
			</li>
			<li ref={mobileLink} className='navbar__mobile-item'>
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
