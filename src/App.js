import './App.css';

import Header from './compoents/Header';
import Main from './compoents/Main';
import Footer from './compoents/Footer';

function App() {
    return (<>
        <Header currentCategory={"About Me"} />
        <Main />
        <Footer />
    </>
    );
}

export default App;