import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

function Detail( { characterData } ) {

  characterData ? true : null;

  return (
    <>
      <Link to="/">
        <button >Volver</button>
      </Link>
      <section>
        <img src={characterData.image} alt={characterData.name} />
        <h2>{characterData.name}</h2>
        <h4>Estatus: {characterData.alive ? "💖" : "💀"}</h4>
        <h4>Especie: {characterData.species}</h4>
        <h4>Genero: {characterData.gender}</h4>
        <h4>Casa: {characterData.house}</h4>
      </section>
    </>
  );
}

export default Detail;
