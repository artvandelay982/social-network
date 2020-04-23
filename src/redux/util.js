export const mapCommentResourcesToComponentProps = (comments = []) => comments.map((comment) => ({
  commentId: comment.id,
  postId: comment.postId,
  commentTitle: comment.name,
  commenterEmail: comment.email,
  commentText: comment.body,
  // eslint-disable-next-line no-bitwise
  commenterAvatarColor: '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16)),
}));


export const mapPostResourcesToComponentProps = (posts = [], comments = []) => {
  const commentsMap = new Map();
  comments.forEach((comment) => {
    const postComments = commentsMap.get(comment.postId) || [];
    postComments.push(comment);
    // this needs to be done on first write to map[postId] => postComments
    commentsMap.set(comment.postId, postComments);
  });

  return posts.map((post) => ({
    postId: post.id,
    userId: post.userId,
    postTitle: post.title,
    postBody: post.body,
    comments: mapCommentResourcesToComponentProps(
      commentsMap.get(post.id) || [],
    ),
  }));
};
