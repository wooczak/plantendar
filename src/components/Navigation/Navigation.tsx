import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faHome } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className="mobile-nav">
      <Link to="/" className="mobile-nav-logowrap">
        <FontAwesomeIcon icon={faLeaf} className="mobile-nav__icon" />
        <p className="mobile-nav__heading">plantendar</p>
      </Link>
      <div className="mobile-nav-linkwrap">
        <Link to="about" className="link"> 
            <p>About</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
