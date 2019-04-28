import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import Cutter from "@sadl/components/components/Cutter";
import theme from "@sadl/components/theme";

const Section = ({ children, mode, cutter }) => (
  <section
    css={css`
      background-color: ${mode === "dark" ? theme.color.primary : "none"};
      color: ${mode === "dark" ? theme.color.white : theme.color.text};
    `}
  >
    {children}
    {cutter ? (
      <Cutter
        bottomColor={mode === "light" ? theme.color.primary : theme.color.white}
        topColor={mode === "light" ? theme.color.white : theme.color.primary}
      />
    ) : null}
  </section>
);

Section.defaultProps = {
  cutter: false,
  mode: "light"
};

Section.propTypes = {
  /**
   * Content to show in this Section.
   */
  children: PropTypes.node,

  /**
   * Should this section end with a diagonal cutter?
   */
  cutter: PropTypes.bool,

  /**
   * The style mode.
   */
  mode: PropTypes.oneOf(["dark", "light"])
};

export default Section;
