import { AboutUs, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from "./container";
import { Navbar } from "./components";

import './App.css';


const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    );
};

export default App;