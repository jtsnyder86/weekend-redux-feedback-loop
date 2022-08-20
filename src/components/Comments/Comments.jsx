import React from "react";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'


function Comments() {

    const [addFeedback, setAddFeedback] = useState('');
    const dispatch = useDispatch();
    const history = useHistory('');

   

    const submitComment = (event) => {
        event.preventDefault();
        console.log(addFeedback);
        dispatch({
            type: "SET_COMMENT",
            payload: addFeedback
        }); history.push('/review')
    }

    return (
        <>
        <h1>How are you feeling today?</h1>
        <form onSubmit={(event) => submitComment(event)}>
            <input
            onChange={(event) => setAddFeedback (event.target.value)} 
            type="text"
            placeholder="Tell me what's on your mind..." 
            value={addFeedback.comment}
            />

            <button type="submit">Next</button>
        </form>
        </>

    )

}

export default Comments