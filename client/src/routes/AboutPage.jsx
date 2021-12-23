import React from 'react';
import Header from '../components/Header';

export default function AboutPage(props) {
  return (
    <div className="about-page">
      <Header props={props} />
      <main>
        <h1 className="page-title">About</h1>
        <p><span>KTrials</span> was built with the purpose of enabling users to create, share, and take a variety of quizzes.
        Quizzes can range from common sense topics, entertainment, technology -- really, anything your mind can come up with. The quiz creation
        page walks you through the process of creating a quiz from scratch, and is capable of making single choice or multiple choice questions.</p>
        <p><span>This site is continuously being interated</span> upon and changes should be expected. Details about future updates can be found
        on the public github linked below (the icon). All of this was originally made as part of a project for General Assembly!</p>
      </main>
      <div>
        <div>
          <a href="https://github.com/Menthus123/KTrial" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/marvel-johnson/" target="_blank"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};