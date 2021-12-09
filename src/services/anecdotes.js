import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const resp = await axios.get(baseUrl)
    return resp.data
}

const createNew = async (content, id) => {
    const obj = { content, votes: 0, id }
    const resp = await axios.post(baseUrl, obj)
    return resp.data
}

const addVote = async (anec) => {
    const copy = {...anec, votes: anec.votes+1}
    const resp = await axios.put(`${baseUrl}/${copy.id}`, copy)
    return resp.data
}

export default { getAll, createNew, addVote }