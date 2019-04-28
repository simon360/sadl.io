import { css } from "@emotion/core";
import styled from "@emotion/styled";

import theme from "@sadl/components/theme";

// Max width is 48 spacing units, minus one half on each side.
const maxWidth = css`
  max-width: calc(47 * ${theme.space.one});
`;

export const Container = styled.div`
  margin: 0 auto;
  ${maxWidth}
  padding-bottom: ${theme.space.one};
  padding-left: ${theme.space.half};
  padding-right: ${theme.space.half};
  padding-top: ${theme.space.one};
`;

export const Grid = styled.div`
  column-gap: ${theme.space.half};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: ${theme.space.one};

  @media (min-width: ${theme.viewportSizes.small}) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: ${theme.viewportSizes.medium}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const GridItem12 = styled.div`
  grid-column: span 3;

  @media (min-width: ${theme.viewportSizes.medium}) {
    grid-column: span 6;
  }
`;

export const GridItem14 = styled.div`
  grid-column: span 3;

  @media (min-width: ${theme.viewportSizes.small}) {
    grid-column: span 6;
  }

  @media (min-width: ${theme.viewportSizes.medium}) {
    grid-column: span 3;
  }
`;

export const GridItem34 = styled.div`
  grid-column: span 3;

  @media (min-width: ${theme.viewportSizes.small}) {
    grid-column: span 6;
  }

  @media (min-width: ${theme.viewportSizes.medium}) {
    grid-column: span 9;
  }
`;

export const GridItemFull = styled.div`
  grid-column: span 3;

  @media (min-width: ${theme.viewportSizes.small}) {
    grid-column: span 6;
  }

  @media (min-width: ${theme.viewportSizes.medium}) {
    grid-column: span 12;
  }
`;

export const GridItemCentered = styled(GridItemFull)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const GridItemInset = styled.div`
  grid-column: span 3;

  @media (min-width: ${theme.viewportSizes.small}) {
    grid-column: 2 / 6;
  }

  @media (min-width: ${theme.viewportSizes.medium}) {
    grid-column: 3 / 11;
  }
`;

export const Stack = styled.div`
  display: grid;
  row-gap: ${theme.space.one};
`;
