import React from 'react';
import '../styles/ElasticPendulumFirstSlide.css';

const ElasticPendulumFirstSlide = () => (
    <div className="epend-container">
        <p>Un pendule élastique est composé d'un objet de masse <strong>m</strong>
             accroché à l'extrémité d'un ressort de constante de raideur <strong>k</strong>.</p>
        <p>La position de l'objet est repérée par l'abscisse <strong>x</strong> 
            du ressort. En position d'équilibre, lorsque le ressort n'est ni étiré, 
            ni comprimé, son abscisse est nulle, il est en équilibre.</p>
        <figure>
            <img src="" alt="Elastic pendulum systems" />
            <figcaption>Différents états du pendule élastique</figcaption>
        </figure>
        <p>Du fait de l'allongement ou du raccourcissement du ressort, le système 
            emmagasine de l'énergie potentielle élastique, d'expression :
        </p>
    </div>
);

export default ElasticPendulumFirstSlide;