import React from 'react';
import '../styles/DefinitionSlide.css';
import OscillatorExamples from '../../resources/OscillatorsExamples.png';

const DefinitionSlide = () => (
    <div className="def-container">
        <div className="def">
            <h2>Définition</h2>
            <p>On appelle <span>oscillateur</span> 
                (ou système oscillant) un système 
                pouvant évoluer, du fait de ses caractéristiques 
                propres, de façon périodique et alternative autour
                d'une position d'équilibre.</p>
        </div>
        <div className="ex">
            <h3>Exemples</h3>
            <ul>
                <li>Une balançoire</li>
                <li>Un pendule pesant</li>
                <li>L'amortisseur d'une voiture</li>
            </ul>
        </div>
        <figure>
            <img src={OscillatorExamples} alt="Exemples d'oscillateurs" />
            <figcaption>Exemples illustrés d'oscillateurs mécaniques</figcaption>
        </figure>
        <p className="note"><span>Note:</span> Il existe plusieurs systèmes d'oscillateurs mécaniques dont celui du
            <span>pendule élastique</span> et du <span>pendule simple.</span></p>
    </div>
);

export default DefinitionSlide;