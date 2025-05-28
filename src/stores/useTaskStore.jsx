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

  createTask: (task) => {
    const newTask = {
      id: Date.now(),
      task,
      completed: false
    }

    set(state => ({ tasks: [newTask, ...state.tasks] }))
  },

  deleteTask: (id) => {
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }))
  },

  toggleComplete: (id) => {
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }))
  },

  clearTasks: () => set({ tasks: [] }),

}))
