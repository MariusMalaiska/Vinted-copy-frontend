import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import avatar from "../../styles/images/avatar.png";
// import SizeData from "../../json/size.json";
// import { SingleContext } from "../../../providers/single.provider";

function Adverts({
  children,
  title,
  onClick,
  isfavorite,
  id,
  nickName,
  user,
  img,
  price,
  size,
  category,
  brand
}) {
  // const { getSingleItem } = useContext(SingleContext);

  // const obj = Object.values(
  //   Object.keys(SizeData.man.clothes.International).find(key => key === "M")
  // );
  // console.log(
  //   SizeData.man.clothes.International.M.EU
  // SizeData.man.clothes.International
  // );
  return (
    <div className="Item--card">
      {/* @click="$router.push({ path: 'item/' + id }) */}
      <div className="User--info">
        <img className="User--img" alt="user" src={avatar} />
        <h6 className="User--name">{user}</h6>
      </div>
      <Link className="Add-link" to={`/content/${id}`}>
        <div>
          <img className="Item--img" alt="item" src={img} />
        </div>
        <div>
          <div className="Card--price">{price + " €"}</div>
          <div className="Text--muted">
            {/* {size} / {SizeData} / {height} */}
            {size}
            {/* {(category === "man" &&
              SizeData.man.clothes.International.size.EU) ||
              SizeData.man.shoes.eu.size.UK} */}
          </div>
          <div className="Card--brand">{brand}</div>
        </div>
      </Link>
    </div>
  );
}

export default Adverts;
