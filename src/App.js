import React, { PureComponent } from "react";
import Calculations from "./Components/Calculations";
import Cards from "./Components/Cards";
import CardDisplay from "./Components/CardDisplay";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchFilter from "./Components/SearchFilter";
import CheckBox from "./Components/CheckBox";
import Spinner from "./Components/Spinner";

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

    return <Calculations />;
  }
}

export default App;
