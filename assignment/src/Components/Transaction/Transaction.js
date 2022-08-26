const Transaction = ({ props }) => {
  console.log(props)
  return (
    <div className='Transaction transactionContainer'>
      <span>{props.id}</span>
      <span>{props.transactionValue}</span>
      <span>{props.rewardPoints}</span>
      <span>{props.date}</span>
    </div>
  )
}

export default Transaction