import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import { VeryBigHeading } from "@sadl/components/components/Heading";
import Text from "@sadl/components/components/Text";
import theme from "@sadl/components/theme";

const wrapperStyle = css`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const innerStyle = css`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: ${theme.space.three} ${theme.space.two};
  text-align: center;
`;

const innerContentStyle = css`
  margin: 0 auto;
  max-width: calc(${theme.space.one} * 24);
`;

const backgroundStyle = css`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

const Hero = ({ heading, img, text }) => (
  <div css={wrapperStyle}>
    <div css={backgroundStyle}>{img}</div>

    <div css={innerStyle}>
      <div css={innerContentStyle}>
        <VeryBigHeading isOnDark>{heading}</VeryBigHeading>
        <Text>{text}</Text>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  /**
   * The text to use as a heading.
   */
  heading: PropTypes.string.isRequired,

  /**
   * An image element to use as the background.
   *
   * Should have width and height set to 100%, and configure object-fit and object-position.
   */
  img: PropTypes.node.isRequired,

  /**
   * A short blurb to use as the main hero content.
   */
  text: PropTypes.string.isRequired
};

export default Hero;
