import * as React from "react";
// import everything that you will need from react-dom and gatsby
import "./button.module.css";

const Button = ({}) => {
    // Write a static query to access allPictures in GraphQl.

    // Create a variable to access the download_url which will render a picture
    // in your page. 
  return (
    <button
      onClick={() => {
        // Use the createRoot and render methods in the onClick handler
        // The render method should return an image to the page using JSX 
    
      }}
    >
      Click me!
    </button>
  );
};

export default Button;
