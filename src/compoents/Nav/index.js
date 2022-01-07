import React from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;


  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#my-work">Work</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
        <li>
          <a href="srt-resume.html">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;