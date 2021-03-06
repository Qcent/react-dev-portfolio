import React from 'react';

function Project(props) {
  const {
    id,
    url,
    repo,
    title,
    tech,
    description,
    norepo
  } = props.project

  return (
    <span className='project-wrapper'>
      <a className="project" id={id} target="_blank" rel="noreferrer"
        href={url}>
        <div className="overlay-effect"></div>
        <div className="name-tag">
          <h3>{title}</h3>
          <p>{tech}<br />{description}</p>
        </div>
      </a>
      <div className="git-link">
        <a href={repo} target="_blank" rel="noreferrer">
          {norepo ? "Sorry, No" : "GitHub"} Repository</a>
      </div>
    </span>
  );
}

export default Project;