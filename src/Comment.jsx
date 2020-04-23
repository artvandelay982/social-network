import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from './styles';

export default function Comment({
  commenterEmail,
  commentTitle,
  commentText,
  commenterAvatarColor,
}) {
  const classes = useStyles();
  const emailLetter = commenterEmail.substr(0, 1);
  return (
    <div className={classes.commentContainer}>
      <div className={classes.commentTitle}><span>{commentTitle}</span></div>
      <div className={classes.commentTextContainer}>
        <div className={classes.commentEmail}>
          <Tooltip title={commenterEmail} aria-label="commenter email">
            <Avatar style={{ backgroundColor: commenterAvatarColor }}>{emailLetter}</Avatar>
          </Tooltip>
        </div>
        <div className={classes.commentText}><span>{commentText}</span></div>
      </div>
    </div>
  );
}

export const CommentProps = {
  commenterEmail: PropTypes.string.isRequired,
  commentTitle: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  commenterAvatarColor: PropTypes.string.isRequired,
};

Comment.propTypes = CommentProps;
