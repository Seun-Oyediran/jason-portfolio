import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import {
  Footer, Header, ProjectCard, TimeButton,
} from '../components';

gsap.registerPlugin(ScrollTrigger);

function SafeHydrate({ children }: { children: any }) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

const Home: NextPage = () => {
  const [active, setActive] = useState<'projects' | 'workshop'>('projects');

  const boxRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const workshopRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = boxRef?.current;
      if (element === null) return;

      gsap.fromTo(
        element,
        {
          x: window.innerWidth - window.innerWidth / 2,
        },
        {
          x: -element.clientWidth + 30,
          scrollTrigger: {
            trigger: triggerRef.current,
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
      const left = workshopRef?.current?.getBoundingClientRect().left || 0;
      const halfViewport = window.innerWidth / 2 + 50;

      if (left > halfViewport) {
        setActive('projects');
      } else {
        setActive('workshop');
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeHydrate>
      <div ref={triggerRef} className="app_home_page">
        <div>
          <Header />
          <div className="d-flex justify-content-center">
            <TimeButton />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <div ref={boxRef} className="app_projects_con d-flex gap-3 align-items-center">
              <h3 className={active === 'projects' ? 'big' : ''}>Projects (3)</h3>

              <Link href="/project/pap">
                <a href="/project/pap">
                  <ProjectCard img="/img/pap_1.png" layoutId="project_layout_pap" />
                </a>
              </Link>

              <Link href="/project/rptrd">
                <a href="/project/rptrd">
                  <ProjectCard img="/img/project_2.png" layoutId="project_layout_rptrd" />
                </a>
              </Link>

              <Link href="/project/tenaciti">
                <a href="/project/tenaciti">
                  <ProjectCard img="/img/project_3.png" layoutId="project_layout_tenaciti" />
                </a>
              </Link>

              <h3 className={active === 'workshop' ? 'big' : ''} ref={workshopRef}>
                Workshop (10)
              </h3>
              <ProjectCard img="/img/project_1.png" />
              <ProjectCard img="/img/project_2.png" />
              <ProjectCard img="/img/project_3.png" />
              <ProjectCard img="/img/project_1.png" />
              <ProjectCard img="/img/project_2.png" />
              <ProjectCard img="/img/project_3.png" />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
        {/* <WelcomeScreen /> */}
      </div>

      {/* <Modal animation={false} fullscreen show={show}>
        <div className="relative_modal_con">
          <motion.div className="modal_bg" layoutId={modalData.layoutId} />
          <ProjectModal
            handleClose={() => {
              setShow(false);
              setModalData({ layoutId: '' });
            }}
            layoutId={modalData.layoutId}
          />
        </div>
      </Modal> */}
    </SafeHydrate>
  );
};

export default Home;
