import  React, { Component } from 'react';
import ToggleButton from 'react-toggle-button';

class Togglebutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        }
    }
    render() {
        return (
            <div>
                <ToggleButton
                    value={ this.state.value || false }
                    onToggle={(value) => {
                    this.setState({
                        value: !value,
                    })
                }} /> 
            </div>
        );
    };
};

export default Togglebutton;