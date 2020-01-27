import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter} from 'react-router-dom'
import UserList from './components/users/UserList';
import UserShow from './components/users/UserShow';
import PostList from './components/posts/PostList'
import PostShow from './components/posts/PostShow'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h2>Blog UI</h2>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <div className="content">
        <Route path="/home"/>

        <Route path="/users" component={UserList} exact />
        <Route path="/users/:id" component={UserShow} />
        <Route path="/posts" component={PostList} exact/>
        <Route path="/posts/:id" component={PostShow} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
