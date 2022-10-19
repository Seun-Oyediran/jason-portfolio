import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Footer, Header, RenderIf, TimeButton,
} from '../../components';
import { CloseBtn } from '../../components/buttons';
import { workshopObject } from '../../utils';

type IData = ReturnType<() => typeof workshopObject.apple>;
type ID = keyof ReturnType<() => typeof workshopObject>;

function SafeHydrate({ children }: { children: any }) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

const Workshop = () => {
  const router = useRouter();
  const [pageData, setPageData] = useState(workshopObject.apple);

  const id = router.query?.id as ID;

  useEffect(() => {
    if (id) {
      const data: IData | undefined = workshopObject[id];
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
            layoutId={`project_worksho_${id}`}
            style={{ background: '#F5F5F5' }}
          />
          <div className="relative_modal_con">
            <motion.div className="app_home_page modal">
              <div>
                <Header color="#1B1C1E" secondaryColor="#8D8D8D" />
                <div className="d-flex justify-content-center">
                  <TimeButton color="#1B1C1E" />
                </div>
                <div className="d-flex justify-content-center mt-3 mb-4">
                  <CloseBtn
                    handleClick={() => {
                      router.back();
                    }}
                  />
                </div>
              </div>
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

                        {/* <iframe
                          src="https://giphy.com/embed/P7PmvHY6kzAqY"
                          className="giphy-embed"
                          allowFullScreen
                          title="windows"
                          width="100%"
                          height="100%"
                        /> */}

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
                      <img src="/img/green_polygon.svg" alt="polygon" />
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
                    <div className="workshop_why_con">
                      <h5>Why</h5>
                      <p>{pageData?.why}</p>
                    </div>
                  </RenderIf>
                </div>
              </div>
              <div>
                <Footer
                  leftText="These include stuff I do in my spare time usually just designs I don’t get paid for (dopamine doesn’t count) Its clustered hope you can navigate through :)"
                  color="#1B1C1E"
                  secondaryColor="#8D8D8D"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </SafeHydrate>
  );
};

export default Workshop;
