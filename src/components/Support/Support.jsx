import React from "react";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'


function Support() {

    const [addFeedback, setAddFeedback] = useState('');
    const dispatch = useDispatch();
    const history = useHistory('');

   

    const submitSupport = (event) => {
        event.preventDefault();
        console.log(addFeedback);
        dispatch({
            type: "SET_SUPPORT",
            payload: addFeedback
        }); history.push('/comments')
    }

    return (
        <>
        <h1>How are you supported today?</h1>
        <form onSubmit={(event) => submitSupport(event)}>
            <input
            onChange={(event) => setAddFeedback (event.target.value)} 
            type="number"
            min={1}
            max={5} 
            placeholder="😞-1 😕-2 😐-3 🙂-4 😀-5" 
            value={addFeedback.support}
            required/>

            <button type="submit">Next</button>
        </form>
        </>

    )

}

export default Support