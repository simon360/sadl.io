import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Cutter from "../Cutter";

import systemTheme, { ThemeProvider } from "../../theme";

const SectionElement = styled.section`
  background-color: ${props =>
    props.mode === "dark" ? systemTheme.color.primary : "none"};
  color: ${props =>
    props.mode === "dark" ? systemTheme.color.white : systemTheme.color.text};
`;

const Section = ({ children, mode, cutter }) => (
  <SectionElement mode={mode}>
    <ThemeProvider mode={mode}>
      <>{children}</>
    </ThemeProvider>
    {cutter ? (
      <Cutter
        bottomColor={
          mode === "light" ? systemTheme.color.primary : systemTheme.color.white
        }
        topColor={
          mode === "light" ? systemTheme.color.white : systemTheme.color.primary
        }
      />
    ) : null}
  </SectionElement>
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
