import React from "react";
import { NavLink, HashRouter } from "react-router-dom";

class BotSearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.items = ["Spain", "France", "Sweden"];
    this.state = {
      suggestions: [],
      text: ""
    };
  }

  onTextChange = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.props.onClick();
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
    console.log("ttt");
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <HashRouter>
        <ul>
          {suggestions.map(item => (
            <li>
              <NavLink to={`${this.props.lala[1].navLink}/${item}/keyFacts`}>
                <span onClick={() => this.suggestionSelected(item)}>
                  {item}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </HashRouter>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <input value={text} onChange={this.onTextChange} type="text" />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default BotSearchBar;
