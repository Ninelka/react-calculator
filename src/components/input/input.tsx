
import React from 'react';
import './input.scss';

type MyProps = {
    formula: string;
};

class Input extends React.Component<MyProps> {
    render() {
        return (
            <div className="input">{this.props.formula}</div>
        )
    }
}

export default Input