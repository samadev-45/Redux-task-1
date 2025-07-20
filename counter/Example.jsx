import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/Reducer';

const Example = () => {
    const count = useSelector(state => state.count );
    const dispatch=useDispatch();

    const handleincre = () =>{
        dispatch(increment())
    }
  return (
    <div>
        <p>count:{count}</p>
        <button onClick={handleincre}>Increment</button>
    </div>
  )
}

export default Example