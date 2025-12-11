import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';


const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/9mohitpatel' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/mohit-patel-b028b9257/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

          
        </div>
    );
};

export default HeaderSocials;
