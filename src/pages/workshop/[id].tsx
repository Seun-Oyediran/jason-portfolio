import React, { Fragment, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Footer, Header, MetaData, RenderIf, TimeButton,
} from '../../components';
import { CloseBtn } from '../../components/buttons';
import { workshopObject } from '../../utils';
import { ArrowRight, Polygon } from '../../svg';
import { FooterItem } from '../../components/shared/mobile';
import routes from '../../routes';

const projectsOptions = ['apple', 'windows', 'rptrd'];

type IData = ReturnType<() => typeof workshopObject.apple>;
type ID = keyof ReturnType<() => typeof workshopObject>;

function SafeHydrate({ children }: { children: any }) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

const Workshop = () => {
  const router = useRouter();
  const [pageData, setPageData] = useState(workshopObject.apple);

  const id = router.query?.id as ID;

  const handleNext = () => {
    let index = projectsOptions.indexOf(id);

    if (index < 0) return;

    index += 1;

    if (index > projectsOptions.length - 1) {
      index = 0;
    }

    router.push(`${routes.workshop.path}/${projectsOptions[index]}`);
  };

  useEffect(() => {
    if (id) {
      const data: IData | undefined = workshopObject[id];
      if (data) {
        setPageData(data);
      }
    }
  }, [id]);

  return (
    <Fragment>
      <MetaData />

      <SafeHydrate>
        <AnimatePresence mode="popLayout">
          <div className="relative_modal_con">
            <motion.div
              className="modal_bg"
              layoutId={`project_worksho_${id}`}
              style={{ background: '#F5F5F5' }}
            />
            <div className="relative_modal_con">
              <motion.div className="app_home_page modal">
                <div>
                  <Header
                    color="#1B1C1E"
                    secondaryColor="#8D8D8D"
                    borderColor="rgba(27, 28, 30, 0.5)"
                  />
                  <div className="d-flex justify-content-center">
                    <TimeButton color="#1B1C1E" />
                  </div>
                  <div className="d-md-flex justify-content-center mt-3 mb-4 d-none">
                    <CloseBtn
                      handleClick={() => {
                        router.back();
                      }}
                    />
                  </div>
                </div>
                <div className="d-none d-md-block">
                  <div className="px-5">
                    <div className="d-flex justify-content-between align-items-center gap-5">
                      <div className="workshop_item_details">
                        <div className="pb-2">
                          <div className="item mt-4">
                            <h5>Role</h5>
                            <p>Tinkerer</p>
                          </div>
                          <div className="item mt-4">
                            <h5>Developed by</h5>
                            <p>Me</p>
                          </div>

                          <div className="item mt-4">
                            <h5>Date</h5>
                            <p>22</p>
                          </div>
                        </div>

                        <div>
                          <div className="big_hexagon_con mt-4">
                            <img src="/img/polygon.svg" className="polygon" alt="polygon" />

                            <iframe
                              src="https://giphy.com/embed/5hrTWkvO6dFodC8hnl"
                              className="giphy-embed"
                              allowFullScreen
                              title="spider-verse"
                              width="100%"
                              height="100%"
                            />
                          </div>
                        </div>
                        <div className="small_polygon_con d-flex justify-content-center mt-3">
                          <Polygon />
                        </div>
                      </div>

                      <div className="workshop_image_con">
                        <Image
                          src={pageData?.image}
                          alt="project"
                          loading="lazy"
                          layout="responsive"
                          width={711}
                          height={362}
                          objectFit="contain"
                        />
                      </div>

                      <RenderIf condition={!!pageData?.footerImg}>
                        <div className="align-self-end">
                          <img src={pageData?.footerImg} alt="footer" />
                        </div>
                      </RenderIf>

                      <RenderIf condition={!pageData?.footerImg}>
                        <div className="workshop_why_con d-none d-lg-block">
                          <h5>Why</h5>
                          <p>{pageData?.why}</p>
                        </div>
                      </RenderIf>
                    </div>
                  </div>
                </div>

                <div className="d-md-none workshop_mobile_container app_projects_mobile_layout px-3">
                  <h3 className="title mt-5 mb-3">{pageData?.mobileTitle}</h3>

                  <div className="d-flex justify-content-center pt-4">
                    <div className="project_details">
                      <div className="d-flex gap-3 justify-content-between mt-3">
                        <div className="flex_con">
                          <h4>Role</h4>
                          <p>{pageData?.role}</p>
                        </div>

                        <div className="flex_con">
                          <h4>Client</h4>
                          <p>{pageData?.client}</p>
                        </div>
                      </div>

                      <div className="d-flex gap-3 justify-content-between mt-3">
                        <div className="flex_con">
                          <h4>Developed by</h4>
                          <p>{pageData?.developedBy}</p>
                        </div>

                        <div className="flex_con">
                          <h4>Date</h4>
                          <p>{pageData?.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="img-con mt-5">
                    <img src={pageData?.mobileImg || pageData?.image} alt="" className="w-100" />
                  </div>

                  <RenderIf condition={!pageData?.footerImg}>
                    <div className="workshop_why_con mt-4">
                      <h5>Why</h5>
                      <p>{pageData?.why}</p>
                    </div>
                  </RenderIf>

                  <div className="about_footer_right_con mb-5 mt-5">
                    <div className="d-flex flex-column align-items-center">
                      <div className="big_hexagon_con mt-4 mb-3">
                        <img src="/img/polygon.svg" className="polygon" alt="polygon" />

                        <iframe
                          src="https://giphy.com/embed/5hrTWkvO6dFodC8hnl"
                          className="giphy-embed"
                          allowFullScreen
                          title="spider-verse"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <Polygon />
                    </div>
                  </div>

                  <div className="mt-4 action_buttons">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            router.back();
                          }}
                        >
                          Back
                        </button>
                      </div>

                      <div>
                        <button type="button" onClick={handleNext}>
                          Next Project
                          {' '}
                          <ArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <FooterItem
                      text="For collaborations or partnerships, send an email to jeriahudi@gmail.com"
                      className="about_footer_item dark"
                    />
                  </div>
                </div>

                <div>
                  <Footer
                    leftText="These include stuff I do in my spare time usually just designs I don’t get paid for (dopamine doesn’t count) Its clustered hope you can navigate through :)"
                    color="#1B1C1E"
                    secondaryColor="#8D8D8D"
                    borderColor="rgba(27, 28, 30, 0.5)"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </SafeHydrate>
    </Fragment>
  );
};

export default Workshop;
