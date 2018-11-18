import styled, { css } from 'styled-components';

// Max width is 48 spacing units, minus one half on each side.
const maxWidth = css`calc(47 * ${props => props.theme.space.one})`;

export const Container = styled.div`
  max-width: ${maxWidth};
  margin: 0 auto;
  padding-bottom: ${props => props.theme.space.one};
  padding-left: ${props => props.theme.space.half};
  padding-right: ${props => props.theme.space.half};
  padding-top: ${props => props.theme.space.one};
`;

export const Grid = styled.div`
  display: grid;
  column-gap: ${props => props.theme.space.half};
  grid-template-columns: repeat(3, 1fr);
  row-gap: ${props => props.theme.space.one};

  @media (min-width: ${props => props.theme.viewportSizes.small}) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: ${props => props.theme.viewportSizes.medium}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const GridItem12 = styled.div`
  grid-column: span 3;

  @media (min-width: ${props => props.theme.viewportSizes.medium}) {
    grid-column: span 6;
  }
`;

export const GridItem14 = styled.div`
  grid-column: span 3;

  @media (min-width: ${props => props.theme.viewportSizes.small}) {
    grid-column: span 6;
  }

  @media (min-width: ${props => props.theme.viewportSizes.medium}) {
    grid-column: span 3;
  }
`;

export const GridItem34 = styled.div`
  grid-column: span 3;

  @media (min-width: ${props => props.theme.viewportSizes.small}) {
    grid-column: span 6;
  }

  @media (min-width: ${props => props.theme.viewportSizes.medium}) {
    grid-column: span 9;
  }
`;

export const GridItemFull = styled.div`
  grid-column: span 3;
  
  @media (min-width: ${props => props.theme.viewportSizes.small}) {
    grid-column: span 6;
  }

  @media (min-width: ${props => props.theme.viewportSizes.medium}) {
    grid-column: span 12;
  }
`;

export const GridItemCentered = styled(GridItemFull)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridItemInset = styled.div`
  grid-column: span 3;

  @media (min-width: ${props => props.theme.viewportSizes.small}) {
    grid-column: 2 / 6;
  }

  @media (min-width: ${props => props.theme.viewportSizes.medium}) {
    grid-column: 3 / 11;
  }
`;

export const Stack = styled.div`
  display: grid;
  row-gap: ${props => props.theme.space.one};
`;
