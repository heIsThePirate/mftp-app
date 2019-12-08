import  React from 'react';
import PropTypes from 'prop-types';
import './CardItem.styles.scss';
import Togglebutton from '../toggleButton/Togglebutton.component';

const CardItem = (props) => {
    const { userName, companyName, DOI, TOI, setReminder } = props.value;
    return (
        <div className='card'>
            <h4>{ companyName }</h4>
            <h4>{ userName }</h4>
            <h4>{ DOI }</h4>
            <h4>{ TOI }</h4>
            <Togglebutton value={ setReminder } />
        </div>
    );
};

CardItem.propTypes = {
    userName: PropTypes.string,
    companyName:PropTypes.string,
    DOI:PropTypes.string,
    TOI:PropTypes.string,
    setReminder:  Boolean,
};

export default CardItem;