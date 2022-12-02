import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { TimeButton } from '..';
import { HomeButton, Footer, RenderIf } from '../..';
import { MobileProjectCard } from '../../projects/mobile';
import Header from '../Header';
import FooterItem from './FooterItem';

const Home = () => {
  const router = useRouter();

  return (
    <div className="app_home_page">
      <div>
        <Header />
        <RenderIf condition={!router?.query?.active}>
          <div className="d-flex justify-content-center">
            <TimeButton />
          </div>
        </RenderIf>
      </div>

      <RenderIf condition={!router?.query?.active}>
        <div className="d-md-none ">
          <div className="px-3 my-5">
            <div className="d-flex">
              <Link href="/">
                <a href="/" className="app__home__button__link">
                  <HomeButton active text="Home" />
                </a>
              </Link>
            </div>

            <div className="d-flex">
              <Link
                href={{
                  pathname: '/',
                  query: {
                    active: 'works',
                  },
                }}
              >
                <a href="/" className="app__home__button__link">
                  <HomeButton text="Works" value={3} />
                </a>
              </Link>
            </div>

            <div className="d-flex">
              <Link
                href={{
                  pathname: '/',
                  // query: {
                  //   active: 'workshop',
                  // },
                }}
              >
                <a href="/" className="app__home__button__link">
                  <HomeButton text="Workshop" value={5} />
                </a>
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <div className="px-3">
              <FooterItem text="An Interface designer with a love for anime, and working remotely. Cofounder of Huslow Tech. Available Nov. 2022" />
            </div>

            <div className="px-3 footer_item_border_top">
              <FooterItem text="Should have been a website with loads of animations, Showcasing mostly the devs skills, buttt. the budget didn’t so you get this. " />
            </div>
          </div>
        </div>
      </RenderIf>

      <RenderIf condition={router?.query?.active === 'works'}>
        <div className="d-md-none ">
          <div className="app__works__tab px-3">
            <HomeButton text="Works" value={3} active className="mt-0 mb-0" />

            <div className="app__works__selected__works">
              <div className="d-flex align-items-center gap-1">
                <div className="indicator" />
                <p>
                  SELECTED WORKS FROM
                  {' '}
                  <br />
                  THE YEAR 2022.
                  {' '}
                </p>
              </div>

              <p className="scroll__down my-5">
                SCROLL DOWN
                {' '}
                <br />
                FOR MORE
              </p>
            </div>

            <div className="app__works__content">
              <div className="d-flex justify-content-between">
                <div className="project__count">
                  <h4>2K22</h4>
                  <p>3 Projects</p>
                </div>

                <div className="d-flex flex-column gap-4">
                  <MobileProjectCard
                    number="01"
                    img="/img/mobile_project_1.svg"
                    href="/project/pap"
                  />
                  <MobileProjectCard
                    number="02"
                    img="/img/mobile_project_2.png"
                    href="/project/rptrd"
                  />
                  <MobileProjectCard
                    number="03"
                    img="/img/mobile_project_1.svg"
                    href="/project/tenaciti"
                  />
                </div>
              </div>
            </div>

            <div className="app__works__btn__con my-5">
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  onClick={() => {
                    router.back();
                  }}
                >
                  Back
                </button>
              </div>
            </div>

            <FooterItem
              text="For collaborations or partnerships, send an email to jeriahudi@gmail.com"
              className="about_footer_item"
            />
          </div>
        </div>
      </RenderIf>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
