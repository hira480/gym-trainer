import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorText;

    if (error) {
        errorText = <p className='text-danger'>Error: {error.message}</p>
    }
    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='or'>
                <div className='line'><hr /></div>
                <div className='mx-2'>Or</div>
                <div className='line'><hr /></div>
            </div>
            {errorText}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-light d-block mx-auto my-2 btn-width'>
                    <img height={32} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button
                    className='btn btn-light d-block mx-auto my-2 btn-width'>
                    <img height={31} src={github} alt="" />
                    <span className='px-2'>Gitub Sign In</span>
                </button>
                <button
                    className='btn btn-light d-block mx-auto my-2 btn-width'>
                    <img height={31} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;