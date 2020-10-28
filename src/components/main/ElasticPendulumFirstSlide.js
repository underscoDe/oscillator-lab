import React from 'react';
import '../styles/ElasticPendulumFirstSlide.css';
import Blank from '../../resources/Blank.jpg';

const ElasticPendulumFirstSlide = () => (
    <div className="epend-container">
        <h2>Le pendule élastique</h2>
        <p className="first-p">Un pendule élastique est composé d'un objet de masse <strong>m </strong>
            accroché à l'extrémité d'un ressort de constante de raideur <strong>k</strong>.</p>
        <p className="snd-p">La position de l'objet est repérée par l'abscisse <strong>x </strong> 
            du ressort. En position d'équilibre, lorsque le ressort n'est ni étiré, 
            ni comprimé, son abscisse est nulle, il est en équilibre.</p>
        <figure>
            <img src={Blank} alt="Elastic pendulum systems" />
            <figcaption>Différents états du pendule élastique</figcaption>
        </figure>
    </div>
);

export default ElasticPendulumFirstSlide;