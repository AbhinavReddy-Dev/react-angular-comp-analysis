import React from "react";
import "../App.css";

const index = () => {
  return (
    <>
      <h1>React Analysis</h1>
      <div className="page-links">
        <a title="E-Commerce Page" href="/ecommerce">
          E-Commerce
        </a>
        <a title="Social media Page" href="/socialmedia">
          Social Media
        </a>
      </div>
    </>
  );
};

export default index;
