export const confirmTransaction = sortType => async dispatch => {
  dispatch({
    type: 'CONFRIRM_TRANSACTION_START',
    payload: {}
  })
  try {
    dispatch({
      type: 'CONFRIRM_TRANSACTION_SUCCESS',
      payload: sortType
    })
  } catch (error) {
    dispatch({
      type: 'CONFRIRM_TRANSACTION_FAIL',
      payload: { errorMsg: error.response.statusText, status: error.response.status }
    })
  }
}