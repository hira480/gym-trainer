import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='or'>
                <div className='line'><hr /></div>
                <div className='mx-2'>Or</div>
                <div className='line'><hr /></div>
            </div>
            <div>
                <button
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