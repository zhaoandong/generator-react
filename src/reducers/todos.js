const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(11)
      return {
        value: 8
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

let init = {
  value: 1
}

const todos = (state = init, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        value: state.value + 1
      })
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
