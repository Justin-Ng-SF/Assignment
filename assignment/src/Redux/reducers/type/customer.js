const initState = {
  transactionList: [],
  totalRewardPoints: 0,
  rewardPointsByLastThreeMonths: {},
  lastUpdated: {}, 
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
          {transaction: payload}
        ],
        totalRewardPoints: state.totalRewardPoints+payload.rewardPoints, 
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
        transactionList: [
          ...payload.transactionList
        ],
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