import React, { Component } from "react";

import { templateParser, templateFormatter, parseDigit } from "input-format";
import ReactInput from "input-format/react";

const TEMPLATE = "xx.xx.xxxx";
const parse = templateParser(TEMPLATE, parseDigit);
const format = templateFormatter(TEMPLATE);

class DateInput extends Component {
  constructor(props) {
    super(props);

    this.date_focusHandler = this.date_focusHandler.bind(this);
    this.date_blurHandler = this.date_blurHandler.bind(this);
    this.date_changeHandler = this.date_changeHandler.bind(this);

    this.state = {
      isFocused: false,
      value: "",
    };
  }

  date_focusHandler(event) {
    this.setState({ ...this.state, isFocused: true });
  }

  date_blurHandler(event) {
    this.setState({ ...this.state, isFocused: false });
  }

  date_changeHandler(value) {
    this.setState({ ...this.state, value });
    let result = null;
    let date = format(value).text;
    if (date.length == 10) {
      let p = date.split(".");
      result = p[1] + "/" + p[0] + "/" + p[2];
    }
    if (this.props.onChange) this.props.onChange(result);
    return false;
  }

  render() {
    return (
      <ReactInput
        value={this.state.value}
        onChange={this.date_changeHandler}
        parse={parse}
        format={format}
        placeholder={this.state.isFocused ? "" : "ДД.ММ.ГГГГ"}
        onFocus={this.date_focusHandler}
        onBlur={this.date_blurHandler}
      />
    );
  }
}

export default DateInput;
