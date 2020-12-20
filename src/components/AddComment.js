import React from "react";
import fetchApi from "/src/utils/fetchApi";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

const CommentStyle = styled.div`
  color: white;
  text-align: center;
  padding-top: 3em;
  display: flex;
  flex-direction: column;

  input {
    padding: 2em;
    border: none;
    height: 6em;
    margin-bottom: 6em;
  }

  textarea {
    height: 12em;
    padding: 2em;
    margin: 2em;
    outline: none;
  }
`;

const AddComments = () => {
  let { id } = useParams();
  const sendPost = (res, method, data) => {
    fetchApi(res, { data, method });
  };

  return (
    <CommentStyle>
      <textarea placeholder="New Comment" name="postContent" id="postContent" />
      <input
        type="submit"
        value="Comment!"
        onClick={(e) => {
          var comment = document.getElementById("postContent").value;
          if (comment !== "") {
            var author = "Jade DONG";
            var data = {
              content: comment,
              author: author
            };
            sendPost(`posts/${id}/comments`, "POST", data);
          }
        }}
      />
    </CommentStyle>
  );
};

export default AddComments;
