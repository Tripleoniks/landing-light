import './header.scss';
import { Link } from 'react-router-dom';
import profileImg from "../../asset/Images/profileImg.png";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"


const Header = () => {
    return ( 
  
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="nav-container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">    
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link className='nav-link' to='#'>TRIPS</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className='nav-link' to='#'>RECENTLY VIEWED</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className='nav-link' to='#'>BOOKINGS</Link>
        </li>
        <li>
        <Link className="navbar-brand" to="#">
          <img src={profileImg} alt="" width="40" height="40" class="d-inline-block align-text-top logo"/>
        </Link> 
        </li>
      </ul>
    </div>
  </div>

</nav>

     );
}
 
export default Header;