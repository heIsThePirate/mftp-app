import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './logo.styles.scss';
import metakgp_logo from './metakgp_logo.png';

class Logo extends Component {
    render() {
        return (
            <div className='ma4 mt0'>
                <Tilt className="Tilt-inner br2 shadow-2" options={{ max: 55}} style={{ height:150, width: 150 }}>
                    <div className="Tilt-inner">
                        <img style={{ paddingTop: '5px', }} alt='logo' src={metakgp_logo} />
                    </div>
                </Tilt>
            </div>
        );
    };
};

export default Logo;