import React from 'react';
import '../styles/SimplePendulumFirstSlide.css';
import Blank from '../../resources/Blank.jpg';

const SimplePendulumFirstSlide = () => (
    <div className="spend-container">
        <h2>Le pendule simple</h2>
        <p className="first-p">Un pendule pesant est un objet en oscillation dans un plan vertical 
        sous l'effet de la pesanteur. Il est modélisé par un pendule simple 
        qui est constitué d'un objet ponctuel G de masse m accroché à un fil 
        sans masse (de masse négligeable devant m) et de longueur l très 
        supérieure aux dimensions du solide.</p>
        <p className="snd-p">A l'équilibre, le fil est vertival. La position de G en mouvement 
            est repérée par l'angle @ entre le fil et sa position d'équilibre (
                écart ou abscisse angulaire).
        </p>
        <div className="figures">
            <figure>
                <img src={Blank} alt="Pendule simple" />
                <figcaption>Pendule simple en position d'équilibre.</figcaption>
            </figure>
            <figure>
                <img src={Blank} alt="Pendule simple" />
                <figcaption>Pendule simple dont la position est repérée par l'abscisse 
                    angulaire @
                </figcaption>
            </figure>
        </div>
    </div>
);

export default SimplePendulumFirstSlide;