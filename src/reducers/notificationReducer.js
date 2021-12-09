const initialState = { value: null }

const notificationReducer = (state = initialState.value, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.noti
        default: return state
    }
}

export const notificationChange = (noti, time) => {
    let timer;
    clearTimeout(timer)
    const mil_sec = time * 1000

    return async dispatch => {
        await dispatch({
            type: 'SET_NOTIFICATION',
            noti
        })
        timer = setTimeout(() => {
            dispatch({
                type: 'SET_NOTIFICATION',
                noti: null,
            })
        }, mil_sec)
    }
}

export default notificationReducer