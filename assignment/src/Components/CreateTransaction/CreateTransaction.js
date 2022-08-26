/*
for the sole purpose of adding custom transactions
*/

import { connect } from 'react-redux'

import * as transaction from '../../Redux/actions/transaction'

import './style.css'

const CreateTransaction = ({confirmTransaction}) => {
  return (
    <div className='CreateTransaction'>
      <form
        className='transactionForm'
        onSubmit={(e) => {
          e.preventDefault()
          confirmTransaction(Number(e.target.transactionInput.value))
        }}
      >
        <input
          className="transactionInput"
          type="number"
          id="transactionInput" />
        <input
          className="confirmTransactionButton"
          type="submit"
          value="Confirm Transaction"
          />
        </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    confirmTransaction: transactionInfo => {
      dispatch(transaction.confirmTransaction(transactionInfo))
    },
  };
};
export default connect(null, mapDispatchToProps)(CreateTransaction)