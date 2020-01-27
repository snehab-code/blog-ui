import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function PostList(props) {
    return (
        <div>
            {
                props.posts.map(post => {
                    return (
                        <div>
                            <Link to={`/posts/${post.id}`}> {post.title} </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostList)