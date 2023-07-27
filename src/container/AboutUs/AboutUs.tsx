import './AboutUs.css';

const AboutUs = () => (
    <section className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">

                <h1 className="headtext__cormorant">About Us</h1>
                
                <p className="p__about__us">In our restaurant you can enjoy excellent food, a rich selection of drinks and a relaxing atmosphere, whether you come for a romantic dinner for two, a family lunch or a business meeting.</p>
                
                <button type="button" className="custom__button"><a target='_blank' rel="noreferrer" href='https://www.facebook.com/galerijaodzaci?locale=sr_RS'>Know More</a></button>
            </div>

            <div className="app__aboutus-content_knife flex__center">         
            </div>

            <div className="app__aboutus-content_history">
                
                <h1 className="headtext__cormorant">Our History</h1>
                
                <p className="p__about__us">Restaurant build with love and care, located in Vojvodina,Serbia,We exist for three decades and many many more years to come.</p>
                
                <button type="button" className="custom__button"><a target='_blank' rel="noreferrer" href='https://www.facebook.com/galerijaodzaci?locale=sr_RS'>Know More</a></button>
            </div>
        </div>
    </section>
);

export default AboutUs;
