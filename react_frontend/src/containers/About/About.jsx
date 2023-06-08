import React, { useState, useEffect } from 'react'
import{ motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import{ images } from '../../constants';
import './About.scss';

// const abouts= [
//   {
//     title: 'Front-End Web Developement', discription: ' I am front-end web develiper with 5 years of experience', imgUrl:images.about01 
//   },
//   {
//     title: 'Back-End Web Developement', discription: ' I am front-end web develiper with 5 years of experience', imgUrl:images.about02
//   },
//   {
//     title: 'Digital Marketing', discription: ' I am front-end web develiper with 5 years of experience', imgUrl: images.about03
//   }
// ]
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
   const query ='*[_type == "abouts"]';
   client.fetch(query)
    .then((data) => setAbouts(data))
  }, []);
  
  return (
    <>
      <h2 className='head-text'>
        I know that 
        <span> Good Design</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {
          abouts.map((about, index)=>(
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale:1.1 }}
              transition={{ duration: 0.5, type: 'tween'}}
              className='app__profiles-items'
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default About
