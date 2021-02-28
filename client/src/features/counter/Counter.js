import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  selectCountNot
} from './counterSlice';
import styles from './Counter.module.css';

export default function Counter() {
  const count = useSelector(selectCount);
  const countNot = useSelector(selectCountNot);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');


  return (
    <div>    
      <div className={styles.row}>
        {/* <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button> */}
        <span className={styles.value}>{count} going</span>
        <span className={styles.value}>{countNot} not going</span>
        {/* <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button> */}
      </div>
      {/* <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        /> */}
        {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button> */}
      {/* </div> */}
    </div>
  );
}
