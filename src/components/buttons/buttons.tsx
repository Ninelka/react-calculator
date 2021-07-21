import React from 'react';
import './buttons.scss';

type MyProps = {
    decimal?: () => void,
    evaluate?: () => void,
    initialize?: () => void,
    numbers?: (e: any) => void,
    operators?: (e: any) => void
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
};

function Buttons(props: MyProps) {
    return (
        <div className="buttons">
            <button onClick={props.initialize} value="clear" id="clear" className="buttons__item buttons__item_clear">C</button>
            <button onClick={props.operators} value="/" id="divide" className="buttons__item">/</button>
            <button onClick={props.operators} value="x" id="multiply" className="buttons__item">x</button>
            <button onClick={props.numbers} value="7" id="seven" className="buttons__item buttons__item_numbers">7</button>
            <button onClick={props.numbers} value="8" id="eight" className="buttons__item buttons__item_numbers">8</button>
            <button onClick={props.numbers} value="9" id="nine" className="buttons__item buttons__item_numbers">9</button>
            <button onClick={props.operators} value="‑" id="subtract" className="buttons__item">‑</button>
            <button onClick={props.numbers} value="4" id="four" className="buttons__item buttons__item_numbers">4</button>
            <button onClick={props.numbers} value="5" id="five" className="buttons__item buttons__item_numbers">5</button>
            <button onClick={props.numbers} value="6" id="six" className="buttons__item buttons__item_numbers">6</button>
            <button onClick={props.operators} value="+" id="add" className="buttons__item">+</button>
            <button onClick={props.numbers} value="1" id="one" className="buttons__item buttons__item_numbers">1</button>
            <button onClick={props.numbers} value="2" id="two" className="buttons__item buttons__item_numbers">2</button>
            <button onClick={props.numbers} value="3" id="three" className="buttons__item buttons__item_numbers">3</button>
            <button onClick={props.evaluate} value="=" id="equals" className="buttons__item buttons__item_equals">=</button>
            <button onClick={props.numbers} value="0" id="zero" className="buttons__item buttons__item_numbers buttons__item_zero">0</button>
            <button onClick={props.decimal} value="." id="decimal" className="buttons__item buttons__item_numbers">.</button>
        </div>
    )
}

export default Buttons