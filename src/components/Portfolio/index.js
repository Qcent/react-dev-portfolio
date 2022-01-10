import React from 'react';
import Project from '../Project';

import projects from './projects-list';
import '../../assets/css/project-images.css';

import AreaAnimations from '../AreaAnimation';

function Portfolio(props) {
  return (
    <section id='Portfolio'>
      <div className='section-title'
        style={{
          ...AreaAnimations.defaultStyle,
          ...AreaAnimations.transitionStyles.title[props.state]
        }}>
        <h2>
          D<span className="spinner-effect reverse">e</span>v&nbsp;
          <span className="spinner-effect spin-3d delay">W</span>or<span className="spinner-effect">k</span>
        </h2>
      </div>
      <div className='section-content' id='work-section'
        style={{
          ...AreaAnimations.defaultStyle,
          ...AreaAnimations.transitionStyles.content[props.state]
        }}>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;