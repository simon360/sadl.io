import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import styled from "@emotion/styled";

import {
  Container,
  Grid,
  GridItem12,
  GridItem14,
  GridItem34,
  GridItemInset,
  Stack
} from "./";
import theme from "../../theme";

const Tile = styled.div`
  background-color: ${props => props.color};
  padding-bottom: 100%;
`;

const tileColors = [
  theme.color.primary,
  theme.color.primaryLighter,
  theme.color.primaryDarker,
  theme.color.primaryLighter,
  theme.color.primaryDarker
];

const Tiles = ({ repeat }) => (
  <>
    {new Array(repeat).fill(null, 0, repeat).map((v, i) => (
      <Tile color={tileColors[i % tileColors.length]} key={i} />
    ))}
  </>
);

Tiles.propTypes = {
  /**
   * The number of tiles to show.
   */
  repeat: PropTypes.number.isRequired
};

storiesOf("Components|Layout", module).add("Grid", () => (
  <Container>
    <Grid>
      <Tiles repeat={24} />

      <GridItem34>
        <Tile color={theme.color.primary} />
      </GridItem34>
      <GridItem14>
        <Stack>
          <Tiles repeat={2} />
        </Stack>
      </GridItem14>

      <GridItem12>
        <Stack>
          <Tiles repeat={2} />
        </Stack>
      </GridItem12>
      <GridItem12>
        <Stack>
          <Tiles repeat={2} />
        </Stack>
      </GridItem12>
      <GridItemInset>
        <Tile color={theme.color.primaryLighter} />
      </GridItemInset>
    </Grid>
  </Container>
));
