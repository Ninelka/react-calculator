import{R as React,E as E__Downloads_Yandex_Disk_Files_Projects_reactCalculator_node_modules_react,a as ReactDOM}from"./vendor.a46a3875.js";var index='@font-face {\r\n\tfont-family: "Digital";\r\n\tsrc:url("__VITE_ASSET__75766eb9__")\r\n\t\t\tformat("woff2"),\r\n\t\turl("__VITE_ASSET__0bc0f176__")\r\n\t\t\tformat("woff"),\r\n\t\turl("__VITE_ASSET__ec3ac662__")\r\n\t\t\tformat("truetype");\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n}\r\n\r\n#root {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 100vh;\r\n}\r\n',App$1=".container {\r\n\tdisplay: grid;\r\n\tgrid-gap: 5px;\r\n\twidth: 250px;\r\n\tbackground-color: black;\r\n\tpadding: 1em;\r\n\tborder: 2px solid grey;\r\n\tborder-radius: 20px;\r\n}\r\n",input='.input {\n  grid-column: 1/span 4;\n  text-align: right;\n  font-family: "Digital", arial, sans-serif;\n  overflow: hidden;\n  min-height: 36px;\n  color: red;\n  font-size: 2rem;\n}';function Input(e){return React.createElement("div",{className:"input"},e.formula)}var output='.output {\n  grid-column: 1/span 4;\n  text-align: right;\n  font-family: "Digital", arial, sans-serif;\n  overflow: hidden;\n  min-height: 30px;\n  color: white;\n  font-size: 3rem;\n}';function Output(e){return React.createElement("div",{className:"output",id:"display"},e.currentValue)}var buttons='.buttons {\n  display: grid;\n  grid-column: 1/span 4;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-gap: 5px;\n}\n.buttons__item {\n  min-height: 50px;\n  background-color: grey;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-family: "Digital", arial, sans-serif;\n  font-size: 1.5em;\n}\n.buttons__item:hover {\n  outline: -webkit-focus-ring-color auto 1px;\n  cursor: pointer;\n}\n.buttons__item:focus {\n  outline: none;\n}\n.buttons__item_clear {\n  background-color: #ff6767;\n}\n.buttons__item_equals {\n  grid-row-start: span 2;\n  background-color: #52c189;\n}\n.buttons__item_clear, .buttons__item_zero {\n  grid-column-start: span 2;\n}\n.buttons__item_numbers {\n  background-color: rgba(128, 128, 128, 0.7);\n}';function Buttons(e){return React.createElement("div",{className:"buttons"},React.createElement("button",{onClick:e.initialize,value:"clear",id:"clear",className:"buttons__item buttons__item_clear"},"C"),React.createElement("button",{onClick:e.operators,value:"/",id:"divide",className:"buttons__item"},"/"),React.createElement("button",{onClick:e.operators,value:"x",id:"multiply",className:"buttons__item"},"x"),React.createElement("button",{onClick:e.numbers,value:"7",id:"seven",className:"buttons__item buttons__item_numbers"},"7"),React.createElement("button",{onClick:e.numbers,value:"8",id:"eight",className:"buttons__item buttons__item_numbers"},"8"),React.createElement("button",{onClick:e.numbers,value:"9",id:"nine",className:"buttons__item buttons__item_numbers"},"9"),React.createElement("button",{onClick:e.operators,value:"‑",id:"subtract",className:"buttons__item"},"‑"),React.createElement("button",{onClick:e.numbers,value:"4",id:"four",className:"buttons__item buttons__item_numbers"},"4"),React.createElement("button",{onClick:e.numbers,value:"5",id:"five",className:"buttons__item buttons__item_numbers"},"5"),React.createElement("button",{onClick:e.numbers,value:"6",id:"six",className:"buttons__item buttons__item_numbers"},"6"),React.createElement("button",{onClick:e.operators,value:"+",id:"add",className:"buttons__item"},"+"),React.createElement("button",{onClick:e.numbers,value:"1",id:"one",className:"buttons__item buttons__item_numbers"},"1"),React.createElement("button",{onClick:e.numbers,value:"2",id:"two",className:"buttons__item buttons__item_numbers"},"2"),React.createElement("button",{onClick:e.numbers,value:"3",id:"three",className:"buttons__item buttons__item_numbers"},"3"),React.createElement("button",{onClick:e.evaluate,value:"=",id:"equals",className:"buttons__item buttons__item_equals"},"="),React.createElement("button",{onClick:e.numbers,value:"0",id:"zero",className:"buttons__item buttons__item_numbers buttons__item_zero"},"0"),React.createElement("button",{onClick:e.decimal,value:".",id:"decimal",className:"buttons__item buttons__item_numbers"},"."))}const App=()=>{let isOperator=/[x/+‑]/,endsWithOperator=/[x+‑/]$/,endsWithNegativeSign=/\d[x/+‑]{1}‑$/;const[currentVal,setCurrentVal]=E__Downloads_Yandex_Disk_Files_Projects_reactCalculator_node_modules_react.exports.useState("0"),[prevVal,setPrevVal]=E__Downloads_Yandex_Disk_Files_Projects_reactCalculator_node_modules_react.exports.useState("0"),[formula,setFormula]=E__Downloads_Yandex_Disk_Files_Projects_reactCalculator_node_modules_react.exports.useState(""),[currentSign,setCurrentSign]=E__Downloads_Yandex_Disk_Files_Projects_reactCalculator_node_modules_react.exports.useState("pos"),[lastClicked,setLastClicked]=E__Downloads_Yandex_Disk_Files_Projects_reactCalculator_node_modules_react.exports.useState(""),[evaluated,setEvaluated]=E__Downloads_Yandex_Disk_Files_Projects_reactCalculator_node_modules_react.exports.useState(!1),initialize=()=>{setCurrentVal("0"),setPrevVal("0"),setFormula(""),setCurrentSign("pos"),setLastClicked(""),setEvaluated(!1)},maxDigitWarning=()=>{setCurrentVal("Digit Limit"),setPrevVal(currentVal),setTimeout((()=>setPrevVal(currentVal)),1e3)},handleEvaluate=()=>{if(formula&&!currentVal.includes("Limit")){let expression=formula;for(;endsWithOperator.test(expression);)expression=expression.slice(0,-1);expression=expression.replace(/x/g,"*").replace(/‑/g,"-").replace("--","+0+0+0+0+0+0+");let answer=Math.round(1e12*eval(expression))/1e12;setCurrentVal(answer.toString()),setPrevVal(answer.toString()),setFormula(expression.replace(/\*/g,"⋅").replace(/-/g,"‑").replace("+0+0+0+0+0+0+","‑-").replace(/(x|\/|\+)‑/,"$1-").replace(/^‑/,"-")+"="+answer),setEvaluated(!0)}},handleOperators=e=>{if(!currentVal.includes("Limit")){const t=e.target.value;setCurrentVal(t),setEvaluated(!1),evaluated?setFormula(prevVal+t):endsWithOperator.test(formula)?endsWithNegativeSign.test(formula)?"‑"!==t&&setFormula(prevVal+t):setFormula((endsWithNegativeSign.test(formula+t)?formula:prevVal)+t):(setPrevVal(formula),setFormula(formula+t))}},handleNumbers=e=>{if(!currentVal.includes("Limit")){const t=e.target.value;setEvaluated(!1),currentVal.length>10?maxDigitWarning():evaluated?(setCurrentVal(t),setFormula("0"!==t?t:"")):(setCurrentVal("0"===currentVal||isOperator.test(currentVal)?t:currentVal+t),setFormula("0"===currentVal&&"0"===t?""===formula?t:formula:/([^.0-9]0|^0)$/.test(formula)?formula.slice(0,-1)+t:formula+t))}},handleDecimal=()=>{!0===evaluated?(setCurrentVal("0"),setFormula(""),setEvaluated(!1)):currentVal.includes(".")||currentVal.includes("Limit")||(setEvaluated(!1),currentVal.length>10?maxDigitWarning():endsWithOperator.test(formula)||"0"===currentVal&&""===formula?(setCurrentVal("0"),setFormula(formula+"0.")):(setCurrentVal(formula.match(/(-?\d+\.?\d*)$/)[0]+"."),setFormula(formula+".")))};return React.createElement("div",{className:"container"},React.createElement(Input,{formula:formula.replace(/x/g,"⋅")}),React.createElement(Output,{currentValue:currentVal}),React.createElement(Buttons,{decimal:handleDecimal,evaluate:handleEvaluate,initialize:initialize,numbers:handleNumbers,operators:handleOperators}))};ReactDOM.render(React.createElement(React.StrictMode,null,React.createElement(App,null)),document.getElementById("root"));
