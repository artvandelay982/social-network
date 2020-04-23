import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { ChatBubbleOutline } from '@material-ui/icons';

import { CommentProps } from './Comment';
import useStyles from './styles';
import { idType } from './types';

export default function Post({
  postId, postTitle, postBody, comments,
}) {
  const classes = useStyles();
  return (
    <div key={postId}>
      <div className={classes.postCardTitle}>
        <span>{postTitle}</span>
      </div>
      <div className={classes.postCardBody}>
        <span>{postBody}</span>
      </div>
      <div className={classes.postCardComments}>
        <Divider classes={{ root: classes.postCardDivider }} />
        <Link to={`/post/${postId}`}>
          <div className={classes.postCardCommentsInfo}>
            <IconButton classes={{ root: classes.postCardCommentButton }}>
              <ChatBubbleOutline fontSize="small" />
            </IconButton>
            <span>
              {comments.length}
              {' '}
              comments
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export const PostProps = {
  postId: idType.isRequired,
  postTitle: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentProps)).isRequired,
};

Post.propTypes = PostProps;
