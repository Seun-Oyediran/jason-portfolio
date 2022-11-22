import React from 'react';
import { TimeButton } from '..';
import { HomeButton, Footer } from '../..';
import Header from '../Header';
import FooterItem from './FooterItem';

const Home = () => {
  return (
    <div className="app_home_page">
      <div>
        <Header />
        <div className="d-flex justify-content-center">
          <TimeButton />
        </div>
      </div>

      <div className="d-md-none ">
        <div className="px-3 my-5">
          <HomeButton active text="Home" />
          <HomeButton text="Works" value={3} />
          <HomeButton text="Workshop" value={5} />
        </div>

        <div className="mt-4">
          <div className="px-3">
            <FooterItem text="An Interface designer with a love for anime, and working remotely. Cofounder of Huslow Tech. Available Nov. 2022" />
          </div>

          <div className="px-3 footer_item_border_top">
            <FooterItem text="Should have been a website with loads of animations, Showcasing mostly the devs skills, buttt. the budget didn’t so you get this. " />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
