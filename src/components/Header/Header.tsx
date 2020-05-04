import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Box, Flex, Text } from 'rebass/styled-components'

const MobileButton = styled(Box)`
    margin-left: 2em;

    width: 30px;
    height: 26px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    
    & span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: ${({theme}) => theme.colors.black};;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
    }

    & span:nth-child(1) {
      top: 0px;
      transform-origin: left center;
    }

    & span:nth-child(2) {
      top: 11px;
      transform-origin: left center;
    }

    & span:nth-child(3) {
      top: 22px;
      transform-origin: left center;
    }

    ${({ visible }) => visible && `
      & span:nth-child(1) {
        transform: rotate(45deg);
        top: -1px;
        left: 8px;
      }

      & span:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      & span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 20px;
        left: 8px;
      }
    `};
`

const StyledHeaderNav = styled.nav`
  display: inline-block;
  margin-left: 1em;

  & li {
    list-style-type: none;
    display: inline-block;
    margin-left: 2.25em;

    & a {
      font-family: ${({ theme }) => theme.fonts.body};
      color: ${props => props.theme.colors.gray.dark};
      font-size: ${props => props.theme.fontSizes[2]}px;
      text-decoration: none;
      border: 0;
      position: relative;
      display: block;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  ${props =>
    props.mobile &&
    `
    transform:translateX(${props.visible ? '0' : '-120%'});
    position:fixed;
    width:100%;
    height:100vh;
    top:4.9rem;
    border-top:1px solid ${props.theme.colors.black};
    left:0;
    z-index:420;
    background:${props.theme.colors.white};

    transition:transform 300ms ease-in;

    & ul { 
      width:100%;
      margin:0;
      padding:0;
    }

    & li { 
      width:100%;
      margin:0;
      display:block;
      border-bottom:1px solid ${props.theme.colors.black};

      & a {
        padding:3em 1em;
        transition:color 300ms ease-out;

        &:hover, &:focus {
          background-color:${props.theme.colors.primary};
          color:${props.theme.colors.white};
        }

      }
    }
  `}
`

const Logotype = styled(Link)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.04em;
  font-variant: small-caps;
  text-decoration:none;
  text-transform:lowercase;
  border:0;

  color: ${({theme}) => theme.colors.black};
`

const Header = React.memo(({mobile, visible, toggleVisibility}) => {

  return (
    <Flex width={1} bg="white" px={4} py={3} justifyContent="space-between" sx={{ position: "fixed", zIndex: 710 }} >
      <Logotype to={'/'}>
        <Text as="h4">Design Systems Directory</Text>
      </Logotype>

      <Box>
        <StyledHeaderNav mobile={mobile} visible={visible}>
          <Box as="ul">
            <li>
              <Link to={'/design-systems'}>
                  Design Systems
              </Link>
            </li>
            <li>
              <Link to={'/articles'}>
                  Articles
              </Link>
            </li>
            <li>
              <Link to={'/videos'}>
                  Videos
              </Link>
            </li>
            <li>
              <Link to={'/events'}>
                  Events
              </Link>
            </li>
            <li>
              <Link to={'/communities'}>
                  Communities
              </Link>
            </li>
          </Box>
        </StyledHeaderNav>

        {mobile && (
          <MobileButton
            type="button"
            visible={visible}
            onClick={toggleVisibility}
          >
            <span></span>
            <span></span>
            <span></span>
          </MobileButton>
        )}
      </Box>
    </Flex>
  )
    
})

export default Header
