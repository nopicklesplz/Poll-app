import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'reactstrap'
import HomePage from './components/HomePage'
import TopBar from './components/TopBar'
import VotePage from './components/VotePage'
import { TestPolls, TestResponses } from './Test_Data'
import PollCreatePage from './components/PollCreatePage'
import PollEditPage from './components/PollEditPage'

let nextPollId = 5;
let nextResponseId = 20;

export default function App() {
  const [pollList, setPollList] = useState(TestPolls)
  const [responseList, setResponseList] = useState(TestResponses)

  const deletePoll = (idToDelete) => {
    setPollList( pollList.filter(poll => poll.id !== idToDelete) )
  }

  const createPoll = (newPollData) => {
    const newPoll = {
      ...newPollData,
      id: nextPollId++
    }
    setPollList(pollList.concat(newPoll))
  }

  const updatePoll = (updatedPollData) => {
    setPollList(pollList.map(poll => (poll.id === updatedPollData.id) ? {...poll, ...updatedPollData} :poll))
  }

  const createResponse = (newResponseData) => {
    const newResponse = {
      ...newResponseData,
      id: nextResponseId++
    }
    setResponseList(responseList.concat(newResponse))
  }

  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage pollList={pollList} onDelete={deletePoll} responseList={responseList} />} />
          <Route path ="/polls/:pollId/vote" element={<VotePage pollList={pollList} onRespond={createResponse} />} />
          <Route path ="/polls/new" element={<PollCreatePage onSubmit={createPoll} />} />
          <Route path ="/polls/:pollId/edit" element={<PollEditPage onSubmit={updatePoll} pollList={pollList} />} />
        </Routes>
      </Container>
    </>
  )
}
