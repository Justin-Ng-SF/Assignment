import { Component } from 'react'
import { connect } from 'react-redux'

import CreateTransaction from "../CreateTransaction/CreateTransaction"
import TransactionList from "../TransactionList/TransactionList"

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props)
    return (
      <div className='Main'>
      <h3>
        <span>
         1
        </span>
        <span>
          2
        </span>
        <span>
          3
        </span>
      </h3>
      <CreateTransaction/>
      <TransactionList/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    month1Points: state.customer.rewardPointsByLastThreeMonths.month1Points,
    month2Points: state.customer.rewardPointsByLastThreeMonths.month2Points,
    month3Points: state.customer.rewardPointsByLastThreeMonths.month3Points
  }
}

export default connect(mapStateToProps, null)(Main)