import React, { Component } from 'react';

import './homepage.styles.scss';
import CardItem from '../../components/cardItem/CardItem.component';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortList: [{
                userName: '16PH20024',
                companyName: 'Amazon',
                DOI: '01/12/2019',
                TOI: '9:00 AM',
                setReminder: false,
            },
            {
                userName: '16CE3FP11',
                companyName: 'Deutsche Bank',
                DOI: '01/12/2019',
                TOI: '8:00 AM',
                setReminder: false,
            },
            {
                userName: '16EC30035',
                companyName: 'Mercari',
                DOI: '01/12/2019',
                TOI: '9:00 AM',
                setReminder: false,
            }],
        };
    };

    render() {
        const shortList = this.state.shortList;
        return (
            <div className='container'>
            {
                shortList.map((value, index) => {
                    return <CardItem key={index} value={value}></CardItem>
                })
            }
            </div>
        );
    };
};

export default Homepage;
