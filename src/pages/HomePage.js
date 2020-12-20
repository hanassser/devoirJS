import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import PageTitle from "/src/components/PageTitle";
import Page from "/src/components/Page";
import fetchApi from "/src/utils/fetchApi";

const StyledHomeBlog = styled.div`
  .post {
    width: 36em;
    height: 12em;
    display: flex;
    flex-flow: column wrap;
    padding: 6em 2em;
    background-color: #eee;
    border-radius: 20px;
    box-shadow: 0 2px 6px rgba(100, 100, 100, 0.5);
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    line-height: 1.1em;
  }
  .postContainer {
    padding-top: 2em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 800px;
  }
  .post :hover {
    cursor: pointer;
  }
  h3 {
    text-align: center;
    padding-bottom: 0.3em;
    color: #000000;
    font-size: 1.2em;
  }
  h5 {
    font-size: 0.6em;
    text-align: center;
    color: #000000;
  }

  p {
    font-size: 0.8em;
    height: 5em;
    margin: 1em 3em;
    overflow: hidden;
  }
`;

const HomePage = (props) => {
  const [posts, setPosts] = useState();
  const [authors, setAuthors] = useState();

  useEffect(() => {
    (async () => {
      const [posts, authors] = await Promise.all([
        fetchApi("/posts"),
        fetchApi("/authors", { params: { limit: 1000 } })
      ]);
      setPosts(posts.result);
      setAuthors(authors.result);
    })();
  }, [setPosts, setAuthors]);

  if (!posts || !authors) {
    return null;
  }

  return (
    <StyledHomeBlog>
      <div className="post_container">
        <ul>
          {posts.map((post, key) => {
            return (
              <div className="post">
                <div>
                  <Link
                    to={`/posts/${post.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <li key={key}>
                      <h3>{post.title}</h3>
                      <h5>
                        Author:
                        {
                          authors.find((author) => author.id === post.author)
                            .display_name
                        }{" "}
                        on{" "}
                        {
                          new Date(
                            post.created_at
                          ).toLocaleDateString() /* TODO date-fns */
                        }
                      </h5>
                    </li>
                  </Link>
                  <hr />
                </div>
                <p>{post.content}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </StyledHomeBlog>
  );
};

export default HomePage;
