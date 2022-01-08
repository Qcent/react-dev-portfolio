import React from 'react';
import logo from '../../logo.svg';

function ConstructionCard() {
  return (
    <div className="App" >
      <section className="App-header" >
        <p>< code > Section Under Construction </code> </p>
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
  );
}

export default ConstructionCard;