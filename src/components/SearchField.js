//SearchField Component: has state with search field input
import React, { Component } from "react"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }

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
      </div>
    )
  }
}
export default SearchBar
const styles = {
    inputButton:{
      width: "100%",
      height: "100%",



     },
   }
