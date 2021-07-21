import React, { useState } from 'react'
import './App.css';
import Input from './components/input/input'
import Output from './components/output/output'
import Buttons from './components/buttons/buttons'

const App: React.FC = () => {
  let isOperator: RegExp = /[x/+‑]/;
  let endsWithOperator: RegExp = /[x+‑/]$/;
  let endsWithNegativeSign: RegExp = /\d[x/+‑]{1}‑$/;

  const [currentVal, setCurrentVal] = useState<string>('0')
  const [prevVal, setPrevVal] = useState<string>('0')
  const [formula, setFormula] = useState<string>('')
  const [currentSign, setCurrentSign] = useState<string>('pos')
  const [lastClicked, setLastClicked] = useState<string>('')
  const [evaluated, setEvaluated] = useState<boolean>(false)

  const initialize = (): void => {
    setCurrentVal('0')
    setPrevVal('0')
    setFormula('')
    setCurrentSign('pos')
    setLastClicked('')
    setEvaluated(false)
  }

  const maxDigitWarning = (): void => {
    setCurrentVal('Digit Limit')
    setPrevVal(currentVal)

    setTimeout(() => setPrevVal(currentVal), 1000);
  }

  const handleEvaluate = (): void => {
    if (formula && !currentVal.includes('Limit')) {
      let expression = formula;

      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression
        .replace(/x/g, '*')
        .replace(/‑/g, '-')
        .replace('--', '+0+0+0+0+0+0+');

      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;

      setCurrentVal(answer.toString())
      setPrevVal(answer.toString())
      setFormula(expression
        .replace(/\*/g, '⋅')
        .replace(/-/g, '‑')
        .replace('+0+0+0+0+0+0+', '‑-')
        .replace(/(x|\/|\+)‑/, '$1-')
        .replace(/^‑/, '-') + '=' + answer)
      setEvaluated(true)
    }
  }

  const handleOperators = (e: any): void => {
    if (!currentVal.includes('Limit')) {
      const value = e.target.value;

      setCurrentVal(value)
      setEvaluated(false)

      if (evaluated) {
        setFormula(prevVal + value)
      } else if (!endsWithOperator.test(formula)) {
        setPrevVal(formula)
        setFormula(formula + value)
      } else if (!endsWithNegativeSign.test(formula)) {
        setFormula((endsWithNegativeSign.test(formula + value) ? formula : prevVal) + value)
      } else if (value !== '‑') {
        setFormula(prevVal + value)
      }
    }
  }

  const handleNumbers = (e: any): void => {
    if (!currentVal.includes('Limit')) {
      const value = e.target.value;

      setEvaluated(false)

      if (currentVal.length > 10) {
        maxDigitWarning();
      } else if (evaluated) {
        setCurrentVal(value)
        setFormula(value !== '0' ? value : '')
      } else {
        setCurrentVal(currentVal === '0' || isOperator.test(currentVal) ? value : currentVal + value)
        setFormula(currentVal === '0' && value === '0' ? formula === '' ? value : formula : /([^.0-9]0|^0)$/.test(formula) ? formula.slice(0, -1) + value : formula + value)
      }
    }
  }

  const handleDecimal = (): void => {
    if (evaluated === true) {
      setCurrentVal('0')
      setFormula('')
      setEvaluated(false)
    } else if (
      !currentVal.includes('.') &&
      !currentVal.includes('Limit')
    ) {
      setEvaluated(false)

      if (currentVal.length > 10) {
        maxDigitWarning();
      } else if (
        endsWithOperator.test(formula) ||
        (currentVal === '0' && formula === '')
      ) {
        setCurrentVal('0')
        setFormula(formula + '0.')
      } else {
        setCurrentVal(formula.match(/(-?\d+\.?\d*)$/)![0] + '.')
        setFormula(formula + '.')
      }
    }
  }
  return (
    <div className="container">
      <Input formula={formula.replace(/x/g, '⋅')} />
      <Output currentValue={currentVal} />
      <Buttons
        decimal={handleDecimal}
        evaluate={handleEvaluate}
        initialize={initialize}
        numbers={handleNumbers}
        operators={handleOperators}
      />
    </div>
  )
}

export default App
