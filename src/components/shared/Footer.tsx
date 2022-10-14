import React from 'react';
import { Spotify } from '../../svg';

const Footer = () => {
  return (
    <div className="app_footer_con">
      <div className="top px-5">
        <div className="d-flex justify-content-between">
          <p className="first p">
            Should have been a website with loads of animations, Showcasing mostly the devs skills,
            buttt. the budget didn’t match so you get this.
          </p>

          <p className="last p">
            Schedule opening up in October, would you like to collaborate on a project? We
            {' '}
            <br />
            <a href="/" className="no_style">
              Should Talk!
            </a>
          </p>
        </div>
      </div>
      <div className="bottom px-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2 spotify align-items-center">
            <Spotify />
            <p>Mr. Rager - Kid Cudi</p>
          </div>
          <div className="d-flex gap-1">
            <a href="/">Mail.</a>
            <a href="/">Twitter.</a>
            <a href="/">Dribble</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
