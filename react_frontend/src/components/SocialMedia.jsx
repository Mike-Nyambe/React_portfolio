import React from 'react';
import{ BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__socialMediaIcons'>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsFacebook />
      </div>
    </div>
  )
}

export default SocialMedia
