import * as React from "react";
import { createRoot } from 'react-dom/client';
import { Link, graphql, useStaticQuery } from "gatsby";
import "./button.module.css";

const ButtonSolution = ({}) => {
    const data = useStaticQuery(graphql`
    query { pictures {
        author
        download_url
        height
        id
        url
        width
      }
    }
    `);
const imageEle = data.pictures.download_url
  return (
    <button
      onClick={() => {

    const root = createRoot(
        document.getElementById('___gatsby')
      );
      const element = <img src={imageEle} width={600}></img>
      root.render(element);
      }}
    >
      Click me!
    </button>
  );
};

export default ButtonSolution;
