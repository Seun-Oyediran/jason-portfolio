import React from 'react';
import { Spotify } from '../../svg';

interface IProps {
  color?: string;
}

const BottomFooter = (props: IProps) => {
  const { color = '#fff' } = props;

  return (
    <div className="app_footer_con ">
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

export default BottomFooter;
