import React from "react";
import Authoraxios from "/src/components/Ourauthors.js";
import PageTitle from "/src/components/PageTitle";
import Page from "/src/components/Page";

const AuthorPage = () => (
  <Page>
    <PageTitle>Our Authors</PageTitle>
    <Authoraxios />
  </Page>
);

export default AuthorPage;
