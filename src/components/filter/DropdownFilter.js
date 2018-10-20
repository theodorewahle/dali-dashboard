import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import checkMark from "../../assets/checkMark.svg";

class DropdownFilter extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>{this.props.filter}</DropdownToggle>
        <DropdownMenu>
          {this.props.items.map((item, i) => {
            return (
              <DropdownItem onClick={() => this.props.select(item)} key={i}>
                {item}
                {this.props.activeItems &&
                  this.props.activeItems.includes(item) && (
                    <img src={checkMark} className="h2 mw4" alt="check" />
                  )}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownFilter;
