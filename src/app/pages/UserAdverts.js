import React, { useContext, useEffect } from "react";
import Button from "../components/Button";
import { UserAdvertsContext } from "../../providers/useradverts.provider";
import Add from "../components/Add";

const UserAdverts = () => {
  const { useradverts, getAllUserAdvertisements } = useContext(
    UserAdvertsContext
  );
  useEffect(() => {
    getAllUserAdvertisements();
  }, [getAllUserAdvertisements]);

  return (
    <React.Fragment>
      <header className="App-search-header">
        <ul>
          <li></li>
          <li>
            <input
              type="text"
              id="Search"
              className="Search-input"
              name="Search"
            />
            {/* onClick={Search} */}
            <Button size="small">Search</Button>
          </li>
        </ul>
      </header>
      <div className="Adverts">
        {useradverts.map(item => (
          <Add
            title={item.title}
            key={item._id}
            img={item.itemPicture}
            id={item.id}
            // isfavorite={favorites.includes(item.id)}
            // onClick={() => changeButton(item.id)}
            openMovie={item.id}
          >
            {item.about}
          </Add>
        ))}
      </div>
    </React.Fragment>
  );
};

export default UserAdverts;
