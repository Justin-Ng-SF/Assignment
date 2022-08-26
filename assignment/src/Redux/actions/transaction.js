import calculateRewardPoints from "./calculateRewardPoints";

export const confirmTransaction = transactionValue => async dispatch => {
  dispatch({
    type: 'CONFRIRM_TRANSACTION_START',
    payload: {}
  })
  try {
    if (isNaN(transactionValue) || !transactionValue || !transactionValue<0) {
      throw new Error('Invalid Input')
    }

    const transaction = {
      //for the sake of the assignment to assign random ids
      id: Math.random().toString(16).slice(2),
      transactionValue,
      rewardPoints: calculateRewardPoints(transactionValue),
      date: (new Date().toUTCString).toString()
    }

    //async call here

    dispatch({
      type: 'CONFRIRM_TRANSACTION_SUCCESS',
      payload: transaction
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