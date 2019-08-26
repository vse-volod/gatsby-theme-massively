import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  state = {
    transform: false,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    if (window.scrollY >= 140) {
      if (!this.state.transform) {
        this.setState({
          transform: true,
        })
      }
    } else {
      if (this.state.transform) {
        this.setState({
          transform: false,
        })
      }
    }
  }

  render() {
    const { location, siteMetadata } = this.props
    const { title, description, social, menuLinks } = siteMetadata
    return (
      <div>
        <div
          id="intro"
          className={this.state.transform ? 'hidden' : ''}
          onScroll={this.handleScroll}
        >
          <h1>{title}</h1>
          {description.length > 0 ? (
            description
          ) : (
            <p>
              A free, fully responsive HTML5 + CSS3 site template designed by{' '}
              <a href="https://twitter.com/ajlkn" target="_blank" rel="noopener noreferrer">@ajlkn</a> for{' '}
              <a href="https://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a>
              <br />
              and released for free under the{' '}
              <a href="https://html5up.net/license" target="_blank" rel="noopener noreferrer">Creative Commons license</a>
              .<br />
              More themes on <a href="https://gatsbytemplates.io" target="_blank" rel="noopener noreferrer">gatsbytemplates.io</a>
            </p>
          )}
          <ul className="actions">
            <li>
              <a
                href="#header"
                className="button icon solo fa-arrow-down scrolly"
              >
                Continue
              </a>
            </li>
          </ul>
        </div>
        <header id="header">
          <Link to="/" className="logo">Massively</Link>
        </header>
        <nav id="nav">
          <ul className="links">
            {menuLinks.map(link => (
              <li
                key={link.name}
                className={location.pathname === link.link ? 'active' : ''}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="icons">
            {Object.keys(social).map((keyName, i) => (
              <li key={i}>
                <a href={social[keyName]} className={`icon fa-${keyName}`}>
                  <span className="label">{keyName}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
