import React, { Fragment, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import {
  BottomFooter, Header, MetaData, TimeButton,
} from '../components';
import { aboutMovies } from '../utils';
import { AboutFooter } from '../components/about';

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
    <Fragment>
      <MetaData />

      <AnimatePresence>
        <div className="app_home_page">
          <div>
            <Header />
            <div className="d-flex justify-content-center">
              <TimeButton />
            </div>
          </div>
          <div className="px-md-5 px-3">
            <div className="d-md-flex justify-content-between gap-3">
              <div className="about_page_first_content mt-5">
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

              <div className="about_page_second_content align-self-center mt-5">
                <h6>Migwo</h6>
                <p className="mt-3 d-none d-md-block">
                  That means uh, Good morning, you’ve seen my choice in music, other stuff I’m
                  interested in Include..
                </p>

                <p className="mt-3 d-md-none">
                  That means uh, Good morning,
                  {' '}
                  <br />
                  {' '}
                  you’ve seen my choice in music,
                  <br />
                  {' '}
                  other stuff I’m interested in Include..
                </p>
              </div>

              <div className="about_page_third_content mt-5 d-flex flex-column justify-content-center">
                <h6>What I love to Watch</h6>

                {aboutMovies.map((item, index) => {
                  if (index === active) {
                    return (
                      <motion.div
                        initial={{ x: '100%', opacity: 0.4 }}
                        animate={{ x: '0', opacity: 1 }}
                        transition={{ type: 'tween' }}
                        className="img-con my-3"
                        key={item.id}
                      >
                        <Image
                          src={item.image}
                          alt="movie"
                          loading="lazy"
                          layout="responsive"
                          width={286}
                          height={382}
                          className="w-100 bg-white"
                        />
                      </motion.div>
                    );
                  }

                  return null;
                })}

                <h6>{aboutMovies[active].name}</h6>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <AboutFooter />
            <BottomFooter />
          </div>
          {/* <WelcomeScreen /> */}
        </div>
      </AnimatePresence>
    </Fragment>
  );
};

export default About;
