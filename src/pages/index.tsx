import React, {
  Fragment, useEffect, useRef, useState,
} from 'react';
import type { NextPage } from 'next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import {
  Footer, Header, MetaData, ProjectCard, TimeButton,
} from '../components';
import { projects, workshop } from '../utils';
import { MobileHome } from '../components/shared/mobile';

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
    <Fragment>
      <MetaData />

      <SafeHydrate>
        <div className="d-none d-md-block">
          <div ref={triggerRef} className="app_home_page">
            <div>
              <Header />
              <div className="d-flex justify-content-center">
                <TimeButton />
              </div>
            </div>
            <div className="">
              <div className="d-flex">
                <div ref={boxRef} className="app_projects_con d-flex gap-3 align-items-center">
                  <h3 className={active === 'projects' ? 'big' : ''}>
                    Projects (
                    {projects.length}
                    )
                  </h3>

                  {projects.map((item) => (
                    <Link key={item.id} href={`/project/${item.name}`}>
                      <a href={`/project/${item.name}`}>
                        <ProjectCard img={item.image} layoutId={`project_layout_${item.name}`} />
                      </a>
                    </Link>
                  ))}

                  <h3 className={active === 'workshop' ? 'big' : ''} ref={workshopRef}>
                    Workshop (
                    {workshop.length}
                    )
                  </h3>
                  {workshop.map((item) => (
                    <Link key={item.id} href={`/workshop/${item.name}`}>
                      <a href={`/workshop/${item.name}`}>
                        <ProjectCard img={item.image} layoutId={`project_workshop_${item.name}`} />
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Footer />
            </div>
            {/* <WelcomeScreen /> */}
          </div>
        </div>

        <div className="d-md-none">
          <MobileHome />
        </div>
      </SafeHydrate>
    </Fragment>
  );
};

export default Home;
