import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      total: 0,
      operator: 0,
      history: [],
      operandA: 0,
      operandB: 0,

    };
    this.show = this.show.bind(this);
  }

  concat(value) {
    this.setState((prevState) => {
      return {display: prevState.display+value}
    });

  }

  show(event) {
    let value = event.target.textContent;;
    console.log(event.target.innerText);


    switch(event.target.textContent) {
      case '1': {
        if(this.state.display === '0') {
          this.setState({
            display:event.target.textContent
          })
        } else this.concat(event.target.textContent);
        break;
      }
      case '2': {
        if(this.state.display === '0') {
          this.setState({
            display:event.target.textContent
          })
        } else this.concat(event.target.textContent);
        break;
      }
      case '3': {
        if(this.state.display === '0') {
          this.setState({
            display:event.target.textContent
          })
        } else this.concat(event.target.textContent);
        break;
      }
      case '4': {
        if(this.state.display === '0') {
          this.setState({
            display:event.target.textContent
          })
        } else this.concat(event.target.textContent);
        break;
      }
      case '5': {
        if(this.state.display === '0') {
          this.setState({
            display:event.target.textContent
          })
        } else this.concat(event.target.textContent);
        break;
      }
      case '6': {
        if(this.state.display === '0') {
          this.setState({
            display:event.target.textContent
          })
        } else this.concat(event.target.textContent);
        break;
      }
      case '7': {
        if(this.state.display === '0') {
          this.setState({
            display:event.target.textContent
          })
        } else this.concat(event.target.textContent);
        break;
      }
      case '8': {
        if(this.state.display === '0') {
          this.setState({
            display:event.target.textContent
          })
        } else this.concat(event.target.textContent);
        break;
      }
      case '9': {
        if(this.state.display === '0') {
          this.setState({
            display:event.target.textContent
          })
        } else this.concat(event.target.textContent);
        break;
      }
      case '0': {
        if(this.state.display !== '0') {
           this.concat(event.target.textContent)
        }
        break;
      }
      case 'C': {
        this.setState({
          display: '0',
        });
        break;
      }
      case '-': {
        if(this.state.display.indexOf('-') === -1){
          this.setState({
            operandA: this.state.display,
            operator: event.target.innerText
          });
          this.concat('-');
        }
        break;
      }
      case '+': {
         if(this.state.display.indexOf('+') === -1){
          this.setState({
            operandA: this.state.display,
            operator: event.target.innerText
          });
          this.concat('+');
        }
        break;
       } case 'x': {
         if(this.state.display.indexOf('x') === -1){
          this.setState({
            operandA: this.state.display,
            operator: event.target.innerText
          });
          this.concat('x');
        }
        break;
      } case '/': {
         if(this.state.display.indexOf('/') === -1){
          this.setState({
            operandA: this.state.display,
            operator: event.target.innerText
          });
          this.concat('/');
        }
        break;
      } case '=': {
        let indexOfOperand = this.state.display.indexOf(this.state.operator);
        let operandB = this.state.display.substring(indexOfOperand + 1);

        if(this.state.operator === '+') {
          let math = parseInt(this.state.operandA)+parseInt(operandB);
          this.setState({
            display: math,
          })
        }
        else if (this.state.operator === "-") {
          let math = parseInt(this.state.operandA)-parseInt(operandB);
          this.setState({
            display: math,
          })
        }
        else if (this.state.operator === "x") {
          let math = parseInt(this.state.operandA)*parseInt(operandB);
          this.setState({
            display: math,
          })
        }
        else if (this.state.operator === "/") {
          let math = parseInt(this.state.operandA)/parseInt(operandB);
          this.setState({
            display: math,
          })
        }
       break;
      }
    }

  };

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display}/>
        <NumberPad show={this.show}/>
      </div>
    );
  }
}

export default Calculator;
