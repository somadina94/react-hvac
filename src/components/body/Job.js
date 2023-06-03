import classes from './Job.module.css';
import { companyName } from '../../config';

const Job = () => {
    return (
        <section className={classes.tasks}>
            <div className={classes.content}>
                <h2>HVAC Repair, Heating and Cooling & HVAC Service</h2>
                <p>
                    {companyName} is a premier HVAC company. We offer a range of heating, cooling, and Indoor Air
                    Quality (IAQ) solutions for home and business owners. Our certified HVAC technicians receive
                    continuous training so we can provide you with up-to-date information, along with the latest
                    technology. Our team has extensive knowledge and expertise to install, replace, and repair a variety
                    of heating and air conditioning systems, regardless if the unit is powered by electric, gas, or
                    geothermal energy. Contact us today for expert HVAC service.
                </p>
            </div>
            <div className={classes.content}>
                <h2>Air Conditioning (AC) Service</h2>
                <p>
                    Stay cool on the hottest days. The technicians at {companyName} provide air conditioning
                    installation, A/C service, and repair. Contact us to schedule an appointment.
                </p>
                <ul>
                    <li>Air Conditioning Repair</li>
                    <li>Air Conditioning Maintenance and Tune-Ups</li>
                    <li>New Air Conditioning System Installation</li>
                    <li>Ductless Air Conditioning Installation</li>
                    <li>Heat Pump Installation</li>
                </ul>
            </div>
            <div className={classes.content}>
                <h2>Heating & Furnace Service</h2>
                <p>
                    When the nights get cool, contact {companyName} for furnace and heat pump installation, maintenance
                    and repair. Schedule an appointment today for year-round indoor comfort.
                </p>
                <ul>
                    <li>Heating System Repair</li>
                    <li>Heating System Maintenance and Tune-Ups</li>
                    <li>New Heating System Installation</li>
                    <li>Heat Pump Installation</li>
                </ul>
            </div>
            <div className={classes.content}>
                <h2>Indoor Air Quality, Ductwork & Ventilation Service</h2>
                <p>
                    Whether you need ventilation cleaned or an entire air purification system replaced, contact the
                    experts at {companyName} for indoor air quality service and solutions.
                </p>
                <ul>
                    <li>MERV 13 Air Filter Replacement</li>
                    <li>Air Purification System Repair</li>
                    <li>Air Purification System Maintenance and Tune-Ups</li>
                    <li>New Air Purification System Installation</li>
                    <li>Attic Insulation Installation & Service</li>
                    <li>Duct Cleaning & Sealing</li>
                    <li>Humidifier System Repair</li>
                    <li>New Humidifier System Installation</li>
                    <li>UV Lights & Lamps</li>
                    <li>Ventilation</li>
                </ul>
            </div>
            <div className={classes.content}>
                <p>
                    Our HVAC company is a Trane Comfort Specialist. We also repair, maintain, and install Rheem and
                    Ameristar air conditioners and furnaces. Contact us for 24-hour HVAC repair or for a free
                    installation estimate. We're here to help!
                </p>
            </div>
        </section>
    );
};

export default Job;
