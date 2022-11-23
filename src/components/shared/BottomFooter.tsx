import React, { Fragment } from 'react';
import queries from '../../services/queries/spotify';
import { Spotify } from '../../svg';
import { MobileBottomFooter } from './mobile';

interface IProps {
  color?: string;
}

const BottomFooter = (props: IProps) => {
  const { color = '#fff' } = props;
  const { data } = queries.read();

  return (
    <Fragment>
      <div className="app_footer_con d-none d-md-block">
        <div className="bottom px-5" style={{ borderColor: color }}>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2 spotify align-items-center">
              <Spotify />
              <p style={{ color }}>
                {data?.item?.name}
                {' '}
                -
                {data?.item?.artists[0]?.name}
              </p>
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

      <div className="d-md-none">
        <MobileBottomFooter />
      </div>
    </Fragment>
  );
};

export default BottomFooter;
