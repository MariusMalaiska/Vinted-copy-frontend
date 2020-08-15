import React, { useState, useCallback, useContext } from "react";
import { TokenContext } from "../providers/token.provider";
import { API_URL } from "./constants";
const UserAdvertsContext = React.createContext({});

function UserAdvertsProvider({ children }) {
  const { token } = useContext(TokenContext);
  //   let itemsPerPage = 5;
  //   let currentPage = 1;
  const [useradverts, setUserAdverts] = useState([]);
  const [error] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllUserAdvertisements = useCallback(async () => {
    setIsLoading(true);

    // let itemsPerPage = 5;
    // let currentPage = 1;
    try {
      let items = await fetch(`${API_URL}/getAllUserAdvertisements/1/5`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-node": token
        }
      });
      if (!items.ok) throw items.json();
      items = await items.json();
      console.log(items.items);
      setUserAdverts(items.items);
      //   console.log(items.items);
      // await createPaginator(items.count, paginationAll);
      // await drawItemsIn(items.items, displayAllAdverts);
    } catch (e) {
      console.log(await e);
    }
  }, [token]);

  return (
    <UserAdvertsContext.Provider
      value={{ useradverts, getAllUserAdvertisements, error, isLoading }}
    >
      {children}
    </UserAdvertsContext.Provider>
  );
}

export { UserAdvertsProvider, UserAdvertsContext };
