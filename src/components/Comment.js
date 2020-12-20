import React, { useState, useEffect } from "react";
import fetchApi from "/src/utils/fetchApi";

const Comment = (props) => {
  const { comment: content, author: author } = props;
  const [authorName, setAuthor] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedAuthor = await fetchApi(`/authors/${author}`);
      setAuthor(fetchedAuthor);
    })();
  }, [setAuthor, author]);

  return (
    <>
      <p>{authorName.display_name}</p>

      <p>{content}</p>
    </>
  );
};

export default Comment;
