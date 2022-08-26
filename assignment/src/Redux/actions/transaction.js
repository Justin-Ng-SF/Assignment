import calculateRewardPoints from "./calculateRewardPoints"
import transactionObject from '../../res/transactions.json'

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
      date: (new Date()).toUTCString()
    }

    
    //async call to send new transaction to db here

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

export const getTransactions = () => async dispatch => {
  dispatch({
    type: 'GET_TRANSACTION_START',
    payload: {}
  })
  try {

    //async call here
    const transactions = transactionObject.transactions

    const month1 = new Date()
    const month2 = new Date()
    const month3 = new Date()
    let month1Points = 0
    let month2Points = 0
    let month3Points = 0
    let totalRewardPoints = 0

    month1.setMonth(month1.getMonth() - 1)
    month2.setMonth(month2.getMonth() - 2)
    month3.setMonth(month3.getMonth() - 3)


    transactions.forEach((transaction) => {
      totalRewardPoints += Number(transaction.rewardPoints)

      switch (true) {
        case (Date.parse(transaction.date) > Date.parse(month1)): 
          month1Points += Number(transaction.rewardPoints)
          break
        case (Date.parse(transaction.date) > Date.parse(month2)): 
          month2Points += Number(transaction.rewardPoints)
          break
        case (Date.parse(transaction.date) > Date.parse(month3)): 
          month3Points += Number(transaction.rewardPoints)
          break
        default: 
          break
      }
    })

    dispatch({
      type: 'GET_TRANSACTION_SUCCESS',
      payload: {
        transactionList: transactions,
        totalRewardPoints,
        rewardPointsByLastThreeMonths: {
          month1Points,
          month2Points,
          month3Points
        },
        lastUpdated: (new Date()).toUTCString()
      }
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'GET_TRANSACTION_FAIL',
      payload: error
    })
  }
}