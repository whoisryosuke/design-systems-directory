import React from 'react'
import { Flex } from 'rebass/styled-components'
import nicetime from '../../helpers/nicetime'

import BasicCard from '../Card/BasicCard'
import ArticleCard from '../Card/ArticleCard'
import ProjectCard from '../Card/ProjectCard'

export default props => {
  let postLoop

  if (props.loop !== undefined) {
    postLoop = props.loop
      .filter(({ node }) => {
        if (props.skip === true) {
          return props.loop[0].node !== node
        } else {
          return node
        }
      })
      .map(({ node }) => {
        switch (props.type) {
          case 'blog':
          case 'blogs':
            return (
              <BasicCard
                width={[1, 1, 1 / 2, 1/2, 1 / 3]}
                title={node.frontmatter.title}
                subtitle={node.frontmatter.tags}
                description={node.excerpt}
                link={node.fields.slug}
              />
            )
          case 'project':
          case 'projects':
            return (
              <ProjectCard
                width={[1, 1, 1 / 2, 1 / 2, 1/3]}
                title={node.frontmatter.title}
                subtitle={node.frontmatter.tags}
                link={node.fields.slug}
              />
            )

          case 'articles':
          case 'article':
            return (
              <ArticleCard
                width={[1, 1, 1 / 2, 1 / 2, 1 / 3]}
                title={node.title}
                href={node.url}
                subtitle={node.author}
                description={node.description}
                date={node.date}
              />
            )


          default:
            return (
              <BasicCard
                width={[1, 1, 1 / 2, 1 / 2, 1 / 3]}
                title={node.frontmatter.title}
                subtitle={node.frontmatter.tags}
                description={node.excerpt}
                link={node.fields.slug}
              />
            )
        }
      })
  }
  return <Flex flexWrap="wrap">{postLoop}</Flex>
}
