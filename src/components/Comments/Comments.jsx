import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core'


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
            <h1>How are you commenting today?</h1>
            <form onSubmit={(event) => submitComment(event)}>
                <TextField
                    id="inputComment"
                    onChange={(event) => setAddFeedback(event.target.value)}
                    type="text"
                    label="Tell me what's on your mind..."
                    value={addFeedback.comment}
                />
                <br />
                <Button
                    id='button'
                    variant='contained'
                    color='primary'
                    type="submit">Next</Button>
            </form>
        </>

    )

}

export default Comments