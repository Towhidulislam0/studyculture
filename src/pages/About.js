import React from 'react';
import prfile from "../images/profile.png";

const About = () => {
    return (
        <section id="About">
            <div className="container">
                <h1 className="color-primary heading">About <span className="color-secondary heading"> Us
                </span></h1>
                <div className="d-flex justify-content-between justify-content-center row">
                    <div className="col">
                        <div>
                            <img className=" w-100 " src={prfile} alt="" />
                        </div>
                    </div>
                    <div className=" About-text col">
                        <small className="">Cultural studies is a field of theoretically, politically, and empirically engaged cultural analysis that concentrates upon the political dynamics of contemporary culture, its historical foundations, defining traits, conflicts, and contingencies. Cultural studies researchers generally investigate how cultural practices relate to wider systems of power associated with or operating through social phenomena, such as ideology, class structures, national formations, ethnicity, sexual orientation, gender, and generation. Cultural studies views cultures not as fixed, bounded, stable, and discrete entities, but rather as constantly interacting and changing sets of practices and processes.[1] The field of cultural studies encompasses a range of theoretical and methodological perspectives and practices.</small>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;