import React from 'react';
import { ArrowUp, Polygon } from '../../../svg';
import { FooterItem } from '../../shared/mobile';

const socialLinks = [
  { id: 1, name: 'LINKEDIN', href: 'https://www.linkedin.com/in/jason-udi-5157a5203/' },
  { id: 2, name: 'EMAIL', href: 'mailto:Jeriahudi@gmail.com' },
  { id: 3, name: 'DRIBBLE', href: 'https://dribbble.com/Jasoncaine/about' },
  { id: 4, name: 'TWITTER', href: 'https://twitter.com/Gravetwit' },
];

const MobileAboutFooter = () => {
  return (
    <div className="about_fouter_con mt-3">
      <div className="about_footer_right_con px-3 mb-5">
        <div className="d-flex flex-column align-items-center">
          <div className="big_hexagon_con mt-4 mb-3">
            <img src="/img/polygon.svg" className="polygon" alt="polygon" />

            <iframe
              src="https://giphy.com/embed/5hrTWkvO6dFodC8hnl"
              className="giphy-embed"
              allowFullScreen
              title="spider-verse"
              width="100%"
              height="100%"
            />
          </div>
          <Polygon />
        </div>
      </div>
      <div className="px-3">
        <FooterItem
          text="For collaborations or partnerships, send an email to jeriahudi@gmail.com"
          className="about_footer_item"
        />
      </div>
      <div className="px-3 bordered_footer_item">
        <div className="app_mobile_footer_item mobile py-3">
          <div className="d-flex justify-content-between gap-3 align-items-center">
            <div>
              {socialLinks.map((item) => (
                <div key={item.id} className="my-1">
                  <a
                    target="_blank"
                    href={item.href}
                    rel="noreferrer"
                    className="d-inline-block d-flex gap-1 social_link mobile align-items-center"
                  >
                    {item.name}

                    <ArrowUp />
                  </a>
                </div>
              ))}
            </div>
            <div className="img-con">
              <img src="/img/octagon.svg" alt="polygon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAboutFooter;
