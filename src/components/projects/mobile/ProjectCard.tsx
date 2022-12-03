import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
  href: string;
  number?: string;
  img: string;
}

const ProjectCard = (props: IProps) => {
  const { href, img, number } = props;

  return (
    <div className="app__mobile__project__card">
      <Link href={href}>
        <a href={href}>
          <div className=" d-flex gap-2">
            <h4>{number}</h4>
            <div className="img-con">
              <Image
                src={img}
                className="w-100"
                loading="lazy"
                alt="project"
                width={165}
                height={165}
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
