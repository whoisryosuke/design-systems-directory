import * as React from 'react';
import { Box, Heading, Text } from 'rebass/styled-components'

interface SectionHeadingProps {
  className: string,
  heading: string,
  highlight?: string,
  subtitle?: string
}

const SectionHeading: React.FunctionComponent<SectionHeadingProps> = ({className, highlight,heading, subtitle, ...props}) => {
  return (
    <Box className={className} mb={4} {...props}>
      <Heading variant="subtitle" as="h2">
        {heading}
        {highlight && (
          <Text
            display="inline-block"
            color="primary"
            ml={2}
            pb={1}
            sx={{ borderBottom: '3px solid', borderColor: 'primary' }}
          >
            {highlight}
          </Text>
        )}
      </Heading>
      {subtitle && (
        <Heading
          as="h3"
          color="gray.dark"
          fontSize={[1, 2]}
          fontWeight="normal"
          mt={2}
          mb={0}
        >
          {subtitle}
        </Heading>
      )}
    </Box>
  )
};


export default SectionHeading
