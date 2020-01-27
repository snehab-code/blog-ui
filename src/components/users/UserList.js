import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function UserList(props) {
    return (
        <div>
            <h1>Listing users - </h1>
            <div>
                {
                    props.users.map(user => {
                        return <div>
                            <Link to={`users/${user.id}`}>{user.name}</Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UserList)