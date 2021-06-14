import React from 'react'
import './App.css';
import Input from './components/input/input'
import Output from './components/output/output'
import Buttons from './components/buttons/buttons'

type MyProps = {
  currentValue?: string,
  decimal?: () => void,
  evaluate?: () => void,
  initialize?: () => void,
  numbers?: () => void,
  operators?: () => void

};
type MyState = {
  currentVal: string,
  prevVal: string,
  formula: string,
  currentSign: string,
  lastClicked: string,
  evaluated?: boolean
};

class App extends React.Component<MyProps, MyState> {
  private isOperator: RegExp = /[x/+‑]/;
  private endsWithOperator: RegExp = /[x+‑/]$/;
  private endsWithNegativeSign: RegExp = /\d[x/+‑]{1}‑$/;

  constructor(props: MyProps) {
    super(props);
    this.state = {
      currentVal: '0',
      prevVal: '0',
      formula: '',
      currentSign: 'pos',
      lastClicked: ''
    };
    this.maxDigitWarning = this.maxDigitWarning.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    this.initialize = this.initialize.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
  }

  initialize(): void {
    this.setState({
      currentVal: '0',
      prevVal: '0',
      formula: '',
      currentSign: 'pos',
      lastClicked: '',
      evaluated: false
    });
  }

  maxDigitWarning(): void {
    this.setState({
      currentVal: 'Digit Limit',
      prevVal: this.state.currentVal
    });
    setTimeout(() => this.setState({ currentVal: this.state.prevVal }), 1000);
  }

  handleEvaluate(): void {
    if (!this.state.currentVal.includes('Limit')) {
      let expression = this.state.formula;

      while (this.endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression
        .replace(/x/g, '*')
        .replace(/‑/g, '-')
        .replace('--', '+0+0+0+0+0+0+');

      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;

      this.setState({
        currentVal: answer.toString(),
        formula:
          expression
            .replace(/\*/g, '⋅')
            .replace(/-/g, '‑')
            .replace('+0+0+0+0+0+0+', '‑-')
            .replace(/(x|\/|\+)‑/, '$1-')
            .replace(/^‑/, '-') +
          '=' +
          answer,
        prevVal: answer.toString(),
        evaluated: true
      });
    }
  }

  handleOperators(e: any): void {
    if (!this.state.currentVal.includes('Limit')) {
      const value = e.target.value;
      const { formula, prevVal, evaluated } = this.state;

      this.setState({
        currentVal: value,
        evaluated: false
      });

      if (evaluated) {
        this.setState({
          formula: prevVal + value
        });
      } else if (!this.endsWithOperator.test(formula)) {
        this.setState({
          prevVal: formula,
          formula: formula + value
        });
      } else if (!this.endsWithNegativeSign.test(formula)) {
        this.setState({
          formula:
            (this.endsWithNegativeSign.test(formula + value) ? formula : prevVal) +
            value
        });
      } else if (value !== '‑') {
        this.setState({
          formula: prevVal + value
        });
      }
    }
  }

  handleNumbers(e: any): void {
    if (!this.state.currentVal.includes('Limit')) {
      const { currentVal, formula, evaluated } = this.state;
      const value = e.target.value;

      this.setState({
        evaluated: false
      });

      if (currentVal.length > 10) {
        this.maxDigitWarning();
      } else if (evaluated) {
        this.setState({
          currentVal: value,
          formula: value !== '0' ? value : ''
        });
      } else {
        this.setState({
          currentVal:
            currentVal === '0' || this.isOperator.test(currentVal)
              ? value
              : currentVal + value,
          formula:
            currentVal === '0' && value === '0'
              ? formula === ''
                ? value
                : formula
              : /([^.0-9]0|^0)$/.test(formula)
                ? formula.slice(0, -1) + value
                : formula + value
        });
      }
    }
  }

  handleDecimal(): void {
    if (this.state.evaluated === true) {
      this.setState({
        currentVal: '0.',
        formula: '0.',
        evaluated: false
      });
    } else if (
      !this.state.currentVal.includes('.') &&
      !this.state.currentVal.includes('Limit')
    ) {
      this.setState({ evaluated: false });
      if (this.state.currentVal.length > 10) {
        this.maxDigitWarning();
      } else if (
        this.endsWithOperator.test(this.state.formula) ||
        (this.state.currentVal === '0' && this.state.formula === '')
      ) {
        this.setState({
          currentVal: '0.',
          formula: this.state.formula + '0.'
        });
      } else {
        this.setState({
          currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)![0] + '.',
          formula: this.state.formula + '.'
        });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Input formula={this.state.formula.replace(/x/g, '⋅')} />
        <Output currentValue={this.state.currentVal} />
        <Buttons
          decimal={this.handleDecimal}
          evaluate={this.handleEvaluate}
          initialize={this.initialize}
          numbers={this.handleNumbers}
          operators={this.handleOperators}
        />
      </div>
    );
  }
}

export default App
