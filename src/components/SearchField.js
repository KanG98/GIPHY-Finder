//SearchField Component: has state with search field input
import React, { Component } from "react"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.term })
  }

  handleSubmit(event) {
    console.log(event.target.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>

        <input style ={styles.inputButton}
          type="text"
          value={this.state.term}
          onClick={this.handleChange}
        />
        <button type="submit">Search</button>
      </div>
    )
  }
}
export default SearchBar
const styles = {
    inputButton:{
    overflow: "hidden",
    width: "90%",
    height: "100%",
    whiteSpace: "nowrap",




     },
   }
