/*
Display list of all transactions owned by customer
*/

import { connect } from 'react-redux'

import Transaction from "../Transaction/Transaction"

import './style.css'


const TransactionList = ({ transactionList }) => {
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
  return {
    transactionList: state.customer.transactionList
  }
}

export default connect(mapStateToProps, null)(TransactionList)