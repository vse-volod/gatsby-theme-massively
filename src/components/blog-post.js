import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Bio from './Bio'
import Layout from './layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const data = this.props.data;
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;
    console.log(this.props);

    return (
      <Layout location={this.props.location} data={data}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <section>
          <header className="main content">
            <span className="date">{post.frontmatter.date}</span>
            <h1>{post.frontmatter.title}</h1>
          </header>
          <div className="image main">
            {post.frontmatter.featuredImage && <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />}
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <footer className="post-footer">
            <Bio />
          </footer>

          <ul
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate
