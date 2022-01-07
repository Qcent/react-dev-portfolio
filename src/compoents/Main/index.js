import React from 'react';
import logo from '../../logo.svg';

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
      <div className="App" >
        <section className="App-header" >
          <p>< code > Portfolio Under Construction </code> </p>
          <img src={logo}
            className="App-logo"
            alt="logo" />
          < p > come back soon. </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" >
            Learn React </a>
        </section>
      </div>
    </main>
  );
}

export default Main;