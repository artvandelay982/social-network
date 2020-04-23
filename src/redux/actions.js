import { mapPostResourcesToComponentProps } from './util';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const commentsUrl = `${baseUrl}/comments`;
const postsUrl = `${baseUrl}/posts`;

export const ADD_COMMENT = 'ADD_COMMENT';
export const LOAD_POSTS = 'LOAD_POSTS';

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: {
    ...comment,
    // eslint-disable-next-line no-bitwise
    commenterAvatarColor: '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16)),
  },
});

export const fetchPosts = () => async (dispatch) => {
  const posts = await fetch(postsUrl).then((res) => res.json());
  const comments = await fetch(commentsUrl).then((res) => res.json());
  const payload = mapPostResourcesToComponentProps(posts, comments);
  dispatch({ type: LOAD_POSTS, payload });
};
