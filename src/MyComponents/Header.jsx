import PropTypes from 'prop-types'
import React from 'react'
import '../App.css';
import { Link} from "react-router-dom"

function Header(props) {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <h1 className="navbar-brand disabled" >Alpana P</h1>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item">
        <Link className="nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/todo"> {props.title} </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/reactpage">React JS</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/blogs">Blogs</Link>
      </li>
    </ul>
   
  </div>
</nav>









 
  )
}
Header.defaultProps = {
  title: "Your Title here",
  searchBar: true
}
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
export default Header