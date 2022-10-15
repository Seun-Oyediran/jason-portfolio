import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { Footer, Header, TimeButton } from '../components';
import { CloseBtn } from '../components/buttons';
import ProjectImage from '../components/projects/ProjectImage';

gsap.registerPlugin(ScrollTrigger);

interface IProps {
  handleClose?: () => void;
  layoutId?: string;
}

function SafeHydrate({ children }: { children: any }) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

const ProjectModal = (props: IProps) => {
  const { handleClose, layoutId } = props;
  const [title, setTitle] = useState(true);

  const boxxRef = useRef<HTMLDivElement>(null);
  const triggerrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = boxxRef?.current;
      if (element === null) return;

      gsap.fromTo(
        element,
        {
          x: window.innerWidth - 30,
        },
        {
          x: -element.clientWidth + 30,
          scrollTrigger: {
            trigger: triggerrRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 4,
            pin: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const left = boxxRef?.current?.getBoundingClientRect().left || 0;

      if (left < -400) {
        setTitle(false);
      } else {
        setTitle(true);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeHydrate>
      <AnimatePresence mode="popLayout">
        <div className="relative_modal_con">
          <motion.div ref={triggerrRef} className={`app_home_page modal ${layoutId}`}>
            <div>
              <Header />
              <div className="d-flex justify-content-center">
                <TimeButton />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center mb-3">
                <CloseBtn handleClick={handleClose} />
              </div>
              <div className="my-2 mx-5">
                {!title && (
                  <motion.h3
                    initial={{
                      x: '-400px',
                      y: '50px',
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: 'tween',
                      ease: 'easeInOut',
                    }}
                    className="small_project_title"
                  >
                    PAP Admin
                  </motion.h3>
                )}

                {title && <h3 className="small_project_title invisible">PAP Admin</h3>}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeIn',
                  delay: 0.3,
                }}
                className="d-flex"
              >
                <motion.div
                  ref={boxxRef}
                  className="app_projects_con d-flex gap-3 align-items-center gap-4"
                >
                  {title && (
                    <motion.h2 className="project_title">
                      <span>P</span>
                      AP Admin
                    </motion.h2>
                  )}

                  <ProjectImage img="/img/pap_1.png" />
                  <ProjectImage img="/img/pap_2.png" />
                  <ProjectImage img="/img/pap_3.png" />
                  <ProjectImage img="/img/pap_4.png" />
                </motion.div>
              </motion.div>
            </div>
            <div>
              <Footer />
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </SafeHydrate>
  );
};

export default ProjectModal;
