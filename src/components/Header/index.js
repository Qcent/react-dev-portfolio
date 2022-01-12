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
    <header className="flex-row px-1">
      <div className="header-name">
        <h1><span className="spinner-effect">D</span>ave <span className="spinner-effect spin-3d delay">Q</span>uinn</h1>
      </div>
      <Nav
        areas={areas}
        setCurrentArea={setCurrentArea}
        currentArea={currentArea} />
    </header>
  );
}

export default Header;