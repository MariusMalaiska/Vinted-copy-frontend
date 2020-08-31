import React, { useState, useCallback } from "react";
import { API_URL } from "./constants";

const AdvertsContext = React.createContext({});

function AdvertsProvider({ children }) {
  //   let itemsPerPage = 5;
  //   let currentPage = 1;
  const [adverts, setAdverts] = useState([]);
  const [error] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPublicItems = useCallback(async () => {
    setIsLoading(true);
    // let itemsPerPage = 5;
    // let currentPage = 1;
    try {
      let items = await fetch(`${API_URL}/getAllAdvertisementsPublic/1/20`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
          // "x-auth-node": token
        }
      });
      if (!items.ok) throw items.json();
      items = await items.json();
      setAdverts(items.items);
      // console.log(items.items);
      // await createPaginator(items.count, paginationAll);
      // await drawItemsIn(items.items, displayAllAdverts);
    } catch (e) {
      console.log(await e);
    }
  }, []);

  return (
    <AdvertsContext.Provider
      value={{ adverts, getPublicItems, error, isLoading }}
    >
      {children}
    </AdvertsContext.Provider>
  );
}

export { AdvertsProvider, AdvertsContext };
