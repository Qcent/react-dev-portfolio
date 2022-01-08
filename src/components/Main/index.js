import React from 'react';

function Main(props) {
  const { currentArea } = props;
  return (
    <main>
      {currentArea.description}
      {currentArea.component}
    </main>
  );
}

export default Main;