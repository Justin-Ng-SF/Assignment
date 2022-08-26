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
    return (
      <div className='Main'>
      <h3>
        <span>
          {`Month 1 Points: ${this.props.month1Points} `}
        </span>
        <span>
        {`Month 2 Points: ${this.props.month2Points} `}
        </span>
        <span>
        {`Month 3 Points: ${this.props.month3Points} `}
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