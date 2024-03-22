import { Link } from "react-router-dom";
import holder from "../../images/holder.jpg";
import PropTypes from "prop-types";

function Detail( { characterData, routeData  } ) {


  return (
    <>
      <Link to="/">
        <button className="backBtn" >Inicio</button>
      </Link>
      <section className="detailCard" >
        {characterData !== undefined ? 
      <>
        <img className="imgDetail" src={characterData.image === "" ? holder : characterData.image } alt={characterData.name} />
        <div className="textDetail">
        <h1 >{characterData.name}</h1>
        <h4>Estatus: {characterData.alive ? "💖" : "💀"}</h4>
        <h4>Especie: {characterData.species}</h4>
        <h4>Genero: {characterData.gender}</h4>
        <h4>Casa: {characterData.house}</h4>
        </div>
      </>
      : null
      }
      </section>
    </>
  );
}

Detail.propTypes = {
  characterData : PropTypes.object
}

export default Detail;
