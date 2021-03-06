import * as React from 'react'
import { Box, Flex } from 'rebass/styled-components'

interface ICardGroupProps {
  children: JSX.Element
  columns: number
}

const CardGroup: React.FunctionComponent<ICardGroupProps> = ({
  children,
  columns = 2,
  ...props
}) => {
    const desktopWidth = 1 / columns
    const nthChild = `& > div:nth-child(${columns}n - ${columns - 1})`
  const renderChildren = React.Children.map(children, (child) => <Box width={[1, desktopWidth]} p={[0, 3]} mb={[3,0]}>{child}</Box>)
  return (
    <Flex flexDirection={["column", "row"]} {...props} sx={{ [nthChild]: { marginLeft: [0, -2]}}}>
      {renderChildren}
    </Flex>
  )
}

export default CardGroup
