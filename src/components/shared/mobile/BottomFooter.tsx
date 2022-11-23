import React from 'react';
import queries from '../../../services/queries/spotify';
import { Spotify } from '../../../svg';

interface IProps {
  className?: string;
  color?: string;
}

const BottomFooter = (props: IProps) => {
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
          <p style={{ color, fontSize: '14px', lineHeight: '18px' }}>
            Independent designer
            <br />
            Available Nov. 2022
          </p>

          <p style={{ color, fontSize: '14px', lineHeight: '18px' }}>
            All rights reserved
            {' '}
            <br />
            Jason Udi 2022 c
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
