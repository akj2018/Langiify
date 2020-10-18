import React from "react";

import "./search-field.styles.scss";
import SearchBar from "material-ui-search-bar";

class SearchField extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <SearchBar
        value={this.state.value}
        onChange={(newValue) => this.setState({ value: newValue })}
        onRequestSearch={() => console.log(this.state.value)}
      />
    );
  }
}

export default SearchField;
