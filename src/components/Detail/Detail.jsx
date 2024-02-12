import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";




function Detail( { characterData  } ) {


  return (
    <>
      <Link to="/">
        <button >Volver</button>
      </Link>
      <section >
        {characterData !== undefined ? 
      <>
      <h2 >{characterData.name}</h2>
        <img src={characterData.image} alt={characterData.name} />
        <h4>Estatus: {characterData.alive ? "💖" : "💀"}</h4>
        <h4>Especie: {characterData.species}</h4>
        <h4>Genero: {characterData.gender}</h4>
        <h4>Casa: {characterData.house}</h4>
      </>
      : null
      }
      </section>
    </>
  );
}

export default Detail;
