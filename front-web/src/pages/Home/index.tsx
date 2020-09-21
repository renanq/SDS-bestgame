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
                    Vote no seu jogo preferido e saiba quais são os 
                    jogos mais votados pelos gamers.
                </h3>

                <div className="button-container">
                    <Link to="/vote">
                        <strong>
                            PARTICIPE
                        </strong>
                        <span>
                            <Arrow />
                        </span>
                    </Link> 

                    <Link to="/records">
                        <strong>
                            RESULTADOS
                        </strong>
                        <span>
                            <Arrow />
                        </span>
                    </Link>
                    </div>
                </div>
            <Gamer className="home-image"/>
        </div>
    );
};

export default Home;