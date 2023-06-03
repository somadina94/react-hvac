import classes from './Why.module.css';
import { companyName } from '../../config';

const Why = () => {
    return (
        <section className={classes.why}>
            <h2>Why choose {companyName} Services?</h2>
            <p>
                Frequently, air conditioner installation is done without any permits being pulled. Contractors are
                responsible for purchasing these permits upon installation of equipment according to the strict
                guidelines in the Mechanical code. Once installation is completed, an inspector from the city or county
                will come to your business to scrutinize the work of the contractor. All code violations and substandard
                work must be corrected by the contractor before the work can be approved. This approval is a critical
                protection that businesses should insist on when purchasing a new AC system in order to prevent
                unnecessary future issues.
            </p>
            <p>
                {companyName} Services regularly pulls the appropriate permits on all new installations. We are
                committed to delivering all new equipment under the most stringent guidelines with full compliance to
                all applicable regulations and codes. After completion of installation, our technician performs
                comprehensive checks of all new equipment with the purpose of ensuring that it is operating properly and
                is totally code compliant. We then make an appointment for the mechanical inspector to come to the
                commercial property to inspect our work.
            </p>
            <p>
                Work with the commercial AC replacement company who cares about doing jobs right. {companyName} Services
                does work according to code and has a reputation as the leading air conditioning contractor. Contact the
                HVAC experts today!
            </p>
        </section>
    );
};

export default Why;
