import styled from "styled-components"
import { useState } from "react"
import { useTaskStore } from "../stores/useTaskStore"


export const TaskForm = () => {
  const [task, setTask] = useState("")
  const createTask = useTaskStore(state => state.createTask)

  const handleSubmit = e => {
    e.preventDefault()
    if (task.trim() === "") return
    createTask(task)
    setTask("")
  }

  return (
    <PageWrapper>
    <Form onSubmit={handleSubmit}>
      <Textarea 
      value={task} 
      onChange={e => setTask(e.target.value)} 
      placeholder="Write your task here..." 
      aria-label="New task" />
      <Button type="submit">Add Task</Button>
    </Form>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  padding: 1rem;
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 1rem;
`

const Textarea = styled.textarea`
  width: 100%;  
  padding: 1rem;
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
  box-sizing: border-box; 
`

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: none;
  background: #1c55e4;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
