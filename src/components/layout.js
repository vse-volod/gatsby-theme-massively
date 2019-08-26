/* eslint-disable */
// jshint ignore: start
import React from 'react'
import Contact from './contact'
import Copyright from './copyright'
import BurgerButton from './burger'
import Header from './header'
import '../styles/main.scss'
import Sidebar from './sidebar'
import { StaticQuery, graphql } from 'gatsby'

class Template extends React.Component {
  state = { showMenu: false, menuAlt: false}

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    if (window.scrollY >= 617) {
      if (!this.state.menuAlt) {
        this.setState({
          menuAlt: true,
        })
      }
    } else {
      if (this.state.menuAlt) {
        this.setState({
          menuAlt: false,
        })
      }
    }
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    console.log(this.props)
    const { children, location, data } = this.props
    const { social, title, menuLinks, contact } = data.site.siteMetadata

    return (
      <div
        id="layout"
        className={this.state.showMenu ? 'is-navPanel-visible' : ''}
      >
        <div id="wrapper">
          <Header location={location} siteMetadata={data.site.siteMetadata} />
          <div id="main">{children}</div>
          <Contact contact={contact} social={social} />
          <Copyright title={title} />
          <div className="bg fixed" style={{ transform: 'none' }} />
        </div>
        <Sidebar menuLinks={menuLinks} toggleMenu={this.toggleMenu} social={social} />
        <a id="navPanelToggle" onClick={this.toggleMenu} className={this.state.menuAlt ? 'alt' : ''}>
          <BurgerButton />
        </a>
      </div>
    )
  }
}

const Layout = (props) => {
  console.log(props)
  return (
    <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
              facebook
              snapchat
              instagram
              medium
            }
            menuLinks {
              name
              link
            }
            contact {
              info
              email
              tel
              address
            }
          }    
        }
      }
    `}
    render={data => <Template data={data} {...props} />}
  />
  )
}

export default Layout