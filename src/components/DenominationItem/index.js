// Write your code here
import './index.css'

const DenominationItem = ({value, onClick}) => (
  <button className="denomination-item" onClick={onClick}>
    {value}
  </button>
)

export default DenominationItem
