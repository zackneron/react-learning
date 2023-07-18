import React, {Fragment, useState} from 'react';

function CounterCard(){
    let [state, setState] = useState({
        count: 0
    });

    let incrCounter = () => {
        setState(state =>({
            count: state.count + 1
        }));
    };
    let decrCounter = () => {
        setState(state =>({
            count: state.count - 2
        }));
    };

    return(
        <Fragment>
            <h2>{state.count}</h2>
            <button onClick={incrCounter}>Increment</button>
            <button onClick={decrCounter}>Decrement</button>
        </Fragment>
    )
}

export default CounterCard;