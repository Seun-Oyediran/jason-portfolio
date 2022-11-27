import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Footer, Header, TimeButton } from '../../components';
import { CloseBtn } from '../../components/buttons';
import ProjectImage from '../../components/projects/ProjectImage';
import { projectsObject } from '../../utils';
import { MobileProjects } from '../../components/projects/mobile';

gsap.registerPlugin(ScrollTrigger);

type IData = ReturnType<() => typeof projectsObject.pap>;
type ID = keyof ReturnType<() => typeof projectsObject>;

function SafeHydrate({ children }: { children: any }) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

const Project = () => {
  const [title, setTitle] = useState(true);
  const [pageData, setPageData] = useState(projectsObject.pap);
  const router = useRouter();
  const id = router.query?.id as ID;

  const boxxRef = useRef<HTMLDivElement>(null);
  const triggerrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = boxxRef?.current;
      if (element === null) return;

      gsap.fromTo(
        element,
        {
          x: window.innerWidth - window.innerWidth / 2,
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

  useEffect(() => {
    if (id) {
      const data: IData | undefined = projectsObject[id];
      if (data) {
        setPageData(data);
      }
    }
  }, [id]);

  return (
    <SafeHydrate>
      <AnimatePresence mode="popLayout">
        <div className="relative_modal_con">
          <motion.div
            className="modal_bg"
            layoutId={`project_layout_${id}`}
            style={{ background: pageData.bg }}
          />
          <div className="relative_modal_con d-none d-md-block">
            <motion.div ref={triggerrRef} className="app_home_page modal">
              <div>
                <Header
                  className={id}
                  color={pageData.color}
                  secondaryColor={pageData.secondaryColor}
                />
                <div className="d-flex justify-content-center">
                  <TimeButton className={id} color={pageData.color} />
                </div>
              </div>
              <div className="">
                <div className="d-flex justify-content-center mb-4">
                  <CloseBtn
                    handleClick={() => {
                      router.back();
                    }}
                  />
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
                        color: pageData.titleColor,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: 'tween',
                        ease: 'easeInOut',
                      }}
                      className="small_project_title"
                    >
                      {pageData.firstLetter}
                      {pageData.title}
                    </motion.h3>
                  )}

                  {title && (
                    <h3 className="small_project_title invisible">
                      {' '}
                      {pageData.firstLetter}
                      {pageData.title}
                    </h3>
                  )}
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
                      <motion.h2 style={{ color: pageData.titleColor }} className="project_title">
                        <span>{pageData.firstLetter}</span>
                        {pageData.title}
                      </motion.h2>
                    )}

                    {pageData.images.map((item) => (
                      <ProjectImage img={item} key={item} />
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              <div>
                <Footer
                  className={id}
                  color={pageData.color}
                  secondaryColor={pageData.secondaryColor}
                  client={pageData.client}
                  date={pageData.date}
                  developedBy={pageData.developedBy}
                  role={pageData.role}
                  project
                  link={pageData.link}
                />
              </div>
            </motion.div>
          </div>

          <div className="relative_modal_con d-md-none">
            <motion.div className="app_home_page modal">
              <div>
                <Header
                  className={id}
                  color={pageData.color}
                  secondaryColor={pageData.secondaryColor}
                  borderColor={pageData?.footerBorder}
                />
                <div className="d-flex justify-content-center">
                  <TimeButton className={id} color={pageData.color} />
                </div>
              </div>

              <div className="">
                <MobileProjects data={pageData} />
              </div>
              <div>
                <Footer
                  className={id}
                  color={pageData.color}
                  secondaryColor={pageData.secondaryColor}
                  client={pageData.client}
                  date={pageData.date}
                  developedBy={pageData.developedBy}
                  role={pageData.role}
                  project
                  link={pageData.link}
                  borderColor={pageData?.footerBorder}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </SafeHydrate>
  );
};

export default Project;
