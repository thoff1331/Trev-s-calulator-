import React, { PureComponent } from "react";
import Cards from "./Cards";
import propTypes from "prop-types";
import { valueToNode } from "@babel/types";
class CardDisplay extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          id: 0,
          name: "Trevor",
          role: "Software Engineer",
          FullTime: true,
          years: 5
        },
        {
          id: 1,
          name: "John",
          role: "Instructor",
          FullTime: true,
          years: 30
        },
        {
          id: 2,
          name: "Melanie",
          role: "Retiree",
          FullTime: false,
          years: 31
        }
      ]
    };
  }
  //   name={val.name} role={val.role} years={val.years}
  render() {
    console.log(this.props);
    let card = this.state.students.map((val, index) => {
      return <Cards {...val} />;
    });
    return <div>{card}</div>;
  }
}

CardDisplay.propTypes = {
  //   students: propTypes.object.isRequired,
  //   id: propTypes.bool.isRequired
  className: propTypes.object.isRequired
};

export default CardDisplay;
