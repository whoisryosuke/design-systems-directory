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
import Segment from '@components/Segment/Segment'
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

const NavLink = ({
  icon,
  url,
  disabled,
  text,
  justifyContent,
  reverse,
  ...props
}) => {
  return (
    <ButtonLink
      width={[1 / 2, 1 / 3]}
      to={url}
      icon={icon}
      disabled={disabled}
      reverse={reverse}
      justifyContent={justifyContent}
    >
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

  const sectionName = capitalizeFirstLetter(pathPrefix)
  const sectionNameSmall = pathPrefix.replace('-', ' ')
  console.log('pagination', first, last)

  return (
    <Layout className="BlogArchive">
      <SEO
        key="seo-resources"
        title={`${sectionName} Archive - Page ${index}`}
        url={pathPrefix}
      />
      <Segment>
        <SectionHeading
          heading={`Browsing all`}
          highlight={sectionNameSmall}
          subtitle={`Page ${index}`}
        />

        <PostLoop type={pathPrefix} loop={group} />

        <Flex as="nav" py={4} justifyContent="space-between">
          <NavLink
            disabled={first}
            url={previousUrl}
            icon={ArrowLeft}
            text="Previous Page"
            reverse
          />
          <NavLink
            disabled={last}
            url={nextUrl}
            icon={ArrowRight}
            text="Next Page"
            justifyContent="flex-end"
          />
        </Flex>
      </Segment>
      <SubmitSegment />
    </Layout>
  )
}
export default IndexPage
