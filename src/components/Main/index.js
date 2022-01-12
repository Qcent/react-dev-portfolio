import React from 'react';

import { Transition } from "react-transition-group";

//Main components
// import ConstructionCard from '../ConstructionCard';
import AboutMe from '../AboutMe';
import Resume from '../Resume';
import ContactForm from '../ContactForm';
import Portfolio from '../Portfolio'

function Main(props) {
  const { currentArea } = props;

  return (
    <>
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
      <main>
        <Transition in={currentArea.name === 'About Me'} timeout={0}>
          {currentArea.name === 'About Me' ? state => (<AboutMe state={state} />) : <></>}
        </Transition>
        <Transition in={currentArea.name === 'Portfolio'} timeout={0}>
          {currentArea.name === 'Portfolio' ? state => (<Portfolio state={state} />) : <></>}
        </Transition>
        <Transition in={currentArea.name === 'Contact'} timeout={0}>
          {currentArea.name === 'Contact' ? state => (<ContactForm state={state} />) : <></>}
        </Transition>
        <Transition in={currentArea.name === 'Resume'} timeout={0}>
          {currentArea.name === 'Resume' ? state => (<Resume state={state} />) : <></>}
        </Transition>
        {setTimeout(() => { document.querySelector('#root').style.overflowY = 'visible' }, 550) ? '' : ''}
      </main>
    </>
  );
}

export default Main;