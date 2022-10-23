import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Footer, Header, TimeButton } from '../components';
import { aboutMovies } from '../utils';

const INTERVAL = 5000;

const About = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < aboutMovies.length - 1) {
        index += 1;
        setActive(index);
      } else {
        index = 0;
        setActive(index);
      }
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <div className="app_home_page">
        <div>
          <Header />
          <div className="d-flex justify-content-center">
            <TimeButton />
          </div>
        </div>
        <div className="px-5">
          <div className="d-flex justify-content-between gap-3">
            <div className="about_page_first_content">
              <h2>
                About
                <br />
                Me
              </h2>

              <h5 className="mt-4">
                We’re all Influenced by something. Jason Udi is an Interface designer. I’ve worked
                building startups, working with companies to ship products and Cofounded an Nft
                Project.
              </h5>
            </div>

            <div className="about_page_second_content align-self-center">
              <h6>Migwo</h6>
              <p className="mt-3">
                That means uh, Good morning, you’ve seen my choice in music, other stuff I’m
                interested in Include..
              </p>
            </div>

            <div className="about_page_third_content">
              <h6>What I love to Watch</h6>

              {aboutMovies.map((item, index) => {
                if (index === active) {
                  return (
                    <motion.div
                      initial={{ x: '100%', opacity: 0.4 }}
                      animate={{ x: '0', opacity: 1 }}
                      className="img-con my-3"
                      key={item.id}
                    >
                      <img src={item.image} alt="movie" className="w-100" />
                    </motion.div>
                  );
                }

                return null;
              })}

              <h6>{aboutMovies[active].name}</h6>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
        {/* <WelcomeScreen /> */}
      </div>
    </AnimatePresence>
  );
};

export default About;
