import React from "react";

function FooterLink({ title, url }) {
  return (
    <a className="btn btn-link" href={url}>
      {title}
    </a>
  );
}

export default FooterLink;
