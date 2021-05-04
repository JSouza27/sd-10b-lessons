import React, { Component } from 'react';

class Input extends Component {

    render() {
      const { type, value, handleChange} = this.props;

      return(
        <input
          type={type}
          name={type}
          onChange={handleChange}
          value={value}
        />
      );
    }
}

export default Input;
