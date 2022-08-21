import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core'



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
                    value={addFeedback.understanding}
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

export default Understanding