import React, { PureComponent } from "react";
import "../App.css";
import { connect } from "react-redux";
import { getUser, changeUserName } from "../store";
import store from "../store";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Spinner from "./Spinner";

class AddNumbers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      numOne: "",
      numTwo: "",
      result: "MAKE A CALCULATION",
      theme: "light",
      operation: " CHOOSE AN OPERATION",
      loading: false
    };
  }
  componentDidMount() {
    setTimeout(
      this.setState({
        loading: true
      }),
      1000
    );
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
      operation: "CHOOSE AN OPERATION",
      loading: false
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
        numTwo: "",
        user: null,
        newUserName: ""
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
        numTwo: "",
        numbers: [1, 2, 3],
        numbers1: [4, 5, 6]
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
  componentDidMount() {
    this.setState({
      user: store.getState().user
    });
  }
  changeUserName = () => {
    this.props.changeUserName(this.state.newUserName);
  };
  handleLoadData = () => {
    this.setState({
      loading: true
    });
  };
  render() {
    console.log(this.state);
    console.log(this.props);
    console.log(this.props.children);
    console.log(store.getState().user);
    console.log(this.state.user);

    return (
      <wrapper>
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

                <div>
                  {/* <input
                  name="newUserName"
                  value={this.state.newUserName}
                ></input>
                <button onClick={this.changeUserName}>Change</button> */}
                  <button onClick={this.handleLoadData}>Load Data</button>
                  {this.state.loading ? <Spinner /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </wrapper>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUser, changeUserName })(
  AddNumbers
);
