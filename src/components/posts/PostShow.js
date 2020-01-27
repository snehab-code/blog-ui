import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startGetComments} from '../../actions/comments'

class PostShow extends React.Component{
    
    componentDidMount() {
        this.props.dispatch(startGetComments(this.props.match.params.id))
    }

    render(){
        console.log(this.props.comments, 'comments')
    return (
        <div style={{textAlign:"center"}}>
            <h2>User: {this.props.user && this.props.user.name}</h2>
            <h3>{this.props.post && this.props.post.title}</h3>
            <p>{this.props.post && this.props.post.body}</p>
            <h3>Comments</h3>
            {
                Object.keys(this.props.comments).length > 0 && this.props.comments.map(comment => {
                    if (comment.postId == this.props.match.params.id) {
                    return (
                        <div key={comment.id}>
                            {comment.body}
                        </div>
                    )
                    } else {
                        return ""
                    }
                })
            }
            {
            this.props.user && <Link to={`/users/${this.props.user.id}`}>{this.props.user.name}</Link>
            }
        </div>
    )
    }
}


const mapStateToProps = (state, props) => {
    return {
        post: state.posts.find(post => post.id == props.match.params.id),
        user: state.users.find(user => {
            if (Object.keys(state.posts).length > 0) {
                const userId = state.posts.find(post => post.id == props.match.params.id).userId
                return user.id === userId
            } else {
                return null
            }
        }),
        comments: state.comments
    }
}

export default connect(mapStateToProps)(PostShow)