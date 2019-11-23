import React, { PureComponent } from "react";
import { tsAnyKeyword, tsStringKeyword } from "@babel/types";

class SearchFilter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      artists: [
        "JayZ ",
        "",
        " Ne - yo",
        " Adele",
        " Tom",
        " Petty",
        " adam Lambert"
      ],
      input: "",
      addArtistInput: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addArtist = () => {
    this.setState({
      artists: [this.state.artists.push(this.state.addArtistInput)],
      addArtistInput: ""
    });
  };
  render() {
    let filteredArtitis = this.state.artists.filter(word =>
      word.includes(this.state.input.toUpperCase())
    );
    console.log(this.state.artists);
    console.log(this.props);

    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange}
          name="input"
          placeholder="filter artist "
          type="text"
        ></input>
        <button onClick={this.handleFilter}>Filter</button>

        <h1>{}</h1>
        <h1>{filteredArtitis}</h1>

        <div>
          <input
            value={this.state.addArtistInput}
            onChange={this.handleChange}
            name="addArtistInput"
            placeholder="ADD AN ARTIST "
            type="text"
          ></input>
          <button onClick={this.addArtist}>Add Artist</button>
        </div>
      </div>
    );
  }
}

export default SearchFilter;
