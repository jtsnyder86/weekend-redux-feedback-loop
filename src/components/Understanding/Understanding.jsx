import React from "react";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'


function Understanding() {

    const [addFeedback, setAddFeedback] = useState('');
    const dispatch = useDispatch();
    const history = useHistory('');

   

    const submitUnderstanding = (event) => {
        event.preventDefault();
        console.log(addFeedback);
        dispatch({
            type: "SET_UNDERSTANDING",
            payload: addFeedback
        }); history.push('/support')
    }

    return (
        <>
        <h1>How are you understanding today?</h1>
        <form onSubmit={(event) => submitUnderstanding(event)}>
            <input
            onChange={(event) => setAddFeedback (event.target.value)} 
            type="number"
            min={1}
            max={5} 
            placeholder="😞-1 😕-2 😐-3 🙂-4 😀-5" 
            value={addFeedback.understanding}
            required/>

            <button type="submit">Next</button>
        </form>
        </>

    )
}

export default Understanding