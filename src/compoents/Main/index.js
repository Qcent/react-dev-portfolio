import React from 'react';

function Main(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  return (
    <main className="flex-row px-1">
      I am Main Section
    </main>
  );
}

export default Main;