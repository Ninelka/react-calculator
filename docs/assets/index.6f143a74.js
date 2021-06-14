import{R as React,a as ReactDOM}from"./vendor.f493752b.js";var index='@font-face {\n\tfont-family: "Digital";\n\tsrc: url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot");\n\tsrc: url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix")\n\t\t\tformat("embedded-opentype"),\n\t\turl("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2")\n\t\t\tformat("woff2"),\n\t\turl("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff")\n\t\t\tformat("woff"),\n\t\turl("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf")\n\t\t\tformat("truetype"),\n\t\turl("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7")\n\t\t\tformat("svg");\n}\n\n#root {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100vh;\n}\n',App$1=".container {\n\twidth: 250px;\n\tbackground-color: black;\n\tpadding: 1em;\n\tborder: 2px solid grey;\n\tborder-radius: 20px;\n}\n",input='.input {\n  text-align: right;\n  font-family: "Digital", arial;\n  overflow: hidden;\n  min-height: 36px;\n  color: red;\n  font-size: 2rem;\n}';class Input extends React.Component{render(){return React.createElement("div",{className:"input"},this.props.formula)}}var output='.output {\n  text-align: right;\n  font-family: "Digital", arial;\n  overflow: hidden;\n  min-height: 30px;\n  color: white;\n  font-size: 3rem;\n}';class Output extends React.Component{render(){return React.createElement("div",{className:"output",id:"display"},this.props.currentValue)}}var buttons='.buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 5px;\n}\n.buttons__item {\n  min-height: 50px;\n  background-color: grey;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-family: "Digital", arial;\n  font-size: 1.5em;\n}\n.buttons__item:hover {\n  outline: -webkit-focus-ring-color auto 1px;\n  cursor: pointer;\n}\n.buttons__item:focus {\n  outline: none;\n}\n.buttons__item_clear {\n  background-color: #ff6767;\n}\n.buttons__item_equals {\n  grid-row-start: span 2;\n  background-color: #52c189;\n}\n.buttons__item_clear, .buttons__item_zero {\n  grid-column-start: span 2;\n}\n.buttons__item_numbers {\n  background-color: rgba(128, 128, 128, 0.7);\n}';class Buttons extends React.Component{render(){return React.createElement("div",{className:"buttons"},React.createElement("button",{onClick:this.props.initialize,value:"clear",id:"clear",className:"buttons__item buttons__item_clear"},"C"),React.createElement("button",{onClick:this.props.operators,value:"/",id:"divide",className:"buttons__item"},"/"),React.createElement("button",{onClick:this.props.operators,value:"x",id:"multiply",className:"buttons__item"},"x"),React.createElement("button",{onClick:this.props.numbers,value:"7",id:"seven",className:"buttons__item buttons__item_numbers"},"7"),React.createElement("button",{onClick:this.props.numbers,value:"8",id:"eight",className:"buttons__item buttons__item_numbers"},"8"),React.createElement("button",{onClick:this.props.numbers,value:"9",id:"nine",className:"buttons__item buttons__item_numbers"},"9"),React.createElement("button",{onClick:this.props.operators,value:"‑",id:"subtract",className:"buttons__item"},"‑"),React.createElement("button",{onClick:this.props.numbers,value:"4",id:"four",className:"buttons__item buttons__item_numbers"},"4"),React.createElement("button",{onClick:this.props.numbers,value:"5",id:"five",className:"buttons__item buttons__item_numbers"},"5"),React.createElement("button",{onClick:this.props.numbers,value:"6",id:"six",className:"buttons__item buttons__item_numbers"},"6"),React.createElement("button",{onClick:this.props.operators,value:"+",id:"add",className:"buttons__item"},"+"),React.createElement("button",{onClick:this.props.numbers,value:"1",id:"one",className:"buttons__item buttons__item_numbers"},"1"),React.createElement("button",{onClick:this.props.numbers,value:"2",id:"two",className:"buttons__item buttons__item_numbers"},"2"),React.createElement("button",{onClick:this.props.numbers,value:"3",id:"three",className:"buttons__item buttons__item_numbers"},"3"),React.createElement("button",{onClick:this.props.evaluate,value:"=",id:"equals",className:"buttons__item buttons__item_equals"},"="),React.createElement("button",{onClick:this.props.numbers,value:"0",id:"zero",className:"buttons__item buttons__item_numbers buttons__item_zero"},"0"),React.createElement("button",{onClick:this.props.decimal,value:".",id:"decimal",className:"buttons__item buttons__item_numbers"},"."))}}class App extends React.Component{constructor(t){super(t),this.isOperator=/[x/+‑]/,this.endsWithOperator=/[x+‑/]$/,this.endsWithNegativeSign=/\d[x/+‑]{1}‑$/,this.state={currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:""},this.maxDigitWarning=this.maxDigitWarning.bind(this),this.handleOperators=this.handleOperators.bind(this),this.handleEvaluate=this.handleEvaluate.bind(this),this.initialize=this.initialize.bind(this),this.handleDecimal=this.handleDecimal.bind(this),this.handleNumbers=this.handleNumbers.bind(this)}initialize(){this.setState({currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:"",evaluated:!1})}maxDigitWarning(){this.setState({currentVal:"Digit Limit",prevVal:this.state.currentVal}),setTimeout((()=>this.setState({currentVal:this.state.prevVal})),1e3)}handleEvaluate(){if(!this.state.currentVal.includes("Limit")){let expression=this.state.formula;for(;this.endsWithOperator.test(expression);)expression=expression.slice(0,-1);expression=expression.replace(/x/g,"*").replace(/‑/g,"-").replace("--","+0+0+0+0+0+0+");let answer=Math.round(1e12*eval(expression))/1e12;this.setState({currentVal:answer.toString(),formula:expression.replace(/\*/g,"⋅").replace(/-/g,"‑").replace("+0+0+0+0+0+0+","‑-").replace(/(x|\/|\+)‑/,"$1-").replace(/^‑/,"-")+"="+answer,prevVal:answer.toString(),evaluated:!0})}}handleOperators(t){if(!this.state.currentVal.includes("Limit")){const e=t.target.value,{formula:n,prevVal:a,evaluated:s}=this.state;this.setState({currentVal:e,evaluated:!1}),s?this.setState({formula:a+e}):this.endsWithOperator.test(n)?this.endsWithNegativeSign.test(n)?"‑"!==e&&this.setState({formula:a+e}):this.setState({formula:(this.endsWithNegativeSign.test(n+e)?n:a)+e}):this.setState({prevVal:n,formula:n+e})}}handleNumbers(t){if(!this.state.currentVal.includes("Limit")){const{currentVal:e,formula:n,evaluated:a}=this.state,s=t.target.value;this.setState({evaluated:!1}),e.length>10?this.maxDigitWarning():a?this.setState({currentVal:s,formula:"0"!==s?s:""}):this.setState({currentVal:"0"===e||this.isOperator.test(e)?s:e+s,formula:"0"===e&&"0"===s?""===n?s:n:/([^.0-9]0|^0)$/.test(n)?n.slice(0,-1)+s:n+s})}}handleDecimal(){!0===this.state.evaluated?this.setState({currentVal:"0.",formula:"0.",evaluated:!1}):this.state.currentVal.includes(".")||this.state.currentVal.includes("Limit")||(this.setState({evaluated:!1}),this.state.currentVal.length>10?this.maxDigitWarning():this.endsWithOperator.test(this.state.formula)||"0"===this.state.currentVal&&""===this.state.formula?this.setState({currentVal:"0.",formula:this.state.formula+"0."}):this.setState({currentVal:this.state.formula.match(/(-?\d+\.?\d*)$/)[0]+".",formula:this.state.formula+"."}))}render(){return React.createElement("div",{className:"container"},React.createElement(Input,{formula:this.state.formula.replace(/x/g,"⋅")}),React.createElement(Output,{currentValue:this.state.currentVal}),React.createElement(Buttons,{decimal:this.handleDecimal,evaluate:this.handleEvaluate,initialize:this.initialize,numbers:this.handleNumbers,operators:this.handleOperators}))}}ReactDOM.render(React.createElement(React.StrictMode,null,React.createElement(App,null)),document.getElementById("root"));