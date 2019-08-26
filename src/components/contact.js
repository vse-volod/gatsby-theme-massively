import React from 'react'

const Contact = ({ contact, social }) => (
  <footer id="footer">
    <section>
      <form method="post" action="#">
        <div className="fields">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="3" />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" />
          </li>
        </ul>
      </form>
    </section>
    <section className="split contact">
      <section className="alt">
        <h3>Address</h3>
        <p>{contact.address}</p>
      </section>
      <section>
        <h3>Phone</h3>
        <p>
          <a href="#">{contact.tel}</a>
        </p>
      </section>
      <section>
        <h3>Email</h3>
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </section>
      <section>
        <h3>Social</h3>
        <ul className="icons alt">
          {Object.keys(social).map((keyName, i) => (
            <li key={i}>
              <a href={social[keyName]} className={`icon fa-${keyName}`}>
                <span className="label">{keyName}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  </footer>
)

export default Contact
