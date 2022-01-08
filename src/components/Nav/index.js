import React from 'react';

function Nav(props) {
  const {
    areas = [],
    setCurrentArea,
    currentArea
  } = props;


  return (
    <nav>
      <ul>
        {areas.map((area) => (
          <li
            className={` ${currentArea.name === area.name && 'navActive'}`}
            key={area.name}
          >
            <a onClick={() => { setCurrentArea(area); }} >
              {area.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;