import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function UserShow(props) {
    return (
        <div>
            <h1>{props.user && props.user.name}</h1>
            {
                props.posts && props.posts.map(post => {
                    return <div key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></div>
                })
            }

        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log('i ran')
    return {
        user: state.users.find(user => user.id == props.match.params.id),
        posts: state.posts.filter(post => post.userId == props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)