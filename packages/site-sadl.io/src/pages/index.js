import React from "react";

import Layout from "../components/layout";

import { BiggerHeading } from "@sadl/components/components/Heading";
import Link from "@sadl/components/components/Link";
import Text from "@sadl/components/components/Text";

const IndexPage = () => (
  <Layout>
    <BiggerHeading>Simon Andrews Development Limited</BiggerHeading>
    <Text>
      SADL is a registered limited company in England and Wales (10271125). You can get in touch
      at <Link href="mailto:hello@sadl.io">hello@sadl.io</Link>.
    </Text>
  </Layout>
);

export default IndexPage;
