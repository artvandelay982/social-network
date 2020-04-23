/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Comment as CommentIcon } from '@material-ui/icons';

import useStyles from './styles';

import { PostProps } from './Post';
import Comment from './Comment';

export default function FullPost({
  postId, postTitle, postBody, comments, addComment,
}) {
  const classes = useStyles();
  const [commenterEmail, setCommenterEmail] = useState('');
  const [commentDraft, setCommentDraft] = useState('');
  const [commentTitle, setCommentTitle] = useState('');
  const addCommentButtonDisabled = !commentTitle || !commentDraft || !commenterEmail;
  return (
    <div key={postId}>
      <div className={classes.fullPostTextContainer}>
        <div className={classes.postCardTitle}>
          <span>{postTitle}</span>
        </div>
        <div className={classes.postCardBody}>
          <span>{postBody}</span>
        </div>
      </div>
      <div className={classes.fullPostCommentContainer}>
        <div>
          <div className={classes.fullPostCommentTitleContainer}>
            <input
              type="text"
              placeholder="Commenter Email"
              value={commenterEmail}
              onChange={(e) => setCommenterEmail(e.target.value)}
            />
          </div>
          <div className={classes.fullPostCommentTitleContainer}>
            <input
              type="text"
              placeholder="Comment Title"
              value={commentTitle}
              onChange={(e) => setCommentTitle(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Comment Text"
            rows="7"
            className={classes.fullPostCommentText}
            value={commentDraft}
            onChange={(e) => setCommentDraft(e.target.value)}
          />
        </div>
        <div className={classes.fullPostCommentControls}>
          <IconButton
            disabled={addCommentButtonDisabled}
            classes={{ root: classes.fullPostCommentButton }}
            onClick={
              () => {
                addComment(
                  {
                    postId,
                    commenterEmail,
                    commentTitle,
                    commentText: commentDraft,
                  },
                );
                setCommentTitle('');
                setCommentDraft('');
                setCommenterEmail('');
              }
}
          >
            <CommentIcon fontSize="small" />
            <span className={classes.fullPostCommentButtonText}>Comment</span>
          </IconButton>
        </div>
      </div>
      <Divider />
      <div>
        {comments.map((comment) => <Comment key={comment.commentId} {...comment} />)}
      </div>
    </div>
  );
}

FullPost.propTypes = { ...PostProps, addComment: PropTypes.func.isRequired };
