import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="row col-12">

      <nav className="navbar navbar-expand-lg navbar-light bg-white" id="navbar">
        <img className="navbar-icon" src={require('../images/lemoncode.png')} alt="logo" />
        <a className="navbar-brand" href="#">Lemoncode</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about"> About</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/members"> Members </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}