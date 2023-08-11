import React from "react";

const Button = ({ title, p }) => {
  return <a className={`btn btn-secondary ms-3 ${p}`}>{title}</a>;
};
export default Button;
