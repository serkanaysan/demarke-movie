import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../stores/Favorite'

const HomePage = ({ }) => {

    const count = useSelector(state => state.favorite.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 className="text-base font-bold underline">
                {count}
            </h1>

            <button onClick={() => dispatch(decrement())}>Azalt</button>
            <button onClick={() => dispatch(increment())}>Azalt</button>
            <button onClick={() => dispatch(incrementByAmount(4))}>Azalt</button>
        </div>
    )
}

export default HomePage