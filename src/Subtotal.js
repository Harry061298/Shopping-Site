import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                   <p>
                       Subtotal ({basket.length} item): {value}
                   </p>
                   <small className="subtotal__gift"><input type="Checkbox" /> This Order contains a Gift</small>
                </>

              ) }
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
              />
              <button onClick={e => history.push('/payment')}>Proceed To Checkout</button>


        </div>
        
            
       
    )
}

export default Subtotal
