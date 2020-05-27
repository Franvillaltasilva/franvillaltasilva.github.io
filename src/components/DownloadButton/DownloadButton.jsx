import "./DownloadButton.scss";
import React from "react";

const DownloadButton = ({ cv }) => {
  return (
    <a className="button" href={cv} download>
      {" "}
      download cv
    </a>
  );
};

export default DownloadButton;
