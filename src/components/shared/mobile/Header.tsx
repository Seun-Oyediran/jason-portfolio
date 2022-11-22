import Link from 'next/link';
import React from 'react';
import routes from '../../../routes';

interface IProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
}

const Header = (props: IProps) => {
  const { className = '', color = '#fff', secondaryColor = '#F7F7F7' } = props;
  return (
    <div className={`app_header_con mobile py-4 ${className}`}>
      <div className="top_content d-flex justify-content-between px-3 ">
        <Link href={routes.home.path}>
          <a href={routes.home.path} className="no_style cursor_pointer">
            <h4 className="home" style={{ color }}>
              Udi.Home
            </h4>
          </a>
        </Link>

        <Link href={routes.about.path}>
          <a href={routes.about.path} className="no_style cursor_pointer">
            <h4 style={{ color }}>About</h4>
          </a>
        </Link>
      </div>

      <div className="bottom_content d-flex justify-content-between px-3 ">
        <p className="p mt-3" style={{ color: secondaryColor }}>
          folio-
          {' '}
          <br />
          2022
        </p>

        <p className="p mt-3 developer" style={{ color: secondaryColor }}>
          developed by
          {' '}
          <br />
          Seun Oyediran
        </p>
      </div>
    </div>
  );
};

export default Header;
