const initState = {
  transactionList: [],
  totalRewardPoints: 0,
  rewardPointsByLastThreeMonths: {
    month1Points: 0,
    month2Points: 0,
    month3Points: 0
  },
  lastUpdated: '', 
  isLoading: false,
  error: ''
}

const customer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'CONFRIRM_TRANSACTION_START':
      return {
        ...state,
        isLoading: true
      }
    case 'CONFRIRM_TRANSACTION_SUCCESS':
      return {
        ...state,
        transactionList: [
          ...state.transactionList, 
          {...payload}
        ],
        totalRewardPoints: state.totalRewardPoints + payload.rewardPoints, 
        rewardPointsByLastThreeMonths: {
          ...state.rewardPointsByLastThreeMonths,
          month1Points: state.rewardPointsByLastThreeMonths.month1Points + payload.rewardPoints
        },
        lastUpdated: payload.date, 
        isLoading: false
      }
    case 'CONFRIRM_TRANSACTION_FAIL':
      return {
        ...state,
        error: payload.error,
        isLoading: false
      }
    case 'GET_TRANSACTION_START':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_TRANSACTION_SUCCESS':
      return {
        ...state,
        transactionList: payload.transactionList,
        totalRewardPoints: payload.totalRewardPoints, 
        rewardPointsByLastThreeMonths: payload.rewardPointsByLastThreeMonths,
        lastUpdated: payload.lastUpdated,
        isLoading: false
      }
    case 'GET_TRANSACTION_FAIL':
      return {
        ...state,
        error: payload.error,
        isLoading: false
      }
    
    default: 
      return state
  }
}

export default customer