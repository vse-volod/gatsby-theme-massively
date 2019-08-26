import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Widget = ({ post }) => (
  <article className="post featured">
    <header className="major">
      <h1>
        <Link to={post.node.fields.slug}>
          {get(post.node, 'frontmatter.title') || post.node.fields.slug}
        </Link>
      </h1>
      <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
    </header>
    {post.node.frontmatter.featuredImage.childImageSharp.fluid && (
      <Link to={post.node.fields.slug} className="image main">
        <Img
          fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
          imgStyle={{
            transition: 'transform 0.2s ease,-webkit-transform 0.2s ease',
          }}
        />
      </Link>
    )}
    <ul className="actions special">
      <li>
        <Link to={post.node.fields.slug} className="button big">
          Learn More
        </Link>
      </li>
    </ul>
  </article>
)

export default Widget
