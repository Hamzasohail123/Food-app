import React, { useContext } from 'react';
import { cartContext } from '../../Context/Context';
import './Cart.css'

function Cart() {
  const GlobalState = useContext(cartContext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  const totalAmount = state.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0).toFixed(2);
  // Add your custom cart icon component here
  return (
    <div className='cart'>
      {
        state.map((item, index)=>{
          return (
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <p>{item.itemName}</p>
              <p>{String(item.quantity * item.price)}</p>

              <div className="quantity">
                <button onClick={()=>dispatch({type: 'INCREASE',payload: item })}>+</button>
                <p>{item.quantity}</p>
                <button onClick={()=>dispatch({type: 'DECREASE',payload: item })}>-</button>
              </div>
              <h2 onClick={()=>dispatch({type:'REMOVE', payload: item})}>x</h2>
            </div>
          )
        }) 
      }    
      {
        state.length > 0 && <div className='total'> 
        <p>{totalAmount}</p>  
        </div>
      } 
    </div>
  );
}

export default Cart;
