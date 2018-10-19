import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout'

export default ({data}) => {
  const title = data.contentfulBlog.title
  const content = data.contentfulBlog.content.childMarkdownRemark.html

  return (
    <Layout>
      <div style={{ margin: `3rem auto`, maxWidth: '42em' }}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlog(slug: {eq: $slug}) {
            title
            slug
            content {
              childMarkdownRemark {
                html
              }
            }
        }
    }
`
