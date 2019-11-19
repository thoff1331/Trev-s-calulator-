import React, { PureComponent } from "react";
import "../App.css";
class AddNumbers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      numOne: "",
      numTwo: "",
      result: "MAKE A CALCULATION",
      theme: "light",
      operation: " CHOOSE AN OPERATION"
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleAddition = () => {
    let { numTwo, numOne } = this.state;
    if (numOne === "" && numTwo === "") {
      alert("PLEASE ENTER TWO NUMBERS TO PERFORM AN OPERATION ");
    } else {
      this.setState({
        result: +numOne + +numTwo,
        operation: "Addition",
        numOne: "",
        numTwo: ""
      });
    }
  };

  handleChangeTheme = () => {
    this.props.onCollapse();
    this.state.theme === "light"
      ? this.setState({
          theme: "dark"
        })
      : this.setState({
          theme: "light"
        });
  };
  handleReset = () => {
    this.setState({
      numOne: "",
      numTwo: "",
      result: "MAKE A CALCULATION",
      operation: "CHOOSE AN OPERATION"
    });
  };
  handleMultiply = () => {
    let { numTwo, numOne } = this.state;
    if (this.state.numOne === "" && numTwo === "") {
      alert("PLEASE ENTER TWO NUMBERS TO PERFORM AN OPERATION ");
    } else {
      this.setState({
        result: numTwo * numOne,
        operation: "Multiplication",
        numOne: "",
        numTwo: ""
      });
    }
  };
  handleSubtraction = () => {
    let { numTwo, numOne } = this.state;
    if (numOne === "" && numTwo === "") {
      alert("PLEASE ENTER TWO NUMBERS TO PERFORM AN OPERATION ");
    } else {
      console.log("hit");
      let { numTwo, numOne } = this.state;

      this.setState({
        result: numOne - numTwo,
        operation: "Subtraction",
        numOne: "",
        numTwo: ""
      });
    }
  };
  handleDivision = () => {
    let { numTwo, numOne } = this.state;
    if (this.state.numOne === "" && numTwo === "") {
      alert("PLEASE ENTER TWO NUMBERS TO PERFORM AN OPERATION");
    } else {
      this.setState({
        result: numOne / numTwo,
        operation: "Division",
        numOne: "",
        numTwo: ""
      });
    }
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    console.log(this.props.children);

    return (
      <div>
        <div className={this.state.theme}>
          <div className="app">
            <h2 className={this.state.theme}>{this.state.operation}</h2>
            <input
              className="input-fields "
              type="number"
              name="numOne"
              value={this.state.numOne}
              onChange={this.handleChange}
              placeholder="ENTER A NUMBER"
            ></input>
            <div className="calc-reset">
              <h1>{this.state.result}</h1>
              <h6 onClick={this.handleReset} className="reset">
                X
              </h6>
            </div>
            <input
              className="input-fields"
              type="number"
              name="numTwo"
              value={this.state.numTwo}
              onChange={this.handleChange}
              placeholder="ENTER A NUMBER"
            ></input>
            <div className="operation-buttons">
              <button onClick={this.handleMultiply}> * </button>
              <button onClick={this.handleDivision}> / </button>
              <button onClick={this.handleSubtraction}> - </button>
              <button onClick={this.handleAddition}>+</button>
              <button onClick={this.handleChangeTheme}>CHANGE THEME</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNumbers;
