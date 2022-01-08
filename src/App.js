import React, { useState } from 'react';
import './App.css';

import Header from './compoents/Header';
import Main from './compoents/Main';
import Footer from './compoents/Footer';

function App() {

    const [areas] = useState([
        { name: 'About Me', description: 'card about me', },
        { name: 'Portfolio', description: 'A place to show off my web development work', },
        { name: 'Contact', description: 'Give the users a form to send me a message', },
        { name: 'Resume', description: "If you download my resume i'll list you my proficeiencies", },
    ]);

    const [currentArea, setCurrentArea] = useState(areas[0]);

    return (<>
        <Header
            areas={areas}
            setCurrentArea={setCurrentArea}
            currentArea={currentArea} />
        <Main />
        <Footer />
    </>
    );
}

export default App;