import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import axios from "axios";
// import DataGrid from '@mui/x-data-grid';
import {Button} from '@material-ui/core'


function Review() {

    const history = useHistory();
    const dispatch = useDispatch();
    const review = useSelector((store) => store.feedbackReducer);

    const objectToSend = {
        feeling: review.feeling,
        understanding: review.understanding,
        support: review.support,
        comments: review.comments,
    }

    const handleSubmit = () => {
        axios.post('/api/feedback', objectToSend)
            .then(response => {
                console.log(response.data);
                alert('Your submission is complete!');
                dispatch({
                    type: ''
                });
                history.push('/');
            }).catch(err => {
                console.log(err);
            })





    }

    return (
        <>
            <h1>Review</h1>            
            <p>Feeling: {review.feeling}</p>
            <p>Understanding: {review.understanding}</p>
            <p>Support: {review.support}</p>
            <p>Comments: {review.comments}</p>
            <Button 
            onClick={handleSubmit}
            variant='contained'
            color='primary'>Submit!</Button>
        </>
    )
}

export default Review