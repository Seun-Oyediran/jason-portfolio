import React from 'react';
import type { NextPage } from 'next';
import {
  Footer, Header, ProjectCard, TimeButton,
} from '../components';

const Home: NextPage = () => {
  return (
    <div className="app_home_page">
      <div>
        <Header />
        <div className="d-flex justify-content-center">
          <TimeButton />
        </div>
      </div>
      <div>
        <div className="app_projects_con d-flex gap-3 justify-content-end align-items-center">
          <h3 className="big">Projects (3)</h3>
          <ProjectCard img="/img/project_1.png" />
          <ProjectCard img="/img/project_2.png" />
          <ProjectCard img="/img/project_3.png" />
          <h3>Workshop (10)</h3>
          <ProjectCard img="/img/project_1.png" />
          <ProjectCard img="/img/project_2.png" />
          <ProjectCard img="/img/project_3.png" />
          <ProjectCard img="/img/project_1.png" />
          <ProjectCard img="/img/project_2.png" />
          <ProjectCard img="/img/project_3.png" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
      {/* <WelcomeScreen /> */}
    </div>
  );
};

export default Home;
