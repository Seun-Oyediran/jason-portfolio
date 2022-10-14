import Image from 'next/image';
import React from 'react';

interface IProps {
  img: string;
}

const ProjectCard = (props: IProps) => {
  const { img } = props;

  return (
    <div className="app_project_card_con">
      <Image
        src={img}
        alt="onboarding"
        loading="lazy"
        layout="responsive"
        width={57}
        height={277}
      />
    </div>
  );
};

export default ProjectCard;
