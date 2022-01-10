import React from 'react';

function Project(props) {
  const {
    id,
    url,
    repo,
    title,
    tech
  } = props.project

  return (
    <span className='project-wrapper'>
      <a className="project" id={id} target="_blank"
        href={url}>
        <div className="overlay-effect"></div>
        <div className="name-tag">
          <h3>{title}</h3>
          <p>{tech}</p>
        </div>
      </a>
      <div className="git-link"><a href={repo} target="_blank">GitHub Repository</a></div>
    </span>

  );
}

export default Project;