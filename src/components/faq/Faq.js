import classes from './Faq.module.css';

const Faq = () => {
    return (
        <section className={classes.faq}>
            <h2 className={classes.heading}>Frequently Asked Questions</h2>
            <div className={classes.content}>
                <h2>What are the different types of furnaces?</h2>
                <p>
                    The team at AG HVAC Services can install, maintain, and repair four primary types of furnaces for
                    our clients. These include natural gas furnaces, oil furnaces, electric furnaces, and propane
                    furnaces.
                </p>
            </div>
            <div className={classes.content}>
                <h2>Why is my burner flame yellow instead of blue?</h2>
                <p>
                    A properly functioning burner should emit a blue flame. A yellow flame signifies a dirty burner and
                    inefficient combustion. In most cases, cleaning the burner will resolve the issue, and cleaning them
                    once a year during an annual maintenance visit should prevent the problem from recurring.
                </p>
            </div>
            <div className={classes.content}>
                <h2>Do I need to hire an HVAC technician to perform maintenance?</h2>
                <p>
                    While you can clean and inspect your system yourself, it is always best to hire a professional to
                    perform any maintenance, adjustments, or repairs. Furnaces are complex machines that require
                    significant skill and expertise to maintain properly. If you make a mistake, you could injure
                    yourself, create a fire hazard, or facilitate a toxic gas emission into your home.
                </p>
            </div>
            <div className={classes.content}>
                <h2>Should I seal air leaks in my home?</h2>
                <p>
                    Absolutely! Those air leaks won't increase ventilation; the leaks in masonry, siding, crawl spaces,
                    and roofing materials will merely ensure your treated indoor air escapes your home. Failing to seal
                    leaks and insulation gaps makes your furnace and air conditioner work harder to keep you
                    comfortable. This increases wear and tear on the systems, increases your utility bills, and
                    increases your long-term repair and replacement costs.
                </p>
            </div>
            <div className={classes.content}>
                <h2>How often should I change my air filter?</h2>
                <p>
                    Thick air filters should be changed every 90 days, while thinner filters may need to be changed
                    every 30 to 60 days. How often you need to change them varies from home to home, and whether you
                    have pets, allergies, dust, pollen, etc., in the air. It would be best to inspect your filters every
                    month to determine the best schedule for your home.
                </p>
            </div>
        </section>
    );
};

export default Faq;
