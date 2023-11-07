import React, { useState } from 'react';
import { decrement, increment } from '../slice/counter.slice';
import { useDispatch, useSelector } from 'react-redux';

function Counter(props) {
    const c1 = useSelector(state => state.counetr)

    const dispatche = useDispatch()

    const handleIncrement = () => {
        // dispatche(increment())
        dispatche(increment())
    }

    const handleDecrement = () => {
        dispatche(decrement())
    }
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            {c1.count}
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Counter;