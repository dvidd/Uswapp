import React, { Component } from "react";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: false
    };
    this.inputRef = React.createRef();
  }
  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }
  handleClick = e => {
    /*Validating click is made inside a component*/
    if (this.inputRef.current === e.target) {
      return;
    }
    this.handleClickOutside();
  };
  handleClickOutside() {
    /*code to handle what to do when clicked outside*/
    this.changeOptions();
  }
  changeOptions() {
    this.setState({ options: !this.state.options });
  }
  render() {
    return (
      <div>
        <button class="btn btn-dark tools">
          <ion-icon size="medium" name="cog"></ion-icon>
        </button>
        <span
          ref={this.inputRef}
          className={this.state.options ? "options" : "d-none"}
        >
          <div class="element">
            <a>
              <ion-icon name="newspaper-outline"></ion-icon> About
            </a>
          </div>
          <div class="element">
            <a>
              <ion-icon name="logo-github"></ion-icon> Code
            </a>
          </div>
          <div class="element">
            <a>
              <ion-icon name="logo-twitter"></ion-icon> Twitter
            </a>
          </div>
        </span>
      </div>
    );
  }
}

export default Options;