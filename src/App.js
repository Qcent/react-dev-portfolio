import logo from './logo.svg';
import './App.css';

import Header from './compoents/Header';
import Main from './compoents/Main';
import Footer from './compoents/Footer';

function App() {
    return (<>
        <Header currentCategory={"About Me"} />
        <Main />
        <Footer />

        <div className="App" >
            <section className="App-header" >
                <img src={logo}
                    className="App-logo"
                    alt="logo" />
                < p > Edit < code > src / App.js </code> and save to reload. </p>
                <a className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Learn React </a>
            </section>
        </div>

    </>
    );
}

export default App;