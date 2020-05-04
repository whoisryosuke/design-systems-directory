import * as React from 'react';
import { Box, Button, Flex, Heading } from 'rebass/styled-components'

interface MastheadProps {
  header: string
  subheader: string
}

const Masthead: React.FunctionComponent<MastheadProps> = ({header, subheader}) => {
  return (
    <Box as="section" px={4} py={[5,6]} textAlign="center">
      <Heading fontSize={[5, 6, 7]} mb={3}>{header}</Heading>
      <Heading fontSize={[1, 2, 3]} fontWeight="normal" mb={4}>{subheader}</Heading>
      <Flex width="80%" mx="auto" justifyContent="center" mb={3} flexDirection={['column', 'row']}>
        <Button width={[1, 1 / 2]} variant="masthead" mr={[0, 3]} mb={[3, 0]}>Browse systems</Button>
        <Button width={[1, 1 / 2]} variant="masthead" color="black" bg="white" sx={{
          ':hover,:focus,.active': {
            color: 'black',
            bg: 'white',
          },}}>Start learning</Button>
      </Flex>
    </Box>
  )
};

export default Masthead
