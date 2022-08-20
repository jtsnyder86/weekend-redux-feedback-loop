import React from "react";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'

function Feeling() {

    const [addFeedback, setAddFeedback] = useState('');
    const dispatch = useDispatch();
    const history = useHistory('');

   

    const submitFeeling = (event) => {
        event.preventDefault();
        console.log(addFeedback);
        dispatch({
            type: "SET_FEELING",
            payload: addFeedback
        }); history.push('/understanding')
    }

    return (
        <>
        <h1>How are you feeling today?</h1>
        <form onSubmit={(event) => submitFeeling(event)}>
            <input
            onChange={(event) => setAddFeedback (event.target.value)} 
            type="number"
            min={1}
            max={5} 
            placeholder="😞-1 😕-2 😐-3 🙂-4 😀-5" 
            value={addFeedback.feeling}
            required/>

            <button type="submit">Next</button>
        </form>
        </>

    )
}

export default Feeling