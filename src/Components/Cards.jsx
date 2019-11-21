import React, { PureComponent } from "react";
import CardsDisplay from "./CardDisplay";
import styled from "styled-components";

class Cards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const Card = styled.h1`
      color: black;
      font-size: 100px;
      border: 10px dotted black;
      display: flex;
      flex-direction: column;
      grid-template-row: 100px 100px 100px;
      justify-content: center;
      background-color: blue;
      align-items: center;
      width: 800px;
      height: 600px;
      wrap: row;
      opacity: 0.7;
    `;
    const CardWrapper = styled.CardWrapper`
      display: flex;
      flex-direction: column;
      border: 10px solid green;
    `;
    return (
      <CardWrapper>
        <Card>
          <h1>{this.props.name}</h1>
          <h1> Role:{this.props.role}</h1>
          <h1> Service Years:{this.props.years}</h1>
        </Card>
      </CardWrapper>
    );
  }
}

export default Cards;
