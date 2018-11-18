import React from "react";

import Layout from "../components/layout";

import {
  BigHeading,
  BiggerHeading,
  VeryBigHeading
} from "@sadl/components/components/Heading";
import {
  Container,
  Grid,
  GridItem14,
  GridItem34,
  GridItemFull
} from "@sadl/components/components/Layout";
import Link from "@sadl/components/components/Link";
import Section from "@sadl/components/components/Section";
import Text from "@sadl/components/components/Text";

const IndexPage = () => (
  <Layout>
    <Section>
      <Container>
        <Grid>
          <GridItemFull>
            <VeryBigHeading>Simon Andrews Development Limited</VeryBigHeading>
          </GridItemFull>
          <GridItem34>
            <BiggerHeading>About SADL</BiggerHeading>
            <Text>
              SADL is focused on making the Web better. Using cutting-edge tools
              where they help, tried-and-true solutions where they work, and a
              healthy dose of creaticity, SADL can deliver a better experience
              for your customers and your develoeprs.
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

export default IndexPage;
