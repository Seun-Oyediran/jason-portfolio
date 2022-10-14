import React from 'react';

const Header = () => {
  return (
    <div className="app_header_con p-5 pb-4">
      <div className="d-flex justify-content-between main_content">
        <div>
          <div className="d-flex align-items-center">
            <button type="button" className="no_style">
              Udi.
            </button>
            <h3>Home</h3>
          </div>
          <p className="p mt-3">
            folio-
            {' '}
            <br />
            2022
          </p>
        </div>

        <div>
          <div className="d-flex align-items-center justify-content-end">
            <a href="/" className="no_style">
              About
            </a>
          </div>
          <p className="p mt-3">
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
