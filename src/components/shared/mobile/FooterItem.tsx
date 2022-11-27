import React from 'react';

interface IProps {
  text?: string;
  className?: string;
  color?: string;
}

const FooterItem = (props: IProps) => {
  const { text, className = '', color = '#f7f7f7' } = props;

  return (
    <div className={`app_mobile_footer_item py-3 ${className}`}>
      <div className="d-flex justify-content-between gap-3 align-items-center">
        <p style={{ color }}>{text}</p>

        <div className="img-con">
          <img src="/img/octagon.svg" alt="polygon" />
        </div>
      </div>
    </div>
  );
};

export default FooterItem;
