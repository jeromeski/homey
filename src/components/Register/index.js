import { Button } from 'react-bootstrap';
import React from 'react';

import RegisterForm from './RegisterForm';
import sprites from '../../assets/img/sprites.svg';

const Register = () => {
	return (
		<div className='register'>
			<div className='register__container'>
				<div className='register__inner'>
					<div className='register__right'>
            <p className='register__right-title'>Welcome <br/> Please Register!</p>
						<div className='register__right-inner'>
							<div className='register__header'>
								<p>Register</p>
							</div>
							<div className='register__body'>
								<div className='register__cta-social-media'>
									<Button variant='custom-1' type='submit'>
										<svg className='btn-icon-1'>
											<use xlinkHref={`${sprites}#icon-facebook`}></use>
										</svg>
										<span>Signup with Facebook</span>
									</Button>
									<Button variant='custom-2' type='submit'>
										<svg className='btn-icon-2'>
											<use xlinkHref={`${sprites}#icon-google`}></use>
										</svg>
										<span>Signup with Google</span>
									</Button>
								</div>
								<p className='register__title'>Register</p>
								<RegisterForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
