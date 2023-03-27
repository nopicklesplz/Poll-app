import React from 'react'
import { Col, Row } from 'reactstrap'
import PollForm from './PollForm'

export default function PollCreatePage({ onSubmit }) {
    return (
        <Row>
            <Col>
                <h2 className='my-3'>New Poll</h2>
                <PollForm
                    onSubmit={onSubmit}
                    initialValues={{ question: '', answer1: '', answer2: '', answer3: '', answer4: '' }}
                    buttonLabel='Create'
                />
            </Col>
        </Row>
    )
}
