import "../../styles/_App.scss";
import harryTitle from "../../images/title.png"

function Header() {
  return (
   <header className="header">
      <img className="titleImg" src={harryTitle} alt="title" />
   </header>
  )
}

export default Header