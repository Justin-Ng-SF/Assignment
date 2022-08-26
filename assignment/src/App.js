import Main from './Components/Main/Main'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    )
  }
}

export default App
