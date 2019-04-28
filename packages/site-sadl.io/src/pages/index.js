import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";

import { BigHeading, BiggerHeading } from "@sadl/components/components/Heading";
import Hero from "@sadl/components/components/Hero";
import {
  Container,
  Grid,
  GridItem12,
  GridItem14,
  GridItem34
} from "@sadl/components/components/Layout";
import Link from "@sadl/components/components/Link";
import Section from "@sadl/components/components/Section";
import Text from "@sadl/components/components/Text";

import { graphql } from "gatsby";
import Img from "gatsby-image";

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "home/hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Section>
      <Hero
        heading="What's SADL?"
        img={
          <Img
            fluid={data.heroImage.childImageSharp.fluid}
            imgStyle={{
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 80%",
              width: "100%"
            }}
            style={{ height: "100%", width: "100%" }}
          />
        }
        text="SADL makes beautiful websites and web applications that scale. With a focus on simplicity, in implementation and in experience, SADL has built a reputation around building things the right way."
      />
      <Container>
        <Grid>
          <GridItem34>
            <BiggerHeading>About SADL</BiggerHeading>
            <Text>SADL is a front-end web development company.</Text>

            <Grid>
              <GridItem12>
                <BigHeading>Accessibility</BigHeading>
                <Text>
                  The web is a place for everybody, but living up to that spirit
                  takes work. SADL always gives its code meaning, uses
                  semantics, and adds accessibility hooks, so that nobody gets
                  left behind.
                </Text>
              </GridItem12>
              <GridItem12>
                <BigHeading>Sustainability</BigHeading>
                <Text>
                  The web should last. A website that provides valuable
                  information shouldn’t ever stop; that means writing code that
                  can be understood and maintained, and making it easy to run
                  that code in the real world, for a very long time.
                </Text>
              </GridItem12>
              <GridItem12>
                <BigHeading>Joyfulness</BigHeading>
                <Text>
                  The web should be joyful, without getting in your way. That
                  means using good design, appropriate animation, and a little
                  bit of whimsy - but it also means showing restraint. Design is
                  how it works; additional flourish should aid the user in
                  understanding the content, and never distract.
                </Text>
              </GridItem12>
              <GridItem12>
                <BigHeading>Flexibility</BigHeading>
                <Text>
                  The best web is the one we have. A pursuit of perfection is
                  noble, but futile. Sometimes, scope needs to be cut - but as
                  long as the core principles remain, a product can still be
                  good. Never cut corners, but always be prepared to simplify.
                </Text>
              </GridItem12>
            </Grid>
            <Text>
              Our mission is to make the web a more joyful place - by providing
              easy access to reliable information, without obstacles.
            </Text>
            <Text>
              That means putting accessibility at the forefront, because
              everybody should be on a level playing field. It means developing
              with meaning, always asking why, and providing the answers in a
              predictable way. It means making the lives of other developers
              easier, by providing clear documentation and good, reliable open
              source projects.
            </Text>
            <Text>
              With over a decade of experience, SADL knows how to deliver on
              these goals.
            </Text>
            <Text>
              SADL is focused on making the Web better. Using cutting-edge tools
              where they help, tried-and-true solutions where they work, and a
              healthy dose of creativity, SADL can deliver a better experience
              for your customers and your developers.
            </Text>
            <Text>
              SADL is a registered limited company in England and Wales
              (10271125).
            </Text>
            <Text>
              <Link href="/system">View the SADL design system</Link>
            </Text>
          </GridItem34>
          <GridItem14>
            <BiggerHeading>Find SADL</BiggerHeading>
            <ul>
              <li>
                GitHub:{" "}
                <Link href="https://github.com/simon360">@simon360</Link>
              </li>
              <li>
                Twitter:{" "}
                <Link href="https://twitter.com/simon360">@simon360</Link>
              </li>
              <li>
                Email: <Link href="mailto:hello@sadl.io">hello@sadl.io</Link>
              </li>
            </ul>
          </GridItem14>
        </Grid>
      </Container>
    </Section>
  </Layout>
);

IndexPage.propTypes = {
  /**
   * The data returned from the page query.
   */
  data: PropTypes.shape({
    heroImage: PropTypes.shape({})
  })
};

export default IndexPage;
