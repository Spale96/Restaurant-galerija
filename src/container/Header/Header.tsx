
import './Header.css';

import { SubHeading } from '../../components';


const Header = () => {
    return (
        <header className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <SubHeading title="Chase the new flavour" />
                <h1 className="app__header-h1">The Key To Fine Dining</h1>
                <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to our restaurant, where top flavors and elegant ambience meet. Our kitchen is designed to satisfy even the most discerning tastes, and the interior is designed to provide the best experience for guests!</p>
                <button type="button" className="custom__button"><a rel="noreferrer" target='_blank' href='https://issuu.com/illydesign/docs/galerija-meni-12-2018?fbclid=IwAR0b5gZG5ZNAgM3E0QMijCo0wAS6_EU33_NfByU9or-yXg0jK6vDDy3jg8Y'>Explore Menu</a></button>
            </div>
        </header>
    );
};

export default Header;



