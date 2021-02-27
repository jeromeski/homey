import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'redux-form';
import RegisterForm from './RegisterForm';

const Register = () => {
	return (
		<div className='register'>
			<div className='register__container'>
				<div className='register__left'>left</div>
				<div className='register__right'>
					<div className='register__right-inner'>
						<div className='register__header'></div>
						<div className='register__body'>
							<div className='register__cta-social-media'>
								<Button variant='outline' type='submit'>
									Facebook
								</Button>
								<Button variant='outline' type='submit'>
									Google
								</Button>
							</div>
							<div>Login</div>
							<RegisterForm />
							<div className='register__option'>
								<p>
									Don't you have an account? <span>Register</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
