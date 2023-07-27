import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
    <footer className="app__footer section__padding" id="login">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__footer">Vidovdanska 29, Odzaci, Serbia</p>
                <p className="p__footer">025/5744600</p>
            </div>

            <div className="app__footer-links_logo">
                <h2 className=''>GALERIJA</h2>
                <p className="p__footer">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon" />
                <div className="app__footer-links_icons">
                    <a target='_blank' rel="noreferrer" href="https://www.facebook.com/galerijaodzaci/?locale=sr_RS"><FiFacebook /></a>
                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/galerijaodzaci/"><FiInstagram /></a>
                </div>
            </div>

            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__footer">Monday-Friday:</p>
                <p className="p__footer">08:00 am - 00:00 am</p>
                <p className="p__footer">Saturday-Sunday:</p>
                <p className="p__footer">08:00 am - 00:00 am</p>
            </div>
        </div>

        <div className="footer__copyright">
            <p className="p__footer">2021 Galerija. All Rights reserved.</p>
        </div>

    </footer>
);

export default Footer;
