import React, { PureComponent } from "react";
import Calculations from "./Components/Calculations";
import Cards from "./Components/Cards";
import CardDisplay from "./Components/CardDisplay";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchFilter from "./Components/SearchFilter";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme: "",
      StartDate: new Date(),
      EndDate: new Date()
    };
  }

  handleAddFour = () => {
    alert("Yo");
  };
  handleMember = () => {
    alert("Welcome Trevor");
  };
  handleChange = date => {
    this.setState({
      StartDate: date
    });
  };
  handleChangeEnd = date => {
    this.setState({
      EndDate: date
    });
  };
  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        {/* <div>
          <DatePicker
            selected={this.state.StartDate}
            onChange={this.handleChange}
          />
          <h1>Date Seperator</h1>
          <DatePicker
            selected={this.state.EndDate}
            onChange={this.handleChangeEnd}
          />
        </div>
        <CardDisplay /> */}

        <SearchFilter />
      </div>
    );
  }
}

export default App;
