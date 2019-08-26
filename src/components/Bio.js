import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div className="authors">
        <div className="author-box">
          <img
            src={profilePic}
            alt={`Kyle Mathews`}
            className="author-profile-image"
          />
          <section className="author-box-content">
            <div className="author-box-label">Author</div>
            <h5 className="author-box-name">Anon</h5>

            <p>
              Written by Anon
            </p>
          </section>
        </div>
      </div>
    )
  }
}

export default Bio
