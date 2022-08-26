/*
Display list of all transactions owned by customer
*/

import { Component } from 'react'
import { connect } from 'react-redux'

import Transaction from "../Transaction/Transaction"

import './style.css'

import * as transaction from '../../Redux/actions/transaction'

class TransactionList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.getTransactions()
  }

  render() {
    return (
      <div className='TransactionList'>
        <h2>Transactions</h2>
        <div className='transactionContainer'>
          <span>Transaction ID</span>
          <span>Value</span>
          <span>Points Awarded</span>
          <span>Transaction Date</span>
        </div>
        {this.props.transactionList.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactionList: state.customer.transactionList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: () => {
      dispatch(transaction.getTransactions())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)