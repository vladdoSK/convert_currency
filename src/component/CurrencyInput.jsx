import PropTypes from "prop-types";
import './CurrencyInput.css'

function CurrencyInput(props) {

  let map_rate = ['UAH', 'USD', 'EUR'];

  return (
    <div className="group">
      <input className="input" type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
      <select className="select" value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
        {map_rate.map((currency => ( <option value={currency}>{currency}</option> )))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;