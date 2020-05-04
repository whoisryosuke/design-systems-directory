import React from 'react'
import Link from "gatsby-link"
import {Box, Flex} from 'rebass/styled-components'

interface Props {
  children: React.node[]
  icon: JSX.Element
  reverse: boolean
  disabled: boolean
  justifyContent: "flex-end" | "space-between"
  to: string
  href: string
}

export const ButtonLink: React.FC<Props> = ({to, href, children, icon: Icon, reverse, disabled, justifyContent, ...props}) => {
    const LinkComponent = to ? Link : 'a';
    let content = children
    if (Icon) {
        content = (
          <Flex justifyContent={justifyContent}>
            <Box mr={5}>{children}</Box>
            <Icon />
          </Flex>
        )

        if (reverse) content = (
          <Flex justifyContent={justifyContent}>
            <Icon />
            <Box ml={3}>{children}</Box>
          </Flex>
        )
    }
  return (
    <Box
      as={disabled ? 'span' : LinkComponent}
      to={!disabled && to}
      href={!disabled && href}
      variant={disabled ? 'buttons.disabled' : 'buttons.primary'}
      sx={{
        display: 'inline-block',
      }}
      {...props}
    >
      {content}
    </Box>
  )
}

export default ButtonLink