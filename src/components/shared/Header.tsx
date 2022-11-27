import Link from 'next/link';
import React, { Fragment } from 'react';
import routes from '../../routes';
import { MobileHeader } from './mobile';

interface IProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
  borderColor?: string;
}

const Header = (props: IProps) => {
  const {
    className = '', color = '#fff', secondaryColor = '#fff', borderColor,
  } = props;

  return (
    <Fragment>
      <div className="d-none d-md-block">
        <div className={`app_header_con px-5 py-4 ${className}`}>
          <div className="d-flex justify-content-between main_content">
            <div>
              <Link href={routes.home.path}>
                <a href={routes.home.path} className="no_style cursor_pointer">
                  <div className="d-flex align-items-center">
                    <button type="button" className="no_style" style={{ color }}>
                      Udi.
                    </button>
                    <h3 style={{ color }}>Home</h3>
                  </div>
                </a>
              </Link>
              <p className="p mt-3" style={{ color: secondaryColor }}>
                folio-
                {' '}
                <br />
                2022
              </p>
            </div>

            <div>
              <div className="d-flex align-items-center justify-content-end">
                <Link href={routes.about.path}>
                  <a href={routes.about.path} className="no_style cursor_pointer" style={{ color }}>
                    About
                  </a>
                </Link>
              </div>
              <p className="p mt-3" style={{ color: secondaryColor }}>
                developed by
                {' '}
                <br />
                Seun Oyediran
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <MobileHeader
          className={className}
          color={color}
          secondaryColor={secondaryColor}
          borderColor={borderColor}
        />
      </div>
    </Fragment>
  );
};

export default Header;
