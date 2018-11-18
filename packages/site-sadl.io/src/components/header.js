import React from "react";
import { Link } from "gatsby";

import Cutter from "@sadl/components/components/Cutter";
import Logo from "@sadl/components/components/Logo";
import Section from "@sadl/components/components/Section";
import theme from "@sadl/components/theme";

const Header = ({ siteTitle }) => (
  <>
    <div
      style={{
        background: theme.color.primary
      }}
    >
      <Section>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            <Logo height={theme.space.two} title={siteTitle} />
          </Link>
        </h1>
      </Section>
    </div>
    <Cutter bottomColor="white" topColor={theme.color.primary} />
  </>
);

export default Header;
