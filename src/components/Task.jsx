import styled from "styled-components"
import { useTaskStore } from "../stores/useTaskStore"
import { FaTrashAlt, FaCheckCircle, FaRegCircle } from "react-icons/fa"


export const Task = ({ id, task, completed }) => {
  const deleteTask = useTaskStore(state => state.deleteTask)
  const toggleComplete = useTaskStore(state => state.toggleComplete)

  return (
    <TaskWrapper>
      <TaskContent>
        <TaskMessage completed={completed}>{task}</TaskMessage>
        <Icons>
          <IconButton
            aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
            onClick={() => toggleComplete(id)}
          >
            {completed ? <FaCheckCircle size={18}/> : <FaRegCircle size={18}/>}
          </IconButton>
          <IconButton
            aria-label="Delete task"
            onClick={() => deleteTask(id)}
          >
            <FaTrashAlt size={18} />
          </IconButton>
        </Icons>

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

const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
`

const IconButton = styled.button`
  background: #1c55e4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem;
  vertical-align: middle;

  &:hover {
    opacity: 0.8;
  }
`