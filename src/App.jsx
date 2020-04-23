/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import PostList from './PostList';
import { PostProps } from './Post';
import FullPost from './FullPost';
import useStyles from './styles';

const NotFound = () => <div>Post not found :(</div>;

const App = ({ posts, fetchPosts, addComment }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) {
      fetchPosts();
      setMounted(true);
    }
  }, [fetchPosts, mounted, setMounted]);

  const classes = useStyles();
  return (
    <Router>
      <AppBar position="sticky">
        <Toolbar><Link to="/" className={classes.headerStyle}>Social Network Activity</Link></Toolbar>
      </AppBar>
      <Container className={classes.app}>
        {/* this could be moved to a router.js file for better readability */}
        <Switch>
          <Route
            path="/post/:id"
          >
            {(route) => {
              const {
                match: { params = {} },
              } = route;

              if (!params.id) return <NotFound />;
              const paramId = Number(params.id);
              const post = posts.find((storedPost) => storedPost.postId === paramId);
              if (!post) return <NotFound />;
              return <FullPost {...post} addComment={addComment} />;
            }}
          </Route>
          <Route path="/">
            <PostList posts={posts} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(PostProps)).isRequired,
  fetchPosts: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default App;
