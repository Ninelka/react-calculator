
import React from 'react';
import './input.scss';

type MyProps = {
    formula: string;
};

function Input(props: MyProps) {
    return (
        <div className="input">{props.formula}</div>
    )
}

export default Input