import { Link } from "react-router-dom";
import Character from "./Character";
import PropTypes from "prop-types";

function ListCharacters({ allData, loading }) {
  const renderCharacters = allData.map((item, i) => {
    return (
      <article key={i}>
        <Link to={`/character/${item.id}`} className="links">
          <Character allData={item} />
        </Link>
      </article>
    );
  });

  return (
    <section className="cardsContainer">
      {loading ? (
        <div className="progress-loader">
        <div className="progress"></div>
    </div>
      ) : allData.length === 0 ? (
        "Vaya, no se ha encontrado ese personaje, ¡prueba con otro 🪄!"
      ) : (
        renderCharacters
      )}
    </section>
  );
}

ListCharacters.propTypes = {
  allData : PropTypes.array,
  loading : PropTypes. any
}

export default ListCharacters;
