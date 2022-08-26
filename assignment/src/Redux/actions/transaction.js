export const confirmTransaction = transactionInfo => async dispatch => {
  dispatch({
    type: 'CONFRIRM_TRANSACTION_START',
    payload: {}
  })
  try {
    if (isNaN(transactionInfo) || transactionInfo===0) {
      throw new Error('Input is not a number')
      
    }

    dispatch({
      type: 'CONFRIRM_TRANSACTION_SUCCESS',
      payload: transactionInfo
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'CONFRIRM_TRANSACTION_FAIL',
      payload: {
        error
      }
    })
  }
}