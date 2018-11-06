import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout.js'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}><h1>{node.title}</h1></Link>
      <p>{node.summary}</p>
    </li>
  )
}
const IndexPage = ({data}) => (
  <Layout>
    <div style={{ margin: `3rem auto`, maxWidth: '42em' }}>
      <h1>Insights</h1>
      <h2>The place where I share my thoughts about code, books, love, life and stuff</h2>
      <ul>
        {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} key={edge.node.id}/>)}
      </ul>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    }
    ) {
        edges {
          node {
            title
            slug
            id
            summary
          }
        }
      }
   }
`
