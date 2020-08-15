import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import avatar from "../../styles/images/avatar.png";
// import { SingleContext } from "../../../providers/single.provider";

function Adverts({
  children,
  title,
  onClick,
  isfavorite,
  id,
  key,
  nickName,
  user,
  img,
  price,
  size,
  width,
  height,
  brand
}) {
  // const { getSingleItem } = useContext(SingleContext);
  //   console.log(user);
  return (
    <div className="Item--card">
      {/* @click="$router.push({ path: 'item/' + id }) */}
      <div className="User--info">
        <img className="User--img" alt="user" src={avatar} />
        <h6 class="User--name">{user}</h6>
      </div>
      <Link className="Add-link" to={`/content/${id}`}>
        <div>
          <img className="Item--img" alt="item" src={img} />
        </div>
        <div>
          <div className="Card--price">{price + " €"}</div>
          <div className="Text--muted">
            {size} / {width} / {height}
          </div>
          <div className="Card--brand">{brand}</div>
        </div>
      </Link>
    </div>
  );
}

export default Adverts;
