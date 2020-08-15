import React, { useContext } from "react";
import { AdvertsContext } from "../../providers/advertisments.provider";
import Hero from "./../components/Hero";
import Adverts from "./../components/Adverts";

const Home = () => {
  const { adverts } = useContext(AdvertsContext);
  return (
    <React.Fragment>
      <Hero />

      <div className="Adverts">
        {adverts.map(item => (
          <Adverts
            key={item._id}
            id={item._id}
            img={item.itemPicture}
            user={item.user.nickName}
            price={item.price}
            size={item.size}
            width={item.width}
            height={item.height}
            brand={item.brand}
          ></Adverts>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
