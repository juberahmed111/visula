import React from 'react';

import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import google from '../../img/social/google.png'
import github from '../../img/social/github.png'
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(
        auth
    );
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (


        <div className='container w-50 mx-auto'>

            <h2 className='text-primary text-center mt-2'>Please Login With</h2>
            <SocialLogin></SocialLogin>
            <Form onSubmit={handleLogin} className={'w-50 mx-auto'}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                {errorElement}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p></p>
                <Button onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }} variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
                <p>New to user <Link to={'/register'} className='text-primary text-decoration-none '>Please Register</Link></p>
                <p>Forget Password<Link to={'/register'} className='text-primary text-decoration-none '>Reset Password</Link></p>

            </Form>


        </div>


    );
};

export default Login;