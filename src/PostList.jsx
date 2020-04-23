/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useMediaQuery } from '@material-ui/core';

import Post, { PostProps } from './Post';
import useStyles from './styles';

const PostList = ({ posts }) => {
  const classes = useStyles();
  const desktop = useMediaQuery('(min-width: 1024px');
  const tablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px');
  const cols = desktop ? 3 : tablet ? 2 : 1;
  return (
    <GridList cols={cols} cellHeight={220} spacing={24}>
      {posts.map((post) => (
        <GridListTile
          classes={{ tile: classes.postCard }}
          key={post.postId}
          cols={1}
        >
          <Post {...post} />
        </GridListTile>
      ))}
    </GridList>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(PostProps)).isRequired,
};

export default PostList;
