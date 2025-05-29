import React, { Suspense, lazy } from "react"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Header } from "./components/Header"

// Lazy load components
const TaskForm = lazy(() => import("./components/TaskForm"))
const TaskList = lazy(() => import("./components/TaskList"))

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <TaskForm />
      <TaskList />
      </Suspense>
    </>
  )
}
