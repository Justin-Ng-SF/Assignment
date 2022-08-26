/*
Display list of all transactions owned by customer
*/

import { useEffect } from 'react'
import { connect } from 'react-redux'

import Transaction from "../Transaction/Transaction"

import './style.css'

import * as transaction from '../../Redux/actions/transaction'

const TransactionList = ({ transactionList, getTransactions }) => {
  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <div className='TransactionList'>
      <h2>Transactions</h2>
      <div className='transactionContainer'>
        <span>Transaction ID</span>
        <span>Value</span>
        <span>Points Awarded</span>
        <span>Transaction Date</span>
      </div>
      {transactionList.map((transaction, index) => (
        <Transaction key={index} props={transaction} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
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