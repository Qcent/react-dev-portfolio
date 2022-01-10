import React from 'react';
import AreaAnimations from '../AreaAnimation';

function Resume(props) {
  return (
    <section id='Resume'>
      <div className='section-title'
        style={{
          ...AreaAnimations.defaultStyle,
          ...AreaAnimations.transitionStyles.title[props.state]
        }}>
        <h2><span className="spinner-effect">R</span>esu<span className="spinner-effect spin-3d delay">m</span>e</h2>
      </div>
      <div className='section-content'
        style={{
          ...AreaAnimations.defaultStyle,
          ...AreaAnimations.transitionStyles.content[props.state]
        }}>
        <h3>
          Download my <a href='Dave_Quinn-Resume.pdf' className='resume-link' target="_blank" rel="noreferrer">
            Resume</a> in .pdf format.
        </h3><br />
        <h3>Front-End Proficiencies</h3>
        <ul className='proficiencies'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript/jQuery</li>
          <li>BootStrap</li>
          <li>React/JSX</li>
        </ul>
        <br />
        <h3>Back-End Proficiencies</h3>
        <ul className='proficiencies'>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;