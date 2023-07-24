// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balancevalue: 2000}

  handleWithdrawal = amount => {
    this.setState(prevState => ({
      balancevalue: prevState.balancevalue - amount,
    }))
  }

  render() {
    const {denominationsList} = this.props

    const {balancevalue} = this.state
    return (
      <div className="main">
        <div className="bluediv">
          <div className="name">
            <p className="s">S</p>
            <p className="head">Sarah Williams</p>
          </div>
          <div className="balancerow">
            <p className="balanceclr">Your Balance</p>
            <div>
              <p className="text">{balancevalue}</p>
              <p className="balanceclr">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdrawtext">Withdraw</p>
            <p className="sumtext">CHOOSE SUM (IN RUPEES)</p>
            <div className="add">
              <ul className="denomination-list">
                {denominationsList.map(denomination => (
                  <li key={denomination.id}>
                    <DenominationItem
                      value={denomination.value}
                      onClick={() => this.handleWithdrawal(denomination.value)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
