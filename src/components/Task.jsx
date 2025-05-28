import styled from "styled-components"


export const Task = ({ id, task, completed }) => {
  return (
    <TaskWrapper>
      <TaskContent>
        <TaskMessage completed={completed}>{task}</TaskMessage>
      </TaskContent>
    </TaskWrapper>
  )
}

const TaskWrapper = styled.div`
  max-width: 500px;
  padding: 0.7rem;
  margin-bottom: 1rem;
  background-color: #ededfb;
  border-radius: 8px;
  border-left: 3px solid #1c55e4;
`

const TaskContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TaskMessage = styled.p`
  margin: 0;
  flex: 1;
  padding-right: 1rem;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`