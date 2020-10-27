import React, { Component } from 'react';
import './SummarySlide';
import '../styles/CourseSlide.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    goToChoice,
    showNextSlide,
    showPreviousSlide
} from '../../actions';

import SummarySlide from './SummarySlide';
import DefinitionSlide from './DefinitionSlide';
import ElasticPendulumFirstSlide from './ElasticPendulumFirstSlide';

class CourseSlide extends Component {
    render() {
        const { 
            goToChoice, 
            courseSlides,
            showNextSlide,
            showPreviousSlide
        } = this.props;

        return (
            <div className="cs-container">
                <div className="course-section">
                    {/*courseSlides === 1 && <SummarySlide />*/}
                    {/*courseSlides === 2 && <DefinitionSlide />*/}
                    <DefinitionSlide />
                </div>
                <div className="menu-section">
                    <div className='menu__buttons'>
                        <ul>
                            <li onClick={() => goToChoice()} className='learn__item'>
                                <FontAwesomeIcon icon='home' size='3x' className='liFa' />
                                <span className='cours__text'>Menu</span>
                            </li>
                            <li onClick={() => showNextSlide()} className='quiz__item'>
                                <FontAwesomeIcon icon='hand-point-right' size='3x' className='liFa' />
                                <span className='quiz__text'>Next</span>
                            </li>
                            <li onClick={() => showPreviousSlide()} className='quiz__item'>
                                <FontAwesomeIcon icon='hand-point-left' size='3x' className='liFa' />
                                <span className='quiz__text'>Prev</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    courseSlides: state.courseSlides
});

const mapDispatchToProps = {
    goToChoice,
    showNextSlide,
    showPreviousSlide
};
  
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(CourseSlide);
export default connectedComponent;
