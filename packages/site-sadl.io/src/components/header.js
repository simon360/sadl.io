import React from "react";
import PropTypes from "prop-types";
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

Header.propTypes = {
  /**
   * The title of the site. Used as a title on the logo.
   */
  siteTitle: PropTypes.string.isRequired
};

export default Header;
