import React from 'react';
// import queries from '../../services/queries/spotify';
import { Spotify } from '../../svg';

interface IProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
}

const Footer = (props: IProps) => {
  const { className = '', color = '#fff', secondaryColor = '#fff' } = props;
  // const { data } = queries.read();

  return (
    <div className={`app_footer_con ${className}`}>
      <div className="top px-5">
        <div className="d-flex justify-content-between">
          <p className="first p" style={{ color: secondaryColor }}>
            Should have been a website with loads of animations, Showcasing mostly the devs skills,
            buttt. the budget didn’t match so you get this.
          </p>

          <p className="last p" style={{ color: secondaryColor }}>
            Schedule opening up in October, would you like to collaborate on a project? We
            {' '}
            <br />
            <a href="/" className="no_style">
              Should Talk!
            </a>
          </p>
        </div>
      </div>
      <div className="bottom px-5" style={{ borderColor: color }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2 spotify align-items-center">
            <Spotify />
            {/* <p style={{ color }}>
              {data?.item?.name} -{data?.item?.artists[0]?.name}
            </p> */}
          </div>
          <div className="d-flex gap-1">
            <a style={{ color }} href="/">
              Mail.
            </a>
            <a style={{ color }} href="/">
              Twitter.
            </a>
            <a style={{ color }} href="/">
              Dribble
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
