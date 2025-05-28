import styled from "styled-components"
import { useTaskStore } from "../stores/useTaskStore"
import { Task } from "./Task"

export const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks)
  const total = tasks.length
  const uncompleted = tasks.filter(t => !t.completed).length

  if (total === 0) {
    return (
      <EmptyState>
        <p>No tasks yet. Add your first one!</p>
      </EmptyState>
    )
  }

  return (
    <Section>
      <TaskSummary>
      Total tasks: {total} | Uncompleted: {uncompleted}
      </TaskSummary>
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  max-width: 500px;
`

const TaskSummary = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
`

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  font-style: italic;
  color: #777;
`
