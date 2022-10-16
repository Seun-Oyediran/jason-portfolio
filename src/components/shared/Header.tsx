import React from 'react';

interface IProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
}

const Header = (props: IProps) => {
  const { className = '', color = '#fff', secondaryColor = '#fff' } = props;

  return (
    <div className={`app_header_con px-5 py-4 ${className}`}>
      <div className="d-flex justify-content-between main_content">
        <div>
          <div className="d-flex align-items-center">
            <button type="button" className="no_style" style={{ color }}>
              Udi.
            </button>
            <h3 style={{ color }}>Home</h3>
          </div>
          <p className="p mt-3" style={{ color: secondaryColor }}>
            folio-
            {' '}
            <br />
            2022
          </p>
        </div>

        <div>
          <div className="d-flex align-items-center justify-content-end">
            <a href="/" className="no_style" style={{ color }}>
              About
            </a>
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
  );
};

export default Header;
