import React from 'react';
import '../styles/ElasticPendulumSecondSlide.css';
import Blank from '../../resources/Blank.jpg';

const ElasticPendulumSecondSlide = () => (
    <div className="epend-container-2">
        <p className="first-p">Du fait de l'allongement ou du raccourcissement du ressort, le système 
            emmagasine de l'énergie potentielle élastique, d'expression : <span></span> 
            où <strong>k</strong> est la constante de raideur du ressort.
        </p>
        <p className="snd-p">Si tous les frottements peuvent être négligés, l'énergie mécanique du 
            pendule est constante : <span></span>
        </p>
        <p className="trd-p">L'énergie cinétique se transfome en énergie potentielle de pesanteur, 
            et réciproquement, l'énergie potentielle de la pesanteur se transforme 
            en énergie cinétique, au cours du mouvement.
        </p>
        <figure>
            <img src={Blank} alt="Energies" />
            <figcaption>
                Energie potentielle, cinétique et mécanique d'un pendule simple 
                ou d'un pendule élastique en <strong>absence</strong> de frottements.
            </figcaption>
        </figure>
    </div>
);

export default ElasticPendulumSecondSlide;