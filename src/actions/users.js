import axios from 'axios'

const setUsers = (users) => {
    return {type: 'SET_USERS', payload: users}
}

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(setUsers(users))
            })
            .catch(err => {
                console.log('startGetUsers error', err)
            })
    }
}
