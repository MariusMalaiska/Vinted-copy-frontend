import React, { useContext, useEffect } from "react";
import "../index.css";
import { SingleContext } from "../../providers/single.provider";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import avatar from "../styles/images/avatar.png";

const Single = () => {
  const { getSingleItem, setId, single } = useContext(SingleContext);
  const { id } = useParams();

  useEffect(() => {
    setId(id);
    getSingleItem();
  }, [getSingleItem, id, setId]);

  return (
    <React.Fragment>
      {/* <div className="Single">
        <h3>{single.brand}</h3>
      </div> */}
      <div className="Single">
        <div className="Container">
          <div className="Single--item--container">
            {/* =1 Veikia  */}
            <div
              className="Item--photos--container"
              //   v-if="item.img.length === 1"
            >
              <img
                class="Card--img--top Main--img Img"
                src={single.itemPicture}
                alt="..."
              />
              {/* v-bind:src="item.img[0]" */}
            </div>
            <div className="Single--item--info ">
              <div className="Details--list">
                <h3 className="Price">{single.price} €</h3>
                <div className="Details--list--line"></div>
                <div class="details__list__details">
                  <p className="Details--list--title">PREKĖS ŽENKLAS</p>
                  <p>{single.brand}</p>
                </div>
                <div className="Details--list--details">
                  <p className="Details--list--title">DYDIS</p>
                  <p>{single.size}</p>
                </div>
                <div className="Details--list--details">
                  <p className="Details--list--title">BŪKLĖ</p>
                  <p>{single.condition}</p>
                </div>
                <div className="Details--list--details">
                  <p className="Details--list--title">SPALVA</p>
                  <p>{single.color}</p>
                </div>
                <div className="Details--list--details">
                  <p className="Details--list--title">VIETOVĖ</p>
                  <p>{single.city}</p>
                </div>
                <div className="Details--list--details">
                  <p className="Details--list--title">PERŽIŪRĖTA</p>
                  <p>{single.views}</p>
                </div>
                <div className="Details--list--details">
                  <p className="Details--list--title">ĮKELTA</p>
                  <p>{single.date}</p>
                </div>
                <div className="Details--list--line"></div>
                <h3>{single.title}</h3>
                <p>{single.about}</p>
                <div className="Details--list--buttons">
                  {/* <button type="button" className="Btn Btn--contact">
                    Teirautis
                  </button> */}
                  <Button size="spacing"> Teirautis</Button>

                  {/* <button type="button" class="Btn Btn--remember">
                    Pažymėti
                  </button> */}
                  <Button size="spacing"> Pažymėti</Button>
                </div>
              </div>
              <div className="User--box">
                <img className="User--img" alt="..." src={avatar} />
                {/* v-bind:src="user.img" */}
                <div className="User__info">
                  {/* <h4>{single.user.nickName}</h4> */}
                </div>
              </div>
              <div className="User--info--box">
                <div className="User--info">
                  <div className="Details--list--details">
                    <p className="Details--list--title">VIETOVĖ</p>
                    <p>{single.city}</p>
                  </div>
                  <div className="Details--list--details">
                    <p className="Details--list--title">
                      Paskutinis prisijungimas:
                    </p>
                    {/* <p>{single.user.loginDate}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Single;
