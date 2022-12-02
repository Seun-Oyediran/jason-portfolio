import React from 'react';
import RenderIf from './RenderIf';

interface IProps {
  text?: string;
  value?: number;
  active?: boolean;
  className?: string;
}

const HomeButton = (props: IProps) => {
  const {
    text, value, active, className = '',
  } = props;
  return (
    <div className={`app_home_button_con ${active ? 'active' : ''} my-2 py-1 ${className}`}>
      <div className="d-flex align-items-end gap-1">
        <h2>{text}</h2>
        <RenderIf condition={!!value}>
          <h6>
            (
            {value}
            )
          </h6>
        </RenderIf>
      </div>
    </div>
  );
};

export default HomeButton;
