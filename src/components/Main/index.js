import React, { useState } from 'react';

import { Transition } from "react-transition-group";

//Main components
import ConstructionCard from '../ConstructionCard';
import AboutMe from '../AboutMe';
import Resume from '../Resume';
import ContactForm from '../ContactForm';
import Portfolio from '../Portfolio'

function Main(props) {
  const { currentArea } = props;

  return (
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
    </main>
  );
}

export default Main;