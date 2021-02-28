/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from 'react-bootstrap';
import React from 'react';

import sprites from '../../assets/img/sprites.svg';
import LoginForm from './LoginForm';

const Login = () => {
	return (
		<div className='auth'>
			<div className='auth__container'>
				<div className='auth__inner'>
					<div className='auth__right'>
						<p className='auth__right-title'>
							Welcome <br /> Please Login!
						</p>
						<div className='auth__right-inner'>
							<div className='login__header'>
								<p>Login</p>
							</div>
							<div className='login__body'>
								<div className='login__cta-social-media'>
									<Button variant='custom-1' type='submit'>
										<svg className='btn-icon-1'>
											<use xlinkHref={`${sprites}#icon-facebook`}></use>
										</svg>
										<span>Signin with Facebook</span>
									</Button>
									<Button variant='custom-2' type='submit'>
										<svg className='btn-icon-2'>
											<use xlinkHref={`${sprites}#icon-google`}></use>
										</svg>
										<span>Signin with Google</span>
									</Button>
								</div>
								<p className='login__title'>Login</p>
								<LoginForm />
								<p className='text-center'>
									Don't have an account? <a href='#'>Register</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
