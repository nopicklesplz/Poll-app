import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Row } from 'reactstrap'
import PollCard from './PollCard'

export default function HomePage({ pollList, onDelete, responseList }) {
    const navigate = useNavigate()

    return (
        <>
            <Row className='my-4'>
                <Col>
                    <Button color="primary" onClick={() => navigate("/polls/new")}>New Poll</Button>
                </Col>
            </Row>
            <Row>
                {pollList.map(poll => (
                    <Col xs={6} key={poll.id}>
                        <PollCard poll={poll} onDelete={onDelete} responseList={responseList} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
