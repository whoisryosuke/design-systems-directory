import React from 'react'
import { ArrowRight } from 'react-feather'
import { Box, Flex, Heading } from 'rebass/styled-components'
import ButtonLink from '@components/Button/ButtonLink'

const SubmitSegment = () => {
    return (
        <Flex p={5} alignItems="center" flexWrap="wrap">
            <Box width={[1, 1 / 2]} p={3} textAlign={["left", "right"]}>
                <Heading as="h2" variant="h2">
                    Looking to submit content?
            </Heading>
            </Box>
            <Box width={[1, 1 / 2]} p={2}>
                <ButtonLink to="/" icon={ArrowRight}>
                    Check out our guide
            </ButtonLink>
            </Box>
        </Flex>
    )
}

export default SubmitSegment
