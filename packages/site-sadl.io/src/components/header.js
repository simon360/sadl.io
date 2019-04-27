import React from "react";
import { Link } from "gatsby";

import {
  Container,
  Grid,
  GridItemCentered
} from "@sadl/components/components/Layout";
import Logo from "@sadl/components/components/Logo";
import Section from "@sadl/components/components/Section";
import theme from "@sadl/components/theme";

const Header = ({ siteTitle }) => (
  <>
    <Section mode="dark">
      <Container>
        <Grid>
          <GridItemCentered>
            <h1>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <Logo height={theme.space.two} title={siteTitle} />
              </Link>
            </h1>
          </GridItemCentered>
        </Grid>
      </Container>
    </Section>
  </>
);

export default Header;
