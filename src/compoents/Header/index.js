import React, { useEffect } from 'react';
import Nav from '../Nav'

function Header(props) {
  const {
    areas = [],
    setCurrentArea,
    currentArea
  } = props;

  useEffect(() => {
    document.title = currentArea.name;
  }, [currentArea]);

  return (
    <>
      <header className="flex-row px-1">
        <div className="header-name">
          <h1><span className="spinner-effect">D</span>ave <span className="spinner-effect spin-3d delay">Q</span>uinn</h1>
        </div>
        <Nav
          areas={areas}
          setCurrentArea={setCurrentArea}
          currentArea={currentArea} />
      </header>
      <div className="hero">
        <div className="head-shot" aria-label="A nice head shot of a young handsome gentleman"></div>
        <div className="hero-text">
          <span id="rock-on" aria-label="Rock On!"></span>
          <span className="rockin-effect one">I</span>&nbsp;
          <span className="rockin-effect two">Like</span>&nbsp;
          <span className="rockin-effect three">to</span>&nbsp;
          <span className="rockin-effect four">Code<span className="spinner-effect">!</span></span>
        </div>
      </div>
    </>
  );
}

export default Header;