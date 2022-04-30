// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onClickClear = () => {
    this.setState({searchInput: ''})
  }

  onChangeSearchInput = event => {
    const {value} = event.target
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="container">
        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
        />
        <div className="text-input-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="labelInput" className="description">
            Enter the phrase
          </label>
          <input
            id="labelInput"
            className="input"
            type="text"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="Enter the phrase"
          />
          <br />
          <div className="button">
            <p onClick={this.onClickClear}>
              No.of letters: {searchInput.length}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
