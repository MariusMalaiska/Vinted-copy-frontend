import React, { useState, useCallback, useContext } from "react";
import { TokenContext } from "../providers/token.provider";
import { useHistory } from "react-router";
import { API_URL } from "./constants";

const CreateAdvertContext = React.createContext({});

function CreateAdvertProvider({ children }) {
  const { token } = useContext(TokenContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const createAdvert = useCallback(
    async (
      title,
      category,
      city,
      about,
      condition,
      color,
      brand,
      height,
      width,
      size,
      price,
      picture
    ) => {
      setIsLoading(true);

      let formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("city", city);
      formData.append("about", about);
      formData.append("condition", condition);
      formData.append("color", color);
      formData.append("brand", brand);
      formData.append("height", height);
      formData.append("width", width);
      formData.append("price", price);
      formData.append("size", size);
      formData.append("item-picture", picture);

      try {
        const response = await fetch(`${API_URL}/createAdvert`, {
          method: "POST",
          body: formData,
          headers: {
            "x-auth-node": token
          }
        });
        if (response.ok) {
          // console.log(response);
          history.replace("/");
        } else {
          setError(response);
        }
      } catch (e) {
        console.log(await e);
      } finally {
        setIsLoading(false);
      }
    },
    [setError, history, token]
  );

  return (
    <CreateAdvertContext.Provider value={{ createAdvert, error, isLoading }}>
      {children}
    </CreateAdvertContext.Provider>
  );
}

export { CreateAdvertProvider, CreateAdvertContext };
