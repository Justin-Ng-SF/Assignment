import { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';

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

      <div className = 'TransactionList' >
        <h2>Transactions</h2>
        <div className='transactionContainer'>
          <span>Transaction ID</span>
          <span>Value</span>
          <span>Points Awarded</span>
          <span>Transaction Date</span>
        </div>
        {this.props.isLoading ?
          <Spinner /> :
          <div>
            {this.props.transactionList.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
            ))}
          </div>
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isLoading: state.customer.isLoading,
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