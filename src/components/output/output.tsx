import React from 'react';
import './output.scss';

type MyProps = {
    currentValue: string;
};

class Output extends React.Component<MyProps> {
    render() {
        return (
            <div className="output" id="display">{this.props.currentValue}</div>
        )
    }
}

export default Output