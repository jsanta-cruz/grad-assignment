import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {


  return (
    <Layout>
      <main>
        <p>Hello for this assignment you will use the following:</p>
        <ul>
          <li>Built-in and custom components (You may use the button.js component)</li>
          <li>An API call that is provided in gatsby node for convenience</li>
          <li>Static query to access the data structure call allPictures</li>
          <li>React onClick handler</li>
          <li>React createRoot and render methods</li>
        </ul>
        <p>Refer to the README file for details for dependencies</p>
      </main>
    </Layout>
  );
};


export default IndexPage;

export const Head = () => <title>Home Page</title>;
