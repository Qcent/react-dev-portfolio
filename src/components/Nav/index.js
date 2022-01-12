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
            <span onClick={() => { setCurrentArea(area); document.querySelector('#root').style.overflowY = 'hidden' }} >
              {area.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;