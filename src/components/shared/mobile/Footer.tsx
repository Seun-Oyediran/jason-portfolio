import React from 'react';
import queries from '../../../services/queries/spotify';
import { Spotify } from '../../../svg';

interface IProps {
  className?: string;
  color?: string;
}

const Footer = (props: IProps) => {
  const { className = '', color = '#fff' } = props;
  const { data } = queries.read();

  return (
    <div className={`app_footer_con mobile ${className}`}>
      <div className="bottom px-3">
        <div className="d-flex gap-2 spotify align-items-center">
          <Spotify />
          <p style={{ color }}>
            {data?.item?.name}
            {' '}
            -
            {data?.item?.artists[0]?.name}
          </p>
        </div>
      </div>

      <div className="bottom px-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-1">
            <a style={{ color }} target="_blank" href="mailto:Jeriahudi@gmail.com" rel="noreferrer">
              Mail.
            </a>
            <a
              style={{ color }}
              target="_blank"
              href="https://twitter.com/Gravetwit"
              rel="noreferrer"
            >
              Twitter.
            </a>
            <a
              style={{ color }}
              target="_blank"
              href="https://dribbble.com/Jasoncaine/about"
              rel="noreferrer"
            >
              Dribble
            </a>
          </div>

          <p className="copyright" style={{ color }}>
            &#169;
            {' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
