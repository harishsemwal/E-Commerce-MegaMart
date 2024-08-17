import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollections from "../Components/NewCollections/NewCollections.jsx";
import NewLatter from "../Components/NewLetter/NewLetter.jsx";
import "../App.js";
// import LoginSignUp from "./LoginSignUp.jsx";
function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewLatter />
    </div>
  );
}

export default Shop;
