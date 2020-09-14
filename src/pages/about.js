import React from "react";
import Layout from "@theme/Layout";

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <h1># Community Guides and Tutorials</h1>
      </div>
    </Layout>
  );
}

export default Hello;
