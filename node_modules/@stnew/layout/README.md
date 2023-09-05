# @stnew/layout

Layout system built with [styled-components] and [styled-system] for React. Features basic box-model components, flexbox components (including a [bootstrap-style grid implementation](#row)), and CSS grid components.

## Setup

`styled-components` v5.1 and `styled-system` v5.1 are required dependencies.

```sh
npm install styled-components styled-system
npm install @stnew/layout
```

It's _*highly*_ recommended to apply `box-sizing: border-box` globally to all elements, or at the very least the element wrapping any of the layout components. As of version `1.4.0`, this is no longer applied to all [`<Box>`] components as it adds bloat.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

You will need to wrap your application in [styled-components] `ThemeProvider` and pass a theme object with a `grid` property. For more documentation about how theming works, [check out the styled-components documentation](https://styled-components.com/docs/advanced#theming).

```javascript
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  grid: {
    columns: 12,
    columnGap: '1rem',
    maxWidth: '64rem',
    margins: '1rem',
  },
  //...rest
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your App Here */}
    </ThemeProvider>
  )
}
```

### `theme.grid` Spec

The following properties are required on `theme.grid`. Responsive props can be an array, and will correspond with [styled-system]'s `theme.breakpoints`. [Learn more about responsive styles](https://styled-system.com/responsive-styles).

| Props     | Type                              | Responsive? | Desc                                |
| --------- | --------------------------------- | ----------- | ----------------------------------- |
| columns   | `number`                          | No          | Number of grid columns              |
| columnGap | CSS unit (`string` or `string[]`) | Yes         | space between grid columns          |
| maxWidth  | CSS unit (`string` or `string[]`) | Yes         | Max width of [`<Container>`]        |
| margins   | CSS unit (`string` or `string[]`) | Yes         | PaddingX applied to [`<Container>`] |

## Box

Basic layout building block. Includes `background`, `border`, `color`, `flexbox`, `grid`, `layout`, `position`, `space`,  and `typography` props from [styled-system]. All `<Box>` components render a `div` by default and have no styling applied.

```javascript
import { Box } from '@stnew/layout'

const ComponentA = () => (
  <Box>Hello world!</Box>
)

const ComponentB = ({ size = '50px' }) => (
  <Box
    as="section"
    background="blue"
    borderRadius="50%"
    width={size}
    height={size}
  >
    ¡Hola mundo!
  </Box>
)
```

## Container

Extension of [`<Box>`] with max-width and padding applied. These are set via the [`theme.grid` props](#themegrid-spec). This is used as a page or section wrapper.

```javascript
import { Container, Box } from '@stnew/layout'

const Component = () => (
  <Container>
    <Box>Hello world!<Box>
  </Container>
)
```

## Grid

Extension of [`<Box>`] with `display: grid`.

`<Grid>` has `grid-template-columns` and `grid-column-gap` applied, corresponding the [`theme.grid` props](#themegrid-spec) `columns` and `columnGap`, respectively. `grid-template-columns` defaults to `repeat(n, 1fr)` to fill available space, but this can be overridden using [styled-system]'s grid props.

```javascript
import { Grid, Box } from '@stnew/layout'

const Component = () => (
  <Grid>
    <Box gridColumn="span 6">Hello world!</Grid.Item>
    <Box gridColumn="span 6">Hello world!</Grid.Item>
    <Box gridColumn="2 / 12" gridRow="2" >Hello world!</Grid.Item>
  </Grid>
)
```

## Flex

Extension of [`<Box>`] with `display: flex`.

```javascript
import { Flex, Box } from '@stnew/layout'

const ComponentA = () => (
  <Flex height="100vh" justifyContent="center" alignItems="center">
    <Box>Hello world!</Box>
  </Flex>
)

const ComponentB = () => (
  <Flex flexDirection={['column', 'row']}>
    <Box>Hello world!</Box>
    <Box flex="1">⁄¡Hola mundo!</Box>
  </Flex>
)
```

## Row

Extension of [`<Flex>`] with negative margins. Intended to wrap [`<Col>`] components for bootstrap-style flexbox grid. Margins are tied to the `theme.grid.columnGap` property. `flex-direction: row` and `flex-wrap: wrap` are enabled by default.

## Col

Extension of [`<Box>`]. Child of [`<Row>`], with built in padding and bootstrap-esque flexbox grid props.
The number of columns you can span correspond to the `theme.grid.columns` property. Spacing between columns is controlled via `theme.grid.columnGap`.


| Props  | Type                   | Desc                                     |
| ------ | ---------------------- | ---------------------------------------- |
| span   | `number` or `number[]` | Spans `n` number of columns              |
| offset | `number` or `number[]` | Offset column by `n` number of columns   |
| push   | `number` or `number[]` | Move column left `n` number of columns*  |
| pull   | `number` or `number[]` | Move column right `n` number of columns* |
| order  | `number` or `number[]` | Specify order of columns                 |

_* Every `<Col>` is `position: relative`, to enable the `push` and `pull` props._

```javascript
import { Flex } from '@stnew/layout'

const ComponentA = () => (
  <Container>
    <Row>
      <Col span={[6, 4]}>Hello world!</Col>
      <Col span={[6, 4]}>Hello world!</Col>
      <Col span={[12, 2]} offset={[0, 2]}>Hello world!</Col>
    </Row>
  </Container>
)

const ComponentB = () => (
  <Container>
    <Row>
      <Col span={6}>Hello world!</Col>
      <Col span={6}>
        <Row>
          <Col>Nested columns</Col>
          <Col>Nested columns</Col>
        </Row>
      </Col>
    </Row>
  </Container>
)
```

[`<Box>`]: #box
[`<Container>`]: #container
[`<Grid>`]: #grid
[`<Flex>`]: #flex
[`<Row>`]: #row
[`<Col>`]: #col
[styled-system]: https://styled-system.com/api
[styled-components]: https://styled-components.com/
