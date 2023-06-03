import classes from './Spinner.module.css';

import { Spinner as Spin } from 'react-bootstrap';

const Spinner = () => {
    return (
        <div className={classes.backdrop}>
            <Spin animation="border" size="lg" variant="primary" style={{ width: '5rem', height: '5rem' }} />
        </div>
    );
};

export default Spinner;
