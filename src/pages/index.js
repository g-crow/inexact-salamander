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
    <h1>Latest Tangents</h1>
    <ul>
      {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} key={edge.node.id}/>)}
    </ul>
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
