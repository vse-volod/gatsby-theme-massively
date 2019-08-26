/* eslint-disable */
// jshint ignore: start
import React from 'react'
import { Link } from 'gatsby'
import BurgerButton from './burger'
import Copyright from './copyright'

class Sidebar extends React.Component {


  render() {
    const { menuLinks, toggleMenu, social } = this.props
    // add socials!
    return (
      <div id="navPanel">
          <nav id="menu">
            <ul className="links">
              {menuLinks.map(link => (
                <li key={link.name} className="nav-home active">
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="icons alt">
          {Object.keys(social).map((keyName, i) => (
            <li key={i}>
              <a href={social[keyName]} className={`icon fa-${keyName}`}>
                <span className="label">{keyName}</span>
              </a>
            </li>
          ))}
        </ul>
          </nav>
        <a href="#navPanel" className="close" onClick={toggleMenu}></a>
      </div>
    )
  }
}

export default Sidebar
