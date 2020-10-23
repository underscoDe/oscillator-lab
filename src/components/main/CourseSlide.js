import React, { Component } from 'react';
import './SummarySlide';
import '../styles/CourseSlide.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { goToChoice } from '../../actions';
import SummarySlide from './SummarySlide';

class CourseSlide extends Component {
    render() {
        const { goToChoice } = this.props;

        return (
            <div className="cs-container">
                <div className="course-section">
                    <SummarySlide />
                </div>
                <div className="menu-section">
                    <div className='menu__buttons'>
                        <ul>
                            <li onClick={() => goToChoice()} className='learn__item'>
                                <FontAwesomeIcon icon='home' size='3x' className='liFa' />
                                <span className='cours__text'>Menu</span>
                            </li>
                            <li className='quiz__item'>
                                <FontAwesomeIcon icon='hand-point-right' size='3x' className='liFa' />
                                <span className='quiz__text'>Next</span>
                            </li>
                            <li className='quiz__item'>
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

const mapDispatchToProps = {
    goToChoice,
};
  
const connectedComponent = connect(null, mapDispatchToProps)(CourseSlide);
export default connectedComponent;
