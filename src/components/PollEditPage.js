import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import PollForm from './PollForm'

export default function PollEditPage({ onSubmit, pollList }) {
    let { pollId } = useParams()
    pollId = parseInt(pollId)

    const poll = pollList.find(poll => poll.id === pollId)

    return (
        <Row>
            <Col>
                <h2 className='my-3'>Edit Poll</h2>
                <PollForm
                    onSubmit={onSubmit}
                    editId={pollId}
                    initialValues={{ question: poll.question, answer1: poll.answers[0], answer2: poll.answers[1], answer3: poll.answers[2], answer4: poll.answers[3] }}
                    buttonLabel='Save'
                />
            </Col>
        </Row>
    )
}
