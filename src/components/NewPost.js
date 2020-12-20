import styled from "@emotion/styled";
import React from "react";
import fetchApi from "/src/utils/fetchApi";

const Post = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Div = styled.form`
  color: white;
  text-align: center;
  padding-top: 3em;
  display: flex;
  flex-direction: column;

  input {
    padding: 1em;
    border: none;
  }

  textarea {
    height: 300px;
    padding: 20px;
    outline: none;
  }
`;

const NewPost = () => {
  const sendPost = (res, method, data) => {
    fetchApi(res, { data, method });
  };

  return (
    <Post>
      <Div>
        <input
          type="textArea"
          name="postTitle"
          id="postTitle"
          placeholder="title"
        />

        <textarea
          placeholder="start your new post"
          name="postContent"
          id="postContent"
        />
        <input
          type="submit"
          value="Post"
          onClick={(e) => {
            const postTitle = document.getElementById("postTitle").value;
            const postContent = document.getElementById("postContent").value;
            const author = "Jade Dong";
            const date = toString(Date());

            const data = {
              title: postTitle,
              content: postContent,
              author: author,
              created_at: date
            };
            sendPost("/posts", "POST", data);
          }}
        />
      </Div>
    </Post>
  );
};

export default NewPost;
