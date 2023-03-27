import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Col, Row } from 'reactstrap'

export default function VotePage({ pollList, onRespond }) {
    let { pollId } = useParams()
    pollId = parseInt(pollId)

    const poll = pollList.find(poll => poll.id === pollId)

    const createResponse = (answer) => {
        const newResponseData = {
            pollId: poll.id,
            answer: answer
        }
        onRespond(newResponseData)
    }

    return (
        <Row>
            <Col>
                <h2 className='mb-4'>{ poll.question }</h2>
                <div>
                    <Button color='primary' onClick={() => createResponse(poll.answers[0])}>{ poll.answers[0] }</Button>
                </div>
                <div className='my-2'>
                    <Button color='primary' onClick={() => createResponse(poll.answers[1])}>{ poll.answers[1] }</Button>
                </div>
                <div>
                    <Button color='primary' onClick={() => createResponse(poll.answers[2])}>{ poll.answers[2] }</Button>
                </div>
                <div className='my-2'>
                    <Button color='primary' onClick={() => createResponse(poll.answers[3])}>{ poll.answers[3] }</Button>
                </div>              
            </Col>
        </Row>
    )
}
