import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
  img: string;
  layoutId?: string;
}

const ProjectCard = (props: IProps) => {
  const { img, layoutId } = props;

  return (
    <AnimatePresence mode="wait">
      <motion.div layoutId={layoutId} className="app_project_card_con">
        <Image
          src={img}
          alt="onboarding"
          loading="lazy"
          layout="responsive"
          width={57}
          height={277}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectCard;
