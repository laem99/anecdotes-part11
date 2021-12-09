import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Addvote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const Anecdote = ({ anec, handleClick }) => {
  return (
    <div>
      <p>{anec.content}</p>
            has {anec.votes}
      <button name="vote" onClick={handleClick}>vote</button>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const likeAnec = async (anec) => {
    dispatch(Addvote(anec))
    dispatch(notificationChange(`You voted '${anec.content}'`, 5))
  }

  const allAnecs = useSelector(state => {
    if (state.filter !== '') {
      let filtered = state.anecs.filter(anec => {
        return anec.content.toLowerCase().includes(state.filter.toLowerCase())
      })
      return filtered
    }
    return state.anecs
  })

  return (
    <ul>
      {allAnecs.sort((a, b) => b.votes - a.votes).map(anec =>
        <Anecdote key={anec.id} anec={anec} handleClick={() => likeAnec(anec)} />
      )}
    </ul>
  )
}

export default AnecdoteList