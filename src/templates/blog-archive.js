import React, { Component } from 'react'
import styled from 'styled-components'
import GLink from 'gatsby-link'
import { Flex, Box, Text, Link as RLink } from 'rebass/styled-components'
import { ArrowLeft, ArrowRight } from 'react-feather'

import capitalizeFirstLetter from '../helpers/uppercase'

import Layout from '../layouts/BaseLayout'
import SEO from '@components/SEO/SEO'
import ButtonLink from '@components/Button/ButtonLink'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import PostLoop from '../components/PostLoop/PostLoop'
import SubmitSegment from '@components/SubmitSegment/SubmitSegment'

const StyledLink = styled(GLink)`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  text-decoration: none;
  color: ${props => props.theme.colors.black};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
  }
`

const StyledBackground = styled.section`
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: top right;
`

const NavLink = ({icon,url,test,text, reverse, ...props}) => {
    return (
      <ButtonLink width={[1 / 2, 1 / 3]} to={url} icon={icon} disabled={!test} reverse={reverse}>
        {text}
      </ButtonLink>
    )
}

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pathContext
  const previousUrl =
    index - 1 == 1
      ? '/' + pathPrefix + '/'
      : '/' + pathPrefix + '/' + (index - 1).toString()
  const nextUrl = '/' + pathPrefix + '/' + (index + 1).toString()

  const emojis = {
    projects: '🎨',
    blog: '📓',
  }
  const sectionName = capitalizeFirstLetter(pathPrefix)

  return (
    <Layout className="BlogArchive">
      <SEO
        key="seo-resources"
        title={`${sectionName} Archive - Page ${index}`}
        url={pathPrefix}
      />
      <StyledBackground>
        <SectionHeading
          emoji={emojis[pathPrefix]}
          heading={`${sectionName} archive`}
          subtitle={`Page ${index}`}
        />

        <Box bg="muted">
          <PostLoop type={pathPrefix} loop={group} />
        </Box>

        <Flex as="nav" py={3} justifyContent="space-between">
          <NavLink test={first} url={previousUrl} icon={ArrowLeft} text="Previous Page" reverse />
          <NavLink test={last} url={nextUrl} icon={ArrowRight} text="Next Page" />
        </Flex>
        
        <SubmitSegment />

      </StyledBackground>
    </Layout>
  )
}
export default IndexPage
