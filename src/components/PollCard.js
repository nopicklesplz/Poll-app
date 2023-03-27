import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import ResponseBar from './ResponseBar'

export default function PollCard({ poll, responseList, onDelete }) {
    const navigate = useNavigate()

    const pollResponses = responseList.filter(response => response.pollId === poll.id)

    return (
        <div className='border rounded p-2 mb-3 me-3'>
            <h4>{poll.question}</h4>
            <ResponseBar answer={poll.answers[0]} allResponses={pollResponses} />
            <ResponseBar answer={poll.answers[1]} allResponses={pollResponses} />
            <ResponseBar answer={poll.answers[2]} allResponses={pollResponses} />
            <ResponseBar answer={poll.answers[3]} allResponses={pollResponses} />
            <Button color='danger' onClick={() => onDelete(poll.id)}>Delete</Button>
            <Button className='ms-2' color='info' onClick={() => navigate('/polls/' + poll.id + '/edit')}>Edit</Button>
            <Button className='ms-2' color='primary' onClick={() => navigate('/polls/' + poll.id + '/vote')}>Vote</Button>
        </div>
    )
}
