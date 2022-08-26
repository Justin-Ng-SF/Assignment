import { connect } from 'react-redux'

import * as transaction from '../../Redux/actions/transaction'

const CreateTransaction = () => {
  return (
    <div className='CreateTransaction'>
      <input className="transactionInput" type="number" id="transactionInput" />
      <input
        className="confirmTransactionButton"
        type="submit"
        value="Confirm Transaction"
      />
    </div>
  )
}

export default CreateTransaction