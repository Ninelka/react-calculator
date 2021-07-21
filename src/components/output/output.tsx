import React from 'react';
import './output.scss';

type MyProps = {
    currentValue: string;
};

function Output(props: MyProps) {
    return (
        <div className="output" id="display">{props.currentValue}</div>
    )
}

export default Output