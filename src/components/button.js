import * as React from "react";
import { createRoot } from 'react-dom/client';
import { Link, graphql, useStaticQuery } from "gatsby";
import "./button.module.css";

// eslint-disable-next-line no-empty-pattern
const Button = ({}) => {
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
    //     const num = Math.round(Math.random() * 32);
    //    alert(data.pictures.download_url)
    const root = createRoot(
        document.getElementById('___gatsby')
      );
      const element = <img src={imageEle} width={600}></img>/*<h1>Hello, world</h1>;*/
      root.render(element);
      }}
    >
      Click me!
    </button>
  );
};

export default Button;
