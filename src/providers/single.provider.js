import React, { useState, useCallback } from "react";
import { API_URL } from "./constants";
const SingleContext = React.createContext({});

function SingleProvider({ children }) {
  const [single, setSingle] = useState({});
  const [id, setId] = useState({});
  // const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
  // const { id } = useParams();
  // const history = useHistory();
  // const { setToken } = useContext(TokenContext);
  // const { setUserName } = useContext(UserNameContext);

  const [isLoading, setIsLoading] = useState(false);

  const getSingleItem = useCallback(async () => {
    console.log(id);
    try {
      const response = await fetch(`${API_URL}/getSingleItem/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
          // authorization: localStorage.getItem("token")
        }
      });
      if (response.ok) {
        const item = await response.json();
        // setAdverts(items.items);
        // setToken(response.headers.get("x-auth-node"));
        console.log(item);
        setSingle(item);
        // localStorage.setItem("token", response.headers.get("x-auth-node"));
        // history.replace("/");
      } else {
        setError(response);
      }
    } catch (e) {
      console.log(await e);
    } finally {
      setIsLoading(false);
    }
  }, [setError, id]);
  //     setMovie(movie);
  //     setIsLoaded(false);
  //   }, [setMovie, id]);

  //   useEffect(() => {
  //     getSingleItem();
  //   }, [getSingleItem]);

  return (
    <SingleContext.Provider
      value={{ single, getSingleItem, error, isLoading, setId }}
    >
      {children}
    </SingleContext.Provider>
  );
}

export { SingleProvider, SingleContext };
