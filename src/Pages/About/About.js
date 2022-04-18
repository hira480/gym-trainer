import React from 'react';
import './About.css';
import hira from '../../images/hira.png';

const About = () => {
    return (
        <div>
            {/* <h2 className='text-center mt-3'>About Me</h2> */}
            <div className='container '>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='col-sm-12 col-md-6'>
                        <img className='w-100' src={hira} alt="" />
                    </div>
                    <div className='col-sm-12 col-md-6 '>
                        <div className=' text'>
                            <h3 className='text-primary'>Md. Abdul Mannan</h3>
                            <h5>Bsc (Hons) in Computer Science and Engineering. <br />Dhaka City College, Dhaka.</h5>
                            <p>Hi there! I am Mannan. I have done my graduation from Dhaka City College. I am trying to build up my career with web development. I have more than 2 years of experience about web development. But i am not done any professional work yet. Now I am developing my skill about web development. <br />
                                I am expert in JavaScript, ReactJS, Firebase authentication etc. I have done so many projects by using those technology. My goal is to become a full stack web developer. <br />
                                Keep me in your prayer. Thank you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;