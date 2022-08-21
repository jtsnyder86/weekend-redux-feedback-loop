import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core'


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
                <TextField
                    id="input"
                    onChange={(event) => setAddFeedback(event.target.value)}
                    type="number"
                    InputProps={{
                        inputProps: { 
                            max: 5, min: 1 
                        }
                    }}
                    // minValue={1}
                    // maxValue={5}
                    label="😞-1 😕-2 😐-3 🙂-4 😀-5"
                    value={addFeedback.support}
                    required />
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

export default Support