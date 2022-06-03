import React from "react";
import ReactDOM from "react-dom/client";

let year = new Date().getFullYear();
function FooterFoot() {
  return <p className="footer"> copyright &#169; {year} </p>;
}
export default FooterFoot;
