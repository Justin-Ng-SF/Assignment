import CreateTransaction from "../CreateTransaction/CreateTransaction"
import TransactionList from "../TransactionList/TransactionList"


const Main = () => {
  return (
    <div className='Main'>
      <h3>
        <span>
          1
        </span>
        <span>
          2
        </span>
        <span>
          3
        </span>
      </h3>
      <CreateTransaction/>
      <TransactionList/>
    </div>
  )
}



export default Main