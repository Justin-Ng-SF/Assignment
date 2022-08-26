import { connect } from 'react-redux'

import Transaction from "../Transaction/Transaction"

import * as transaction from '../../Redux/actions/transaction'

const TransactionList = () => {
  return (
    <div className='TransactionList'>
      <h2>Transactions</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    transactionList: state.customer.transactionList
  }
}

export default connect(mapStateToProps, null)(TransactionList)