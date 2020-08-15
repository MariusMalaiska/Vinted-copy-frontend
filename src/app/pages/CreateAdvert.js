import React, { useState, useContext, useRef } from "react";
import Button from "../components/Button";
import "../index.css";
import { CreateAdvertContext } from "../../providers/createAdvert.provider";

const CreateAdvert = () => {
  const { createAdvert } = useContext(CreateAdvertContext);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [about, setAbout] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [size, setSize] = useState("");
  const pictureref = useRef();

  const reg = e => {
    e.preventDefault();

    createAdvert(
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
      pictureref.current.files[0]
    );
  };

  return (
    <div className="CreateAdvert">
      <div className="CreateAdvert-box">
        <form onSubmit={reg}>
          {/* ------------------title------------------------- */}
          <label className="Label" htmlFor=" title">
            Pavadinimas
          </label>
          <input
            // ref={input => {
            //   emailInput = input;
            // }}
            className="Input   Title"
            type=" title"
            onChange={e => setTitle(e.target.value)}
            autoComplete="text"
            id=" title"
            name=" title"
          />
          {/* ------------------Category------------------------- */}
          <label className="Label" htmlFor="category">
            Kategorija
          </label>
          <input
            // ref={input => {
            //   emailInput = input;
            // }}
            className="Input Category"
            type="text"
            onChange={e => setCategory(e.target.value)}
            // autoComplete="category"
            id="category"
            name="category"
          />
          {/* --------------------City---------------------- */}
          <label className="Label" htmlFor="city">
            Miestas
          </label>

          <input
            // ref={input => {
            //   passwordInput = input;
            // }}
            className="Input City"
            // autoComplete="current-password"
            type="text"
            onChange={e => setCity(e.target.value)}
            id="city"
            name="city"
          />
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

          <input
            className="Input  About"
            // autoComplete="text"
            type="text"
            onChange={e => setAbout(e.target.value)}
            id=" about"
            name=" about"
          />
          {/* ------------------------Condition------------------------ */}

          <label className="Label" htmlFor="condition">
            Būklė
          </label>
          <select
            className="Input Condition"
            autoComplete="tel"
            type="text"
            onChange={e => setCondition(e.target.value)}
            id="condition"
            name="condition"
          >
            {" "}
            <option value="senas">Senas</option>
            <option value="naujas">Naujas</option>
            <option value="labai senas">Labai Senas</option>
            <option value="naudotas">Naudotas</option>
          </select>
          {/* ------------------------Size------------------------ */}

          <label className="Label" htmlFor="size">
            Dydis
          </label>
          <select
            className="Input Size"
            autoComplete="text"
            type="text"
            onChange={e => setSize(e.target.value)}
            id="size"
            name="size"
          >
            <option value="XS">XS</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="X">L</option>
          </select>
          {/* ------------------------Height------------------------ */}

          <label className="Label" htmlFor="height">
            Aukštis
          </label>
          <select
            className="Input Height"
            autoComplete="tel"
            type="text"
            onChange={e => setHeight(e.target.value)}
            id="height"
            name="height"
          >
            {" "}
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </select>
          {/* ------------------------Width------------------------ */}

          <label className="Label" htmlFor="width">
            Plotis
          </label>
          <select
            className="Input Width"
            autoComplete="tel"
            type="text"
            onChange={e => setWidth(e.target.value)}
            id="width"
            name="width"
          >
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
          </select>

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
          {/* ------------------------Picture------------------------ */}

          <input
            type="file"
            className="Picture"
            id="Picture"
            ref={pictureref}
          />

          {/* ------------------------------------------------ */}
          <Button size="large" type="submit">
            Sukurti skelbimą
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAdvert;
