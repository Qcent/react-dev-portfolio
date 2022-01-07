import React, { useEffect } from 'react';
import Nav from '../Nav'

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

  return (
    <>
      <header className="flex-row px-1">
        <div class="header-name">
          <h1><span class="spinner-effect">D</span>ave <span class="spinner-effect spin-3d delay">Q</span>uinn</h1>
        </div>
        <Nav />
      </header>
      <div class="hero">
        <div class="head-shot" aria-label="A nice head shot of a young handsome gentleman"></div>
        <div class="hero-text">
          <span id="rock-on" aria-label="Rock On!"></span>
          <span class="rockin-effect one">I</span>&nbsp;
          <span class="rockin-effect two">Like</span>&nbsp;
          <span class="rockin-effect three">to</span>&nbsp;
          <span class="rockin-effect four">Code<span class="spinner-effect">!</span></span>

        </div>
      </div>
    </>
  );
}

export default Header;