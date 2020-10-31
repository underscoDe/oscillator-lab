import React from 'react';
import '../styles/SummarySlide.css';

const SummarySlide = () => (
    <div className="sum-container">
        <h2>Sommaire</h2>
        <ol className="gradient-list">
            <li>Définition d'un oscillateur mécanique</li>
            <li>Type d'oscillateurs : Le pendule élastique</li>
            <li>Type d'oscillateurs : Le pendule simple</li>
        </ol>
    </div>
);

export default SummarySlide;