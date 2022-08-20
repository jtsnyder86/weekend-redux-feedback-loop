import React from "react";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'


function Review() {

    const review = useSelector ((store) => store.feedbackReducer)

    return (
        <>
        <h1>Review</h1>
        <p>Feeling: {review.feeling}</p>
        <p>Understanding: {review.understanding}</p>
        <p>Support: {review.support}</p>
        <p>Comments: {review.comments}</p>
        </>
    )
}

export default Review