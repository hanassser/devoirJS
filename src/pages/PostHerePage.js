import React from "react";

import PageTitle from "/src/components/PageTitle";
import Page from "/src/components/Page";
import NewPost from "/src/components/NewPost";

const PostHerePage = () => (
  <Page>
    <PageTitle>Post whatever you want</PageTitle>
    <NewPost />
  </Page>
);

export default PostHerePage;
