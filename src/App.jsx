import { GlobalStyle } from "./styles/GlobalStyle"
import { Header } from "./components/Header"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TaskForm />
      <TaskList />
    </>
  )
}
