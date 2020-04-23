import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import { addComment, fetchPosts } from './redux/actions';
import './index.css';
import AppComponent from './App';
import store from './redux/store';

const App = connect((state) => ({ posts: state.posts }), {
  addComment,
  fetchPosts,
})(AppComponent);

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root'),
);
