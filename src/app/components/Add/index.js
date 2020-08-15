import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

// import Title from "../Title";
// import Button from "../Button";
// import FavoriteButton from "../FavoriteButton";

function Add({ children, title, img, onClick, isfavorite, id }) {
  const classes = `Add`;

  return (
    <div className={classes}>
      <Link className="Add-link" to={`/content/${id}`}>
        <div
          className="Add-Image"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </Link>
      <div className="Add-Info">
        <Link className="Add-link" to={`/content/${id}`}>
          {/* <Title level="4">{title}</Title> */}
        </Link>
        <div className="module line-clamp">
          <p>{children}</p>
        </div>
        {/* <FavoriteButton
          onClick={onClick}
          mode={isfavorite ? "outline" : ""}
          id={id}
        ></FavoriteButton> */}
      </div>
    </div>
  );
}

export default Add;
