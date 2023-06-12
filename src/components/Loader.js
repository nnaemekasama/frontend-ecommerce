import React from "react";
import ReactLoading from "react-loading";

const Loader = () => (
  <>
    <ReactLoading
      type="bars"
      style={{
        width: "70px",
        height: "70px",
        margin: "auto",
        display: "block",
      }}
    />
  </>
);

export default Loader;
