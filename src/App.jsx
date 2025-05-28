import { GlobalStyle } from "./styles/GlobalStyle"
import { Header } from "./components/Header"
import { TaskForm } from "./components/TaskForm"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TaskForm />
    </>
  )
}
