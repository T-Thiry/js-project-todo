import { create } from "zustand"


const initialState = {
  tasks: [
    {
      id: 1,
      task: "My first task...",
      completed: false
    }
  ]
}

export const useTaskStore = create((set) => ({
  ...initialState,
}))
