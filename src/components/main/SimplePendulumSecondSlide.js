import React from 'react';
import '../styles/SimplePendulumSecondSlide.css';
import Blank from '../../resources/Blank.jpg';
import penduleSimpleForces from '../../resources/penduleSimpleForces.png';

const SimplePendulumFirstSlide = () => (
    <div className="spend-container-2">
        <p className="first-p">L'objet est soumis à son poids <strong>p </strong>, 
        à la tension du fil <strong>T</strong>, à la force des frottements 
        de l'air <strong>f </strong>et à la poussée d'Archimède <strong>II</strong>.</p>
        <p className="snd-p">Le travail de la tension <strong>T </strong> du 
        fil est nul car cette force est perpendiculaire à chaque instant au 
        vecteur déplacement.</p>
        <figure>
            <img src={penduleSimpleForces} alt="Pendule simple" />
            <figcaption>Les forces exercées sur le pendule simple sont la tension 
                du fil <strong>T </strong>et le poids <strong>P </strong> (si on 
                néglige la force de frottement et la poussée d'Archimède).</figcaption>
        </figure>
    </div>
);

export default SimplePendulumFirstSlide;