import React, { Fragment } from 'react';
import queries from '../../services/queries/spotify';
// import queries from '../../services/queries/spotify';
import { Spotify } from '../../svg';
import { MobileFooter } from './mobile';
import RenderIf from './RenderIf';

const DEFAULT_TEXT = 'Should have been a website with loads of animations, Showcasing mostly the devs skills, buttt. the budget didn’t match so you get this.';
interface IProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
  role?: string;
  developedBy?: string;
  client?: string;
  date?: string;
  project?: boolean;
  link?: string;
  leftText?: string;
}

interface IProjectDetails {
  topic?: string;
  value?: string;
  className?: string;
}

const ProjectDetails = (props: IProjectDetails) => {
  const { topic, value, className = '' } = props;

  return (
    <div className={`project_details_item ${className}`}>
      <h4>{topic}</h4>
      <p>{value}</p>
    </div>
  );
};

const Footer = (props: IProps) => {
  const {
    className = '',
    color = '#fff',
    secondaryColor = '#fff',
    client,
    date,
    developedBy,
    role,
    project = false,
    link,
    leftText = DEFAULT_TEXT,
  } = props;
  const { data } = queries.read();

  return (
    <Fragment>
      <div className="d-none d-md-block">
        <div className={`app_footer_con ${className}`}>
          <div className="top px-5">
            <RenderIf condition={project && !!link}>
              <div className="d-flex justify-content-center mt-4">
                <a
                  target="_blank"
                  href={link}
                  className={`visit_site_link ${className}`}
                  rel="noreferrer"
                >
                  Visit Site
                </a>
              </div>
            </RenderIf>
            <div className="d-flex justify-content-between gap-3 mt-3">
              <p className="first p" style={{ color: secondaryColor }}>
                {leftText}
              </p>

              <RenderIf condition={project}>
                <div className="project_details_grid_con">
                  <ProjectDetails topic="Role" value={role} className={className} />
                  <ProjectDetails topic="Developed by" value={developedBy} className={className} />
                  <ProjectDetails topic="Client" value={client} className={className} />
                  <ProjectDetails topic="Date" value={date} className={className} />
                </div>
              </RenderIf>

              <p className="last p" style={{ color: secondaryColor }}>
                Schedule opening up in October, would you like to collaborate on a project? We
                {' '}
                <br />
                <a href="/" className="no_style" style={{ color: secondaryColor }}>
                  Should Talk!
                </a>
              </p>
            </div>
          </div>
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
                <a
                  style={{ color }}
                  target="_blank"
                  href="mailto:Jeriahudi@gmail.com"
                  rel="noreferrer"
                >
                  Mail.
                </a>
                <a
                  style={{ color }}
                  target="_blank"
                  href="https://twitter.com/Gravetwit"
                  rel="noreferrer"
                >
                  Twitter.
                </a>
                <a
                  style={{ color }}
                  target="_blank"
                  href="https://dribbble.com/Jasoncaine/about"
                  rel="noreferrer"
                >
                  Dribble
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <MobileFooter className={className} color={color} />
      </div>
    </Fragment>
  );
};

export default Footer;
