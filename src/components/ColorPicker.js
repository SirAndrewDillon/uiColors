import React, { Component, Fragment } from 'react'
import { ChromePicker } from 'react-color'

class ColorPicker extends Component {
  state = {
    displayColorPicker: false
  }

  handleClick = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    })
  }

  handleClose = () => {
    this.setState({
      displayColorPicker: false
    })
  }

  render() {
    return (
      <div className="color-picker-container">
        <button 
          className="color-picker-button" 
          style={{ background: this.props.color }}
          onClick={this.handleClick}>
            {this.props.color}
        </button>
        {this.state.displayColorPicker ? 
          <Fragment>
            <div className="color-picker-cover" onClick={this.handleClose} /> 
            <ChromePicker 
              color={this.props.color}
              onChangeComplete={color => this.props.handleColor(color.hex)}
              className="color-picker"/> 
          </Fragment>
          : null}
      </div>
    )
  }
}

export default ColorPicker
