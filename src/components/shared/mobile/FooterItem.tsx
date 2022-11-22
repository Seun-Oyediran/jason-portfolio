import React from 'react';

interface IProps {
  text?: string;
}

const FooterItem = (props: IProps) => {
  const { text } = props;

  return (
    <div className="app_mobile_footer_item py-3">
      <div className="d-flex justify-content-between gap-3 align-items-center">
        <p>{text}</p>

        <div className="img-con">
          <img src="/img/octagon.svg" alt="polygon" />
        </div>
      </div>
    </div>
  );
};

export default FooterItem;
