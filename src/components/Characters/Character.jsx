import placeholderImg from "../../images/placeholder.png";
import hulfflepuf from "../../images/hulfflepuf.png";
import griffindor from "../../images/griffindor.jpg";
import ranvenclaw from "../../images/ranvenclaw.png";
import slythering from "../../images/slythering.png";
import PropTypes from "prop-types";

function Character( { allData } ) {

  const housesClass = allData.house === "Gryffindor"
  ? "redColor"
  : allData.house === "Hufflepuff"
    ? "yellowColor"
    : allData.house === "Slytherin"
      ? "greenColor"
      : allData.house === "Ravenclaw"
        ? "blueColor"
        : "";

  return (
    <div className={`book ${housesClass}`}>
      <h4 className="name">{allData.name}</h4>
      <h5 className="specie">{allData.species}</h5>
      <h5>{allData.patronus}</h5>
    {allData.house === "Gryffindor" && (
        <img
          className="house"
          src={griffindor}
          alt="Gryffindor"
        />
      )}
      {allData.house === "Hufflepuff" && (
        <img
          className="house"
          src={hulfflepuf}
          alt="Hufflepuff"
        />
      )}
      {allData.house === "Slytherin" && (
        <img
          className="house"
          src={slythering}
          alt="Slytherin"
        />
      )}
      {allData.house === "Ravenclaw" && (
        <img
          className="house"
          src={ranvenclaw}
          alt="Ravenclaw"
        />
      )}
     
      <div className="cover">
        <img
          src={allData.image === "" ? placeholderImg : allData.image}
          alt={allData.name}
          className="characterImg"
        />
      </div>
    </div>
  );
}

Character.propTypes = {
  allData : PropTypes.object
}

export default Character;
