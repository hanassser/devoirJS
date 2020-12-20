import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import fetchApi from "/src/utils/fetchApi";
import { useParams } from "react-router-dom";
import Comment from "/src/components/Comment";
import AddComment from "/src/components/AddComment";

const StyledBlog = styled.div`
  * {
    padding-left: 3em;
  }

  h1 {
    font-size: 3em;
    font-weight: 600;
  }

  p {
    font-size: 1em;

    margin: 1em 3em;
    overflow: hidden;
  }
`;

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedPost = await fetchApi(`/posts/${id}`);
      setPost(fetchedPost);
      const { result: fetchedComments } = await fetchApi(
        `/posts/${id}/comments`
      );
      setComments(fetchedComments);
    })();
  }, [setPost, setComments, id]);

  return (
    <StyledBlog>
      <h1>{post.title}</h1>
      <p>{post.created_at}</p>
      <p>{post.author}</p>
      <p>{post.content}</p>
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment.content}
            author={comment.author}
          />
        ))}
      </div>
      <AddComment />
    </StyledBlog>
  );
};

export default PostPage;
