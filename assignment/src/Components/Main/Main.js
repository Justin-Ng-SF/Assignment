import CreateTransaction from "../CreateTransaction/CreateTransaction"
import TransactionList from "../TransactionList/TransactionList"


const Main = () => {
  return (
    <div className='Main'>
      <CreateTransaction/>
      <TransactionList/>
    </div>
  )
}

export default Main