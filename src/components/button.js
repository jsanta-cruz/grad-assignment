// import * as React from "react";
import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import { Link, graphql, useStaticQuery } from "gatsby";
import "./button.module.css";

// eslint-disable-next-line no-empty-pattern
const ImageButton = ( {pic} ) => {

  return (
    // <button
    //   onClick={() => {
    // const root = createRoot(
    //     document.getElementById('___gatsby')
    //   );
    //   const element = <img src={imageEle} width={600}></img>
    //   root.render(element);
    //   }}
    // >
    //   Click me!
    // </button>
    <>
    <h1>Hello World!</h1>
    <Button />
    </>
  );
};

function Button( { pic } ) {
    // const data = useStaticQuery(graphql`
    // query { pictures {
    //     author
    //     download_url
    //     height
    //     id
    //     url
    //     width
    //   }
    // }
    // `);
//  const imageEle = data.pictures.download_url
const [count, setCount] = useState(0);

    return (
    <button
      onClick={() => { setCount(count + 1)
      const root = createRoot(document.getElementById('___gatsby')
          );
      const element =  <ul>
       {pic?.map((p, i) => (
            <li key={i}>
                <div>
                <div>{p?.author}</div>
                <img loading="lazy" src={p?.download_url} width={100} alt={p?.author} />
                </div>
            </li>
    ))}
      </ul>
      root.render(element);
    // const root = createRoot(
    //     document.getElementById('___gatsby')
    //   );
    //   const element = <img src={imageEle} width={600}></img>
    //   root.render(<ImageButton />);
    
      }}
    >
      You clicked me {count} times
    </button>
    )
}

export default ImageButton;
