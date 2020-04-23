import { makeStyles } from '@material-ui/core/styles';

// styles in here could be DRYed up for less repeat style info, especially with the cards
const app = {
  margin: '16px auto',
};
const headerStyle = {
  textDecoration: 'none',
  color: 'white',
};
const postCard = {
  backgroundColor: 'white',
};
const postCardTitle = {
  margin: '12px',
  fontWeight: '500',
};
const postCardBody = {
  whiteSpace: 'normal',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  margin: '12px',
};
const postCardDivider = {
  margin: '4px 0',
};
const postCardComments = {
  width: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
};
const postCardCommentsInfo = {
  cursor: 'pointer',
  margin: '0 12px 6px',
};
const postCardCommentButton = {
  padding: '0',
  paddingRight: '8px',
};

const fullPostTextContainer = {
  backgroundColor: 'white',
  padding: '8px',
  margin: '12px 0',
};
const fullPostCommentContainer = {
  marginBottom: '32px',
  marginTop: '8px',
};
const fullPostCommentTitleContainer = { display: 'flex', justifyContent: 'center', margin: '12px 0' };
const fullPostCommentText = {
  width: '95%',
  margin: '0 auto',
  display: 'block',
};
const fullPostCommentControls = {
  marginTop: '8px',
  marginRight: '32px',
};
const fullPostCommentButton = {
  ...postCardCommentButton,
  float: 'right',
};
const fullPostCommentButtonText = {
  fontSize: '14px',
  marginLeft: '4px',
};

const commentContainer = { backgroundColor: 'white', margin: '12px 0', padding: '8px' };
const commentTitle = {
  textAlign: 'center',
  margin: '8px 12px',
  fontWeight: '500',
};
const commentTextContainer = { display: 'flex', flexDirection: 'row' };
const commentEmail = { margin: '0 4px' };
const commentText = { margin: '0 12px', display: 'flex', alignItems: 'center' };

export default makeStyles({
  app,
  headerStyle,
  postCard,
  postCardTitle,
  postCardBody,
  postCardDivider,
  postCardComments,
  postCardCommentsInfo,
  postCardCommentButton,
  fullPostTextContainer,
  fullPostCommentContainer,
  fullPostCommentTitleContainer,
  fullPostCommentText,
  fullPostCommentControls,
  fullPostCommentButton,
  fullPostCommentButtonText,
  commentContainer,
  commentTitle,
  commentTextContainer,
  commentEmail,
  commentText,
});
