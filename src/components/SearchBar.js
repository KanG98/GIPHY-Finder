//SearchField Component: has state with search field input
import React, { Component } from "react"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.setKeyword(this.state.value)
  }

  handleFilter(event){
    let elemId = event.target.id
    const rating = this.props.rating
    if(elemId === "p-rate"){
      let newRating = [...rating]
      newRating[0] = newRating[0]==="p" ? "" : "p"
      this.props.setRating(newRating)
    }
    if(elemId === "g-rate"){
      let newRating = [...rating]
      newRating[1] = newRating[1]==="g" ? "" : "g"
      this.props.setRating(newRating)
    }
    if(elemId === "pg-rate"){
      let newRating = [...rating]
      newRating[2] = newRating[2]==="pg" ? "" : "pg"
      this.props.setRating(newRating)
    }
  }

  render() {
    return (
      <div>

        <input style ={styles.inputButton}
          type="text"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>Search</button>
        <div style={styles.filterCheckbox}>
          <input type="checkbox" id="p-rate" onClick={this.handleFilter} checked={this.props.rating[0] === 'p'}/><label>P</label>
          <input type="checkbox" id="g-rate" onClick={this.handleFilter} checked={this.props.rating[1] === 'g'}/><label>G</label>
          <input type="checkbox" id="pg-rate" onClick={this.handleFilter} checked={this.props.rating[2] === 'pg'}/><label>PG</label>
        </div>
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
      whiteSpace: "nowrap"
    },
    filterCheckbox:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white"
    }
    
}
