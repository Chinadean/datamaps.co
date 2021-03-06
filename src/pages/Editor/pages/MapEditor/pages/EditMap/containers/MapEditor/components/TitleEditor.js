import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TitleEditor extends Component {
  constructor(props) {
    super(props)
    this.handleNewValue = this.handleNewValue.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)

    this.state = { value: this.props.text }
  }

  handleNewValue(newValue) {
    this.setState({ value: newValue })
    this.props.onChange(newValue)
  }

  handleChange(e) {
    this.handleNewValue(e.target.value)
  }

  handleOnBlur(e) {
    this.handleNewValue(e.target.value.trim())
  }

  render() {
    return (
      <input
        style={{ width: '100%' }}
        type="text"
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.handleOnBlur}
      />
    )
  }
}

TitleEditor.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}
