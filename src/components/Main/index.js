import React from 'react';

function Main(props) {
  const { currentArea } = props;
  return (
    <main>
      {currentArea.component}
    </main>
  );
}

export default Main;