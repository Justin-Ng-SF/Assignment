import { Component } from 'react'

class Transaction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transaction: {}
    }
  }

  render() {
    return (
      <div className='Transaction transactionContainer'>
        <span>{this.props.transaction.id}</span>
        <span>{this.props.transaction.transactionValue}</span>
        <span>{this.props.transaction.rewardPoints}</span>
        <span>{this.props.transaction.date}</span>
      </div>
    )
  }
}

export default Transaction

