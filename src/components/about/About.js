import classes from './About.module.css';
import ceo from '../../images/ceo.jpg';
import { name } from '../../config';
import { companyName } from '../../config';

const About = () => {
    return (
        <section className={classes.about}>
            <div className={classes.content}>
                <h2>Full-Service HVAC Installation and maintenance Company</h2>
                <p>
                    At {companyName}, we understand that the world of HVAC can become complicated. Our goal is to be
                    your one-stop contractor for everything related to your heating and cooling needs. We offer a full
                    range of services:
                </p>
                <ul>
                    <li>Replacements, retrofits and new installation</li>
                    <li>Repair, service and peak performance tests Air quality solutions</li>
                </ul>
            </div>
            <div className={classes.content}>
                <h2>A Leader Among HVAC Contractors</h2>
                <p>
                    You can rely on us to uphold a high standard of excellence for service, repair, installations, and
                    customer service. Our technicians are certified so they have been trained to install and service all
                    types of HVAC equipments. We are a certified air balancing and peak performance testing contractor
                    which means we have the expertise to balance the air flow in your home or business and to ensure you
                    are receiving the optimal comfort and efficiency from your equipment.
                </p>
            </div>
            <div className={classes['flex-content']}>
                <div className={classes['content-inner']}>
                    <h2>Residential:</h2>
                    <p>
                        Your home is a refuge where you relax and unwind. The last thing you want to worry about is your
                        air conditioner or heat pump. We offer around-the-clock coverage for emergency repairs, and we
                        schedule installations and routine service calls around your schedule, not ours.
                    </p>
                </div>
                <div className={classes['content-inner']}>
                    <h2>Commercial:</h2>
                    <p>
                        An effective heating and cooling system not only affects your employees and customers, it also
                        affects your bottom line. We have the expertise to complete your project on time, within budget,
                        and according to code. We complete repairs and service calls quickly and with minimal disruption
                        to your business.
                    </p>
                </div>
                <div className={classes['content-inner']}>
                    <h2>Integrated approach:</h2>
                    <p>
                        Our technician specialists understand that your comfort involves more than individual pieces of
                        equipment. We take a systems approach that ensures your heating, cooling, and ventilation
                        equipment work together to deliver efficient results and save you money on energy bills.
                    </p>
                </div>
            </div>
            <div className={classes.ceo}>
                <div className={classes.photo}>
                    <img src={ceo} alt="owner" />
                </div>
                <div className={classes.info}>
                    <p>Name: {name}</p>
                    <span>Role: Founder</span>
                </div>
            </div>
            <div className={classes.content}>
                <h2>A Tradition of Excellence</h2>
                <p>
                    Whatever needs you have in the heating and cooling arena, you want solid solutions, reliable
                    service, and quality products. When Engr. {name} founded our company in 2006, he made a commitment
                    to deliver service and value to each customer. Seventeen year later, he still uphold those
                    time-honored principles. Still a family-owned company, which renews the commitment to provide
                    personalized service at competitive rates. Give us a call today to experience why we stand out among
                    HVAC contractors.
                </p>
            </div>
        </section>
    );
};

export default About;
