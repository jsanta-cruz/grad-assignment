import * as React from "react";
import Layout from "../components/layout";
import ButtonSolution from "../components/button-solution";

const IndexPage = () => {


  return (
    <Layout>
      <main>
        <ButtonSolution />
      </main>
    </Layout>
  );
};



export default IndexPage;

export const Head = () => <title>Home Page</title>;
