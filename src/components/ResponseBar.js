import React from 'react'
import { Progress } from 'reactstrap'

export default function ResponseBar({ answer, allResponses }) {

    const numResponsesForAnswer = allResponses.filter(response => response.answer === answer).length
    const percentage = (numResponsesForAnswer / allResponses.length) * 100

    return (
        <div>
            <span>{answer}</span><Progress className='mb-3' animated value={percentage} />
        </div>
    )
}
