import React, { Component } from 'react';

import './homepage.styles.scss';

class Homepage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <Logo />
                    <div>MFTP</div>
                </div>
            </div>
        );
    };
};

export default Homepage;