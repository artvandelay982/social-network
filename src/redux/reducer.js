/* eslint-disable no-case-declarations */
import { ADD_COMMENT, LOAD_POSTS } from './actions';

const initialState = {
  posts: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_COMMENT:
      const { posts = [] } = state;
      const postToUpdateIndex = posts.findIndex((post) => post.postId === action.payload.postId);
      if (postToUpdateIndex === -1) return state;
      const updatedPost = {
        ...posts[postToUpdateIndex],
        comments: [...posts[postToUpdateIndex].comments, { ...action.payload, commentId: posts[postToUpdateIndex].length + 1 }],
      };
      const updatedPosts = [...posts.slice(0, postToUpdateIndex), updatedPost, ...posts.slice(postToUpdateIndex + 1, posts.length)];
      updatedPosts.sort((a, b) => (a < b ? -1 : 1));
      return {
        ...state,
        posts: updatedPosts,
      };
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}
