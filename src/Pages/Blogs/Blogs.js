import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h1 style={{ color: 'rgb(51, 36, 103)' }} className='text-center mt-3 fw-bold'>Welcome to my Blog</h1>
            <div className='container'>
                <div className='blog mt-4 bg-light'>
                    <h4 className='mb-3'>What is the difference between Authoziration and Authentication?</h4>
                    <p>Authentication is the process by which we can verify that a person or a user is actually is this what he representing or saying by himself. The process by which we can detect that this user is really what he representing or not is called authentication.
                        On the other hand if authentication prove that this user is real then this user or person considered as an authorized user. Authorization determine what resourced an authentic user can access.
                    </p>
                </div>
                <div className='blog mt-4 bg-light'>
                    <h4 className='mb-3'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Firebase authentication system is trusted and most popular authentication system. We can use easily implement firebase authentication system into our website. We can use react firebase hooks to make integration with firebase. We can implement email password, GitHub, google, Facebook, and many other authentication system by using firebase.
                    </p>
                </div>
                <div className='blog mt-4 bg-light'>
                    <h4 className='mb-3'>What other services does firebase provide other than authentication?</h4>
                    <p>Firebase provides some other benefits except authentication. Firebase provide hosting. We can deploy out site to firebase. Firebase also provides real time database, storage, Machine learning etc. We can do so many works alone with firebase.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;