import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Gamer } from '../../assets/gamer.svg';
import './styles.css';


const Home = () => {
    return (
        <div className="home-container">
            <div className="home-text">
                <h1 className="home-text-title">
                    Quais os jogos que a galera mais curte?
                </h1>
                <h3 className="home-text-subtitle">
                    Clique no botão abaixo e saiba quais são os 
                    jogos mais votados pelos gamers.
                </h3>
                <Link to="/records">
                    <strong>
                        ACESSE E CONFIRA
                    </strong>
                    <span>
                        <Arrow />
                    </span>
                </Link>

            </div>
            <Gamer className="home-image"/>
        </div>
    );
};

export default Home;