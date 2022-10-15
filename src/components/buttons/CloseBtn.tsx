import React from 'react';
import { Close } from '../../svg';

interface IProps {
  handleClick?: () => void;
}

const CloseBtn = (props: IProps) => {
  const { handleClick } = props;
  return (
    <div>
      <button type="button" className="no_style app_close_btn" onClick={handleClick}>
        <span className="icon">
          <Close />
        </span>
        <span className="text">Close</span>
      </button>
    </div>
  );
};

export default CloseBtn;
