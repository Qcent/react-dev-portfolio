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
      I am Nav Component
    </nav>
  );
}

export default Nav;