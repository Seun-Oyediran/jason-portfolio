import React from 'react';
import Image from 'next/image';

interface IProps {
  img: string;
}

const ProjectImage = (props: IProps) => {
  const { img } = props;

  return (
    <div className="app_project_big_image">
      <Image src={img} alt="project" loading="lazy" layout="responsive" width={711} height={362} />
    </div>
  );
};

export default ProjectImage;
