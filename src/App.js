import React, { PureComponent } from "react";
import Calculations from "./Components/Calculations";
class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme: ""
    };
  }

  handleAddFour = () => {
    alert("Yo");
  };
  handleMember = () => {
    alert("Welcome Trevor");
  };
  render() {
    console.log(this.state);

    return (
      <Calculations
        onCollapse={this.handleMember}
        onAddFour={this.handleAddFour}
      />
    );
  }
}

export default App;
