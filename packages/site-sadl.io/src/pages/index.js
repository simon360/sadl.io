import React from "react";

import Layout from "../components/layout";

import { BiggerHeading } from "@sadl/components/components/Heading";
import Text from "@sadl/components/components/Text";

const IndexPage = () => (
  <Layout>
    <BiggerHeading>Simon Andrews Development Limited</BiggerHeading>
    <Text>
      SADL is registered in England and Wales (10271125). You can get in touch
      at <a href="mailto:hello@sadl.io">hello@sadl.io</a>.
    </Text>
  </Layout>
);

export default IndexPage;
