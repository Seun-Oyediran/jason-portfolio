import React from 'react';
import { ArrowRight } from '../../../svg';
import { projectsObject } from '../../../utils';
import { FooterItem } from '../../shared/mobile';

type IData = ReturnType<() => typeof projectsObject.pap>;

interface IProps {
  data: IData;
}

const Projects = (props: IProps) => {
  const { data } = props;

  return (
    <div className="app_projects_mobile_layout mt-5">
      <div className="px-3">
        <h2 className="title my-3" style={{ color: data?.titleColor }}>
          {data?.mobileTitle}
        </h2>
        <div className="d-flex justify-content-center pt-4">
          <div className="project_details">
            <div className="d-flex gap-3 justify-content-between mt-3">
              <div className="flex_con">
                <h4 style={{ color: data?.color }}>Role</h4>
                <p style={{ color: data?.secondaryColor }}>{data?.role}</p>
              </div>

              <div className="flex_con">
                <h4 style={{ color: data?.color }}>Client</h4>
                <p style={{ color: data?.secondaryColor }}>{data?.client}</p>
              </div>
            </div>

            <div className="d-flex gap-3 justify-content-between mt-3">
              <div className="flex_con">
                <h4 style={{ color: data?.color }}>Developed by</h4>
                <p style={{ color: data?.secondaryColor }}>{data?.developedBy}</p>
              </div>

              <div className="flex_con">
                <h4 style={{ color: data?.color }}>Date</h4>
                <p style={{ color: data?.secondaryColor }}>{data?.date}</p>
              </div>
            </div>

            <div className="d-flex gap-3 justify-content-between mt-4">
              <div>
                <a target="_blank" href="/" style={{ color: data?.color }}>
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="img-container mt-5 pt-4">
        {data?.images.map((item, index) => (
          <div className="my-3" key={index}>
            <img src={item} alt={data?.mobileTitle} className="w-100" />
          </div>
        ))}
      </div>

      <div className="px-3 mt-4 action_buttons">
        <div className="d-flex justify-content-between ">
          <div>
            <button
              style={{
                borderColor: data?.mobileBtnBorder,
                color: data?.mobileBtnText,
                backgroundColor: data?.mobileBtnBg,
              }}
              type="button"
            >
              Back
            </button>
          </div>

          <div>
            <button
              style={{
                borderColor: data?.mobileBtnBorder,
                color: data?.mobileBtnText,
                backgroundColor: data?.mobileBtnBg,
              }}
              type="button"
            >
              Next Project
              {' '}
              <ArrowRight stroke={data?.mobileBtnText} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-3 mt-3 mb-2">
        <FooterItem
          text="For collaborations or partnerships, send an email to jeriahudi@gmail.com"
          className="about_footer_item"
          color={data?.color}
        />
      </div>
    </div>
  );
};

export default Projects;
