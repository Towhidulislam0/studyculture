import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CardData from '../data/card.json';

const Home = () => {

    let HomeCardData;
    if (CardData.length >= 3) {
        HomeCardData = CardData.slice(0, 3)
    } else {
        HomeCardData = CardData;
    }

    return (
        <section id="home">
            <div className="container py-5">
                <h1 className="heading">Welcome to <span className="color-primary heading">Study</span> <span className="color-secondary heading">Culture</span></h1>

                <div className="row">
                    {
                        HomeCardData.map(data => {
                            return (
                                <Card data={data} type="home" col="col-md-4" />
                            )
                        })
                    }
                </div>
                <Link to="/services" className="btn btn-custom w-100 fw-bolder py-4">Show our all courses</Link>
            </div>
        </section>
    );
};

export default Home;