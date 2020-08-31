import React, { useState, useContext, useRef } from "react";
import Button from "../components/Button";
import "../index.css";
import { CreateAdvertContext } from "../../providers/createAdvert.provider";
import SizeData from "../json/size.json";
import CityData from "../json/city.json";

const CreateAdvert = () => {
  const { createAdvert } = useContext(CreateAdvertContext);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("women");
  const [clothing, setClothing] = useState("clothes");
  const [city, setCity] = useState("Vilnius");
  const [about, setAbout] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const pictureref = useRef();

  const [pictureEroor, setPictureEroor] = useState("");
  const [titleEroor, setTitleEroor] = useState("");
  const [categoryEroor, setCategoryEroor] = useState("");
  const [cityEroor, setCityEroor] = useState("");
  const [aboutEroor, setAboutEroor] = useState("");
  const [conditionEroor, setConditionEroor] = useState("");
  const [sizeEroor, setSizeEroor] = useState("");
  const [priceEroor, setPriceEroor] = useState("");

  const validate = () => {
    setPictureEroor("");
    setTitleEroor("");
    setCategoryEroor("");
    setCityEroor("");
    setAboutEroor("");
    setConditionEroor("");
    setPriceEroor("");
    setSizeEroor("");

    if (!pictureref.current.value) {
      setPictureEroor("įkelkite nuotrauką");
      return false;
    } else if (title.length <= 2) {
      setTitleEroor("turi būti bent 3 ženklai");
      return false;
    } else if (!category) {
      setCategoryEroor("pasirinkite kategoriją");
      return false;
    } else if (!city) {
      setCityEroor("pasirinkite Miestą");
      return false;
    } else if (about.length <= 9) {
      setAboutEroor("turi būti bent 10 ženklų");
      return false;
    } else if (!condition) {
      setConditionEroor("pasirinkite būklę");
      return false;
    } else if (!size) {
      setSizeEroor("pasirinkite dydį");
      return false;
    } else if (!price) {
      setPriceEroor("įrašykite kainą");
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      createAdvert(
        title,
        category,
        city,
        about,
        condition,
        color,
        brand,
        size,
        price,
        pictureref.current.files[0]
      );
    }
  };

  return (
    <div className="CreateAdvert">
      <div className="CreateAdvert-box">
        <h2>Įkelti drabužį</h2>
        <form onSubmit={handleSubmit}>
          {/* ------------------------Picture------------------------ */}
          <p>Įkelk iki 1 nuotraukų. More comming soon!</p>
          <input
            type="file"
            className="Picture"
            id="Picture"
            ref={pictureref}
          />
          <label htmlFor="Picture" className="Picture--label">
            <span className="Picture--label--text">
              <span className="Sign">+</span> Įkelti nuotraukas
            </span>
          </label>
          <div className="ErrorMessage">{pictureEroor}</div>
          {/* ------------------title------------------------- */}
          <label className="Label" htmlFor="title">
            Pavadinimas
          </label>
          <input
            className="Input   Title"
            type=" title"
            onChange={e => setTitle(e.target.value)}
            autoComplete="text"
            id=" title"
            name=" title"
          />
          <div className="ErrorMessage">{titleEroor}</div>
          {/* ------------------Category------------------------- */}
          <label className="Label" htmlFor="category">
            Kategorija
          </label>
          <select
            className="Select Category"
            type="text"
            onChange={e => setCategory(e.target.value)}
            id="category"
            name="category"
            defaultValue="women"
          >
            <option value="women">Moteriški</option>
            <option value="man">Vyriški</option>
          </select>
          <div className="ErrorMessage">{categoryEroor}</div>
          <select
            className="Select Clothing"
            type="text"
            onChange={e => setClothing(e.target.value)}
            id="clothing"
            name="clothing"
            defaultValue="clothes"
          >
            <option value="clothes">Drabužiai</option>
            <option value="shoes">Batai</option>
          </select>
          {/* --------------------City---------------------- */}
          <label className="Label" htmlFor="city">
            Miestas
          </label>
          <select
            className="Select City"
            type="text"
            onChange={e => setCity(e.target.value)}
            id="city"
            name="city"
            defaultValue="Vilnius"
          >
            {CityData.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className="ErrorMessage">{cityEroor}</div>
          {/* --------------------Color---------------------- */}
          <label className="Label" htmlFor="color">
            Spalva
          </label>
          <input
            className="Input Color"
            type="text"
            onChange={e => setColor(e.target.value)}
            id="color"
            name="color"
          />
          {/* --------------------Brand---------------------- */}
          <label className="Label" htmlFor="brand">
            Prekinis ženklas
          </label>
          <input
            className="Input Brand"
            type="text"
            onChange={e => setBrand(e.target.value)}
            id="brand"
            name="brand"
          />
          {/* ---------------------about---------------------- */}
          <label className="Label" htmlFor="about">
            Apie
          </label>
          <textarea
            className="Input  About"
            autoComplete="text"
            type="text"
            onChange={e => setAbout(e.target.value)}
            rows="5"
            cols="10"
            id=" about"
            name=" about"
          />
          <div className="ErrorMessage">{aboutEroor}</div>
          {/* ------------------------Condition------------------------ */}
          <label className="Label" htmlFor="condition">
            Būklė
          </label>
          <select
            className="Select Condition"
            autoComplete="tel"
            type="text"
            onChange={e => setCondition(e.target.value)}
            id="condition"
            name="condition"
          >
            <option value="naujas">Naujas</option>
            <option value="naujas be etikečių">Naujas be etikečių</option>
            <option value="naudotas">Naudotas</option>
            <option value="labai senas">Labai Senas</option>
          </select>
          <div className="ErrorMessage">{conditionEroor}</div>
          {/* ------------------------Size------------------------ */}
          <label className="Label" htmlFor="size">
            Dydis
          </label>
          <select
            className="Select Size"
            autoComplete="text"
            type="text"
            onChange={e => setSize(e.target.value)}
            id="size"
            name="size"
          >
            <option value=""></option>
            {category === "women" &&
              clothing === "clothes" &&
              Object.keys(SizeData.women.clothes.International).map(
                (item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                )
              )}
            {category === "women" &&
              clothing === "shoes" &&
              Object.keys(SizeData.women.shoes.eu).map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            {category === "man" &&
              clothing === "clothes" &&
              Object.keys(SizeData.man.clothes.International).map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            {category === "man" &&
              clothing === "shoes" &&
              Object.keys(SizeData.man.shoes.eu).map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
          </select>
          <div className="ErrorMessage">{sizeEroor}</div>
          {/* ------------------------Price------------------------ */}
          <label className="Label" htmlFor="price">
            Kaina
          </label>
          <input
            className="Input Price"
            autoComplete="tel"
            type="number"
            onChange={e => setPrice(e.target.value)}
            id="price"
            name="price"
          />
          <div className="ErrorMessage">{priceEroor}</div>
          <Button size="large" type="submit">
            Sukurti skelbimą
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAdvert;
