import React from 'react';
import { ArrowUp } from '../../svg';

const socialLinks = [
  { id: 1, name: 'LINKEDIN', href: 'https://www.linkedin.com/in/jason-udi-5157a5203/' },
  { id: 2, name: 'EMAIL', href: 'mailto:Jeriahudi@gmail.com' },
  { id: 3, name: 'DRIBBLE', href: 'https://dribbble.com/Jasoncaine/about' },
  { id: 4, name: 'TWITTER', href: 'https://twitter.com/Gravetwit' },
];

const AboutFooter = () => {
  return (
    <div className="about_fouter_con mb-4">
      <div className="d-flex justify-content-between px-5 align-items-end">
        <div>
          <div>
            {socialLinks.map((item) => (
              <div key={item.id} className="my-1">
                <a
                  target="_blank"
                  href={item.href}
                  rel="noreferrer"
                  className="d-inline-block d-flex gap-1 social_link align-items-center"
                >
                  {item.name}

                  <ArrowUp />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <h5 className="independent_text">
              Independent designer
              {' '}
              <br />
              Available Nov. 2022
            </h5>
          </div>
        </div>

        <div className="about_footer_middle_con">
          <div className="d-flex justify-content-center mb-5">
            <h6>
              <a href="/">View my top 23 Films</a>
            </h6>
          </div>

          <div className="d-flex gap-4 mb-4">
            <div>
              <h5>
                Designed by
                {' '}
                <br />
                Jason Udi
              </h5>
            </div>

            <div>
              <h5>
                Developed by
                {' '}
                <br />
                Seun Oyediran
              </h5>
            </div>

            <div>
              <h5>
                Typeface
                {' '}
                <br />
                DM Sans
              </h5>
            </div>
          </div>
        </div>

        <div className="about_footer_right_con">
          <div className="big_hexagon_con mt-4">
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

          <h5 className="mt-3">
            All rights reserved
            {' '}
            <br />
            Jason Udi 2022 c
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AboutFooter;
