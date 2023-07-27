import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';

import './SpecialMenu.css';


const SpecialMenu= ()  => (
    <section className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
            <SubHeading title="Menu that fits your palatte" />
            <h1 className="headtext__cormorant">Today&apos;s Special</h1>
        </div>

        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine  flex__center">
                <p className="app__specialMenu-menu_heading">Wine & Beer</p>
                <div className="app__specialMenu_menu_items">
                    {data.wines.map((wine, index) => (
                        <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                    ))}
                </div>
            </div>

            <div className="app__specialMenu-menu_img">
                <img src={images.menu} alt="menu__img" />
            </div>

            <div className="app__specialMenu-menu_cocktails  flex__center">
                <p className="app__specialMenu-menu_heading">Domestic Liquors</p>
                <div className="app__specialMenu_menu_items">
                    {data.domestic_liquor.map((liqour, index) => (
                        <MenuItem key={liqour.title + index} title={liqour.title} price={liqour.price} tags={liqour.tags} />
                    ))}
                </div>
            </div>
        </div>

        <div style={{ marginTop: '15px' }}>
            <button type="button" className="custom__button"><a target='_blank' rel="noreferrer" href='https://issuu.com/illydesign/docs/galerija-meni-12-2018?fbclid=IwAR0b5gZG5ZNAgM3E0QMijCo0wAS6_EU33_NfByU9or-yXg0jK6vDDy3jg8Y'>View More</a></button>
        </div>
    </section>
);

export default SpecialMenu;
