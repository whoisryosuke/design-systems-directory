import React from 'react'
import getVideoThumbnail from '@helpers/getVideoThumbnail'

import CardGroup from '../Card/CardGroup'
import BasicCard from '../Card/BasicCard'
import ArticleCard from '../Card/ArticleCard'
import ProjectCard from '../Card/ProjectCard'
import EventCard from '../Card/EventCard'
import ImageCard from '../Card/ImageCard'

const PostLoop = ({loop,skip,type}) => {
  let postLoop

  if (loop !== undefined) {
    postLoop = loop
      .filter(({ node }) => {
        if (skip === true) {
          return loop[0].node !== node
        } else {
          return node
        }
      })
      .map(({ node }) => {
        switch (type) {
          case 'blog':
          case 'blogs':
            return (
              <BasicCard
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
                title={node.frontmatter.title}
                subtitle={node.frontmatter.tags}
                link={node.fields.slug}
              />
            )

          case 'articles':
          case 'article':
            return (
              <ArticleCard
                title={node.title}
                href={node.url}
                subtitle={node.author}
                description={node.description}
                date={node.date}
              />
            )

          case 'communities':
          case 'community':
            return (
              <BasicCard
                title={node.title}
                href={node.url}
                description={node.description}
              />
            )

          case 'design-systems':
          case 'design-system':
            return (
              <BasicCard
                title={node.title}
                subtitle={node.company}
                href={node.url.website}
                reverse
              />
            )

          case 'events':
          case 'event':
            return (
              <EventCard title={node.title} href={node.url} date={node.date} {...node.location} />
            )

          case 'videos':
          case 'video':
            const videoThumbnail = getVideoThumbnail(
              node.platform,
              node.url
            )
            return (
              <ImageCard
                title={node.title}
                href={node.url}
                subtitle={node.author}
                image={videoThumbnail}
                date={node.date}
              />
            )


          default:
            return (
              <BasicCard
                title={node.frontmatter.title}
                subtitle={node.frontmatter.tags}
                description={node.excerpt}
                link={node.fields.slug}
              />
            )
        }
      })
  }
  return <CardGroup columns={3}>{postLoop}</CardGroup>
}

export default PostLoop