import React from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import PageSEO from "../../components/PageSEO";

const DevPage = () => {
  return (
    <div>
      <PageSEO
        title="Dio's Blog"
        description="The story about me myself and I"
      />
      <Header />
      <Content>nyaa</Content>
    </div>
  );
};

export default DevPage;
