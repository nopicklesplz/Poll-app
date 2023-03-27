import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap'

// TODO: Allow more than two answers

export default function PollForm({ onSubmit, initialValues, editId, buttonLabel }) {
    const [questionValue, setQuestionValue] = useState(initialValues.question)
    const [answer1Value, setAnswer1Value] = useState(initialValues.answer1)
    const [answer2Value, setAnswer2Value] = useState(initialValues.answer2)
    const [answer3Value, setAnswer3Value] = useState(initialValues.answer3)
    const [answer4Value, setAnswer4Value] = useState(initialValues.answer4)

    const navigate = useNavigate();

    const handleSubmit = () => {
        const newPollData = {
            id: editId,
            question: questionValue,
            answers: [answer1Value, answer2Value, answer3Value, answer4Value]
        }
        onSubmit(newPollData)
        navigate("/")
    }

    return (
        <form>
            <FormGroup>
                <Label for='question-input'>Question</Label>
                <Input id='question-input' value={questionValue} onChange={ (event) => setQuestionValue(event.target.value) } />
            </FormGroup>
            <FormGroup>
                <Label>Answers</Label>
                <Input className='mb-2' value={answer1Value} onChange={ (event) => setAnswer1Value(event.target.value) } />
                <Input value={answer2Value} onChange={ (event) => setAnswer2Value(event.target.value) } />
                <Input className='my-2' value={answer3Value} onChange={ (event) => setAnswer3Value(event.target.value) } />
                <Input value={answer4Value} onChange={ (event) => setAnswer4Value(event.target.value) } />
            </FormGroup>
            <Button color='success' onClick={handleSubmit}>{ buttonLabel }</Button>
        </form>
    )
}
