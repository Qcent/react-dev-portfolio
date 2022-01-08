import React, { useState } from 'react';
import './App.css';

//ROOT components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//Main components
import ConstructionCard from './components/ConstructionCard';
import AboutMe from './components/AboutMe'

function App() {

    const [areas] = useState([
        {
            name: 'About Me', description: 'card about me',
            component: <AboutMe />
        },
        {
            name: 'Portfolio', description: 'A place to show off my web development work',
            component: <ConstructionCard />
        },
        {
            name: 'Contact', description: 'Give the users a form to send me a message',
            component: <ConstructionCard />
        },
        {
            name: 'Resume', description: "If you download my resume i'll list you my proficeiencies",
            component: <ConstructionCard />
        },
    ]);

    const [currentArea, setCurrentArea] = useState(areas[0]);

    return (<>
        <Header
            areas={areas}
            setCurrentArea={setCurrentArea}
            currentArea={currentArea} />
        <Main currentArea={currentArea} />
        <Footer />
    </>
    );
}

export default App;
