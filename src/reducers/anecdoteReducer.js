import anecService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANEC':
      return [...state, action.data]
    case 'VOTE':
      const id = action.id
      const anecToChange = state.find(a => a.id === id)
      const changed = {
        ...anecToChange,
        votes: anecToChange.votes + 1
      }
      return state.map(anec => anec.id !== id ? anec : changed)
    case 'INIT_ANECS':
      return action.data
    default: return state
  }
}

export const createAnecdote = data => {
  return async dispatch => {
    const newAnec = await anecService.createNew(data)
    await dispatch({
      type: 'NEW_ANEC',
      data: newAnec,
    })
  }
}

export const Addvote = (anec) => {
  return async dispatch => {
    await dispatch({
      type: 'VOTE',
      id: anec.id
    })
    anecService.addVote(anec)
  }
}

export const initializeAnecs = () => {
  return async dispatch => {
    const anecs = await anecService.getAll()
    dispatch({
      type: 'INIT_ANECS',
      data: anecs,
    })
  }
}

export default reducer